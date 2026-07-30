#!/usr/bin/env node
// Gera sitemap-pages.xml e sitemap-posts.xml a partir dos arquivos .html
// realmente versionados no repositório, para não depender de atualização
// manual a cada página nova. Sem dependências externas.

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const BASE_URL = 'https://www.apexengenhariapredial.com.br';

const EXCLUDE_ROOT_FILES = new Set(['404.html', 'blog.html']);

function trackedHtmlFiles() {
  return execSync('git ls-files -- "*.html"', { cwd: ROOT })
    .toString()
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

// Prioridade/changefreq por padrão de URL. A primeira regra que casar vence.
const PAGE_RULES = [
  { test: (url) => url === '/', priority: '1.0', changefreq: 'weekly' },
  { test: (url) => /^\/lp-/.test(url), priority: '0.8', changefreq: 'monthly' },
  { test: (url) => /-(canoas|gravatai|sao-leopoldo|esteio|litoral|novo-hamburgo)\.html$/.test(url), priority: '0.7', changefreq: 'monthly' },
  { test: () => true, priority: '0.9', changefreq: 'monthly' },
];

const POST_RULE = { priority: '0.5', changefreq: 'monthly' };
const BLOG_HUB_RULE = { priority: '0.8', changefreq: 'weekly' };

function lastmodFor(absPath) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${absPath}"`, { cwd: ROOT }).toString().trim();
    if (out) return out;
  } catch (e) {
    // arquivo não versionado ainda ou git indisponível
  }
  return new Date().toISOString().slice(0, 10);
}

function collectRootPages(trackedFiles) {
  const urls = [];

  for (const relPath of trackedFiles) {
    const segments = relPath.split('/');

    // Só páginas na raiz (nome.html, index.html) ou index.html de uma
    // subpasta de 1 nível (URL "bonita" tipo /pintura-industrial/).
    if (segments.length === 1) {
      const name = segments[0];
      if (EXCLUDE_ROOT_FILES.has(name)) continue;
      const urlPath = name === 'index.html' ? '/' : `/${name}`;
      urls.push({ urlPath, absPath: path.join(ROOT, relPath) });
    } else if (segments.length === 2 && segments[1] === 'index.html') {
      urls.push({ urlPath: `/${segments[0]}/`, absPath: path.join(ROOT, relPath) });
    }
  }

  return urls;
}

function collectBlogEntries(trackedFiles) {
  const entries = [{ urlPath: '/blog.html', absPath: path.join(ROOT, 'blog.html'), rule: BLOG_HUB_RULE }];

  trackedFiles
    .filter((relPath) => relPath.startsWith('blog/posts/'))
    .forEach((relPath) => {
      entries.push({ urlPath: `/${relPath}`, absPath: path.join(ROOT, relPath), rule: POST_RULE });
    });

  return entries;
}

function urlEntry({ urlPath, absPath }, rule) {
  return [
    '    <url>',
    `        <loc>${BASE_URL}${urlPath}</loc>`,
    `        <lastmod>${lastmodFor(absPath)}</lastmod>`,
    `        <changefreq>${rule.changefreq}</changefreq>`,
    `        <priority>${rule.priority}</priority>`,
    '    </url>',
  ].join('\n');
}

function buildUrlset(entries) {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');
}

function buildSitemapIndex(fileNames) {
  const today = new Date().toISOString().slice(0, 10);
  const entries = fileNames
    .map((name) => `    <sitemap>\n        <loc>${BASE_URL}/${name}</loc>\n        <lastmod>${today}</lastmod>\n    </sitemap>`)
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</sitemapindex>',
    '',
  ].join('\n');
}

function main() {
  const trackedFiles = trackedHtmlFiles();

  const pages = collectRootPages(trackedFiles).sort((a, b) => a.urlPath.localeCompare(b.urlPath));
  const blogEntries = collectBlogEntries(trackedFiles);

  const pageEntries = pages.map((page) => {
    const rule = PAGE_RULES.find((r) => r.test(page.urlPath));
    return urlEntry(page, rule);
  });
  const postEntries = blogEntries.map((entry) => urlEntry(entry, entry.rule));

  fs.writeFileSync(path.join(ROOT, 'sitemap-pages.xml'), buildUrlset(pageEntries));
  fs.writeFileSync(path.join(ROOT, 'sitemap-posts.xml'), buildUrlset(postEntries));
  fs.writeFileSync(path.join(ROOT, 'sitemap_index.xml'), buildSitemapIndex(['sitemap-pages.xml', 'sitemap-posts.xml']));

  console.log(`sitemap-pages.xml: ${pages.length} URLs`);
  console.log(`sitemap-posts.xml: ${blogEntries.length} URLs`);
  console.log(`Total: ${pages.length + blogEntries.length} URLs`);
}

main();
