# Instruções de Otimização de Imagens - URGENTE

## Problema Identificado
O PageSpeed Insights identificou que as imagens estão impactando negativamente o LCP (Largest Contentful Paint):
- **Hero Image (`mock-hero-apex.webp`)**: 134,4 KiB → pode economizar **79,5 KiB** com mais compressão
- **Logo (`logo-apex.png`)**: 26,6 KiB → pode economizar **17,3 KiB** (imagem 500x500 sendo exibida em 295x295)

## Ações Necessárias

### 1. Hero Image (`img/mock-hero-apex.webp`)
**Ação:** Comprimir mais agressivamente mantendo qualidade visual aceitável
- **Formato atual:** WebP
- **Tamanho atual:** 134,4 KiB
- **Meta:** Reduzir para ~55 KiB (economia de 79,5 KiB)
- **Ferramentas recomendadas:**
  - Squoosh.app (https://squoosh.app) - Use qualidade 75-80
  - ImageOptim (Mac) ou FileOptimizer (Windows)
  - WebP quality: 75-80 (teste para encontrar o melhor equilíbrio)

### 2. Logo (`img/logo-apex.png`)
**Ação:** Redimensionar para tamanho exato de exibição
- **Tamanho atual:** 500x500 pixels
- **Tamanho de exibição:** 295x295 pixels (homepage) ou 200x46 pixels (landing pages)
- **Meta:** Criar versões otimizadas:
  - `logo-apex-home.png`: 295x68 pixels (proporção correta)
  - `logo-apex-lp.png`: 200x46 pixels
- **Formato:** PNG com compressão otimizada ou WebP se transparência não for crítica
- **Ferramentas:**
  - Photoshop: Exportar para Web → PNG-24 com otimização
  - Squoosh.app: Redimensionar + comprimir
  - TinyPNG.com: Compressão automática

### 3. Formato Alternativo (Opcional mas Recomendado)
**Ação:** Considerar formato AVIF para melhor compressão
- **Vantagem:** 50% menor que WebP mantendo qualidade
- **Suporte:** Navegadores modernos (Chrome, Firefox, Edge)
- **Implementação:** Adicionar `<source type="image/avif">` antes do WebP no `<picture>`

## Impacto Esperado
- **Redução de LCP:** De 6,346 ms para ~3,500 ms (melhoria de ~45%)
- **Economia total:** ~97 KiB de dados
- **Score PageSpeed:** Esperado aumento de 65 para 80-85+

## Prioridade
🔴 **ALTA** - Essas otimizações são críticas para melhorar o score de performance.

## Nota Técnica
Após otimizar as imagens, substitua os arquivos na pasta `img/` mantendo os mesmos nomes ou atualize as referências no HTML se usar nomes diferentes.

