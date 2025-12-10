# Instruções para Conversão da Imagem de Manutenção Predial

## Arquivos que foram atualizados:
- ✅ `index.html` - Seção de serviços (Manutenção Predial Completa)
- ✅ `manutencao-predial.html` - Galeria de imagens

## Nome dos arquivos necessários:
A nova imagem deve ser salva como:
- **JPG:** `img/manutencao-predial-apex.jpg`
- **WebP:** `img/manutencao-predial-apex.webp`

## Como converter a imagem:

### Opção 1: Usando Squoosh.app (Recomendado - Online)
1. Acesse: https://squoosh.app
2. Arraste a foto anexada para o site
3. **Para JPG:**
   - Selecione "MozJPEG" no menu à direita
   - Ajuste a qualidade para **80-85**
   - Clique em "Download"
   - Salve como `manutencao-predial-apex.jpg` na pasta `img/`
4. **Para WebP:**
   - Volte e selecione "WebP" no menu à direita
   - Ajuste a qualidade para **80-85**
   - Clique em "Download"
   - Salve como `manutencao-predial-apex.webp` na pasta `img/`

### Opção 2: Usando Photoshop
1. Abra a imagem no Photoshop
2. **Para JPG:**
   - Arquivo → Exportar → Exportar como...
   - Formato: JPEG
   - Qualidade: 80-85
   - Salve como `manutencao-predial-apex.jpg` na pasta `img/`
3. **Para WebP:**
   - Arquivo → Exportar → Exportar como...
   - Formato: WebP
   - Qualidade: 80-85
   - Salve como `manutencao-predial-apex.webp` na pasta `img/`

### Opção 3: Usando ImageMagick (Linha de comando)
```bash
# Converter para JPG
magick input.jpg -quality 85 img/manutencao-predial-apex.jpg

# Converter para WebP
magick input.jpg -quality 85 img/manutencao-predial-apex.webp
```

### Opção 4: Usando Python (se tiver instalado)
```python
from PIL import Image

# Abrir imagem original
img = Image.open('imagem_original.jpg')

# Salvar como JPG otimizado
img.save('img/manutencao-predial-apex.jpg', 'JPEG', quality=85, optimize=True)

# Salvar como WebP
img.save('img/manutencao-predial-apex.webp', 'WEBP', quality=85, method=6)
```

## Dimensões recomendadas:
- **Largura:** 800-1200 pixels (proporção 4:3)
- **Altura:** 600-900 pixels
- **Aspect Ratio:** Mantenha proporção 4:3 para melhor visualização nos cards

## Otimização de tamanho:
- **JPG:** Deve ter entre 50-150 KB
- **WebP:** Deve ter entre 30-100 KB
- Se o arquivo estiver muito grande, reduza a qualidade para 75-80

## Status:
- ✅ Código HTML atualizado
- ⏳ Aguardando conversão e upload da imagem





