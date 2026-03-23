/**
 * Converte as logos do rodapé (PNG) para WebP.
 * Coloque na pasta img/ os arquivos:
 *   - logo-nr18.png (selo NR 18 - Equipamentos dentro das normas)
 *   - logo-zurich-empresa-garantida.png (selo Zurich Empresa Garantida)
 * Depois execute: node scripts/convert-logos-to-webp.js
 */
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'img');
const logos = [
  { png: 'logo-nr18.png', webp: 'logo-nr18.webp' },
  { png: 'logo-zurich-empresa-garantida.png', webp: 'logo-zurich-empresa-garantida.webp' }
];

async function convert() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.log('Instale o pacote sharp: npm install sharp');
    process.exit(1);
  }
  for (const { png, webp } of logos) {
    const pngPath = path.join(imgDir, png);
    const webpPath = path.join(imgDir, webp);
    if (!fs.existsSync(pngPath)) {
      console.warn('Arquivo não encontrado:', pngPath);
      continue;
    }
    await sharp(pngPath)
      .webp({ quality: 85 })
      .toFile(webpPath);
    console.log('OK:', png, '->', webp);
  }
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
