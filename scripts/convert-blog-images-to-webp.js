/**
 * Converte imagens de posts do blog (PNG) para WebP.
 * Uso: node scripts/convert-blog-images-to-webp.js
 */
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'img');
const images = [
  { png: 'blog-escolher-empresa-pintura-industrial.png', webp: 'blog-escolher-empresa-pintura-industrial.webp' },
  { png: 'blog-exigir-empresa-reforma-predial.png', webp: 'blog-exigir-empresa-reforma-predial.webp' }
];

async function convert() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.log('Instale o pacote sharp: npm install sharp');
    process.exit(1);
  }
  for (const { png, webp } of images) {
    const pngPath = path.join(imgDir, png);
    const webpPath = path.join(imgDir, webp);
    if (!fs.existsSync(pngPath)) {
      console.warn('Arquivo não encontrado:', pngPath);
      continue;
    }
    await sharp(pngPath)
      .webp({ quality: 85 })
      .toFile(webpPath);
    const before = fs.statSync(pngPath).size;
    const after = fs.statSync(webpPath).size;
    const reduction = (100 - (after / before) * 100).toFixed(1);
    console.log(`OK: ${png} (${(before/1024/1024).toFixed(2)}MB) -> ${webp} (${(after/1024).toFixed(0)}KB), reducao ${reduction}%`);
  }
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
