# Diretrizes de SEO do Google (2024)

Documento de referência com as principais diretrizes e boas práticas do Google para busca orgânica em 2024. Use para alinhar conteúdo, técnica e experiência do site.

---

## 1. Conteúdo útil e “people-first”

O Google prioriza **conteúdo feito para pessoas**, não para mecanismos de busca.

- Criar conteúdo que **resolva dúvidas e necessidades reais** do usuário.
- Oferecer **valor real** em relação a outros resultados (originalidade, pesquisa, análise).
- Evitar conteúdo **superficial**, **copiado** ou apenas reescrito sem valor adicional.
- Garantir **qualidade editorial**: sem erros evidentes, com estrutura clara e linguagem adequada.
- Fazer conteúdo **completo o suficiente** para ser usado como referência (ex.: artigo que alguém citaria).

**Perguntas de autoavaliação (Google):**

- O usuário sai satisfeito após ler/ver o conteúdo?
- O conteúdo foi feito primeiro para o leitor ou principalmente para ranquear?
- O site tem expertise reconhecida no assunto?

---

## 2. E-E-A-T (Experiência, Expertise, Autoridade, Confiança)

O Google usa E-E-A-T para avaliar qualidade, principalmente em temas sensíveis (saúde, finanças, segurança – YMYL).

| Letra | O que demonstrar |
|-------|-------------------|
| **Experiência** | Conhecimento de primeira mão; quem fez/usou/atestou o que está no conteúdo. |
| **Expertise** | Conhecimento técnico ou especializado no tema. |
| **Autoridade** | Reconhecimento do site e dos autores no assunto (citações, parcerias, menções). |
| **Confiança** | Transparência (quem escreveu, quando, fontes), precisão e boa reputação. |

**Na prática:**

- Deixar claro **quem** é o autor ou a empresa e **por que** pode falar do assunto.
- Usar **fontes** e dados quando fizer sentido.
- Evitar **erros factuais** fáceis de checar.
- Manter **informações de contato** e sobre a empresa visíveis (sobre, contato, políticas).

---

## 3. O que fazer

- Conteúdo **original** (pesquisa, análise, opinião fundamentada).
- **Títulos e meta description** que descrevam bem a página e motivem o clique.
- **URLs** curtas e descritivas quando possível.
- **Estrutura** clara: H1 único, H2/H3 em ordem lógica, parágrafos e listas legíveis.
- **Imagens** com `alt` descritivo e nomes de arquivo significativos.
- **Links internos** para páginas relevantes (serviços, regiões, blog).
- **Dados estruturados** (Schema.org) quando aplicável (ex.: FAQ, organização, artigo).
- **Seção de FAQ** em páginas de serviço ou produto, com schema FAQPage (veja seção abaixo).
- Site **mobile-first**: rápido e usável em celular.
- **HTTPS** e sem bloqueios desnecessários para rastreamento no robots.txt.

---

## 4. O que evitar

- Conteúdo criado **só para ranquear** ou encher de palavras-chave.
- **Duplicação** ou conteúdo “thin” (pouco valor, só para ter página).
- **Cloaking**: mostrar uma coisa ao usuário e outra ao Google.
- **Links** comprados ou em redes só para manipular ranking.
- **Spam** (texto oculto, redirecionamentos enganosos, páginas doorway).
- Excesso de **anúncios** ou interstitiais que atrapalham a leitura.
- **Experiência ruim** no mobile (lento, difícil de usar).

---

## 5. Search Essentials (requisitos técnicos de base)

O Google Search Essentials (ex-Webmaster Guidelines) resume:

- Conteúdo **útil e people-first**.
- Links **rastreáveis** (não bloqueados sem necessidade).
- Uso de **palavras-chave** em lugares relevantes (título, headings, texto), sem excesso.
- Otimização de **imagens e vídeos** (alt, legendas, formato).
- Uso de **structured data** onde fizer sentido.

Sites que violam as políticas de spam ou as diretrizes técnicas podem ter visibilidade reduzida ou ser removidos dos resultados.

---

## 6. Core Web Vitals (experiência e desempenho)

Métricas que o Google usa para avaliar a experiência da página:

| Métrica | O que mede | Meta (bom) |
|--------|------------|------------|
| **LCP** (Largest Contentful Paint) | Velocidade do maior elemento visível | &lt; 2,5 s |
| **INP** (Interaction to Next Paint) | Responsividade ao interagir (substitui FID em 2024) | &lt; 200 ms |
| **CLS** (Cumulative Layout Shift) | Estabilidade visual (pouco “pulo” de layout) | &lt; 0,1 |

**Boas práticas:**

- Otimizar **imagens** (formato WebP, tamanho adequado, lazy load).
- Reduzir **JavaScript** bloqueante e adiar o não essencial.
- Reservar **espaço** para imagens/embeds (evitar CLS).
- Melhorar **tempo de resposta** do servidor e considerar CDN se fizer sentido.

Monitorar no **Google Search Console** (relatório Core Web Vitals) e no **PageSpeed Insights**.

---

## 7. Seção de FAQ e dados estruturados

A **seção de FAQ** (perguntas frequentes) ajuda no SEO e na experiência do usuário. O Google pode exibir trechos expandíveis nos resultados de busca quando a página tem **schema FAQPage** válido.

**Por que usar FAQ:**

- Responde dúvidas reais (alinhado a conteúdo people-first e E-E-A-T).
- Aumenta a chance de **rich results** (FAQ em destaque na SERP).
- Mantém o usuário na página e reforça autoridade no tema.

**Boas práticas:**

- Perguntas **naturais**, como o público realmente pergunta (incluir termos de busca quando fizer sentido).
- Respostas **objetivas e úteis**, sem texto só para encher.
- **Schema FAQPage** em JSON-LD: cada item com `Question` (name) e `Answer` (text), dentro de `mainEntity`.
- O conteúdo visível da FAQ na página deve **coincidir** com o que está no schema (não criar FAQ só no schema).

**Exemplo mínimo de schema (JSON-LD):**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pergunta 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Resposta completa aqui."
      }
    }
  ]
}
```

Inserir no `<head>` da página em `<script type="application/ld+json">...</script>`.

**No site:** As páginas de Pintura Predial, Impermeabilização e Restauração de Fachadas já possuem seção FAQ com schema FAQPage. Replicar o padrão em outras páginas de serviço quando fizer sentido.

---

## 8. Resumo rápido para o site

- **Conteúdo:** Útil, original, com E-E-A-T (quem somos, onde atuamos, por que confiar).
- **Técnico:** Mobile-first, rápido (LCP/INP/CLS), HTTPS, títulos e metas por página.
- **Estrutura:** H1 por página, headings em ordem, links internos, alt em imagens.
- **FAQ:** Manter seção FAQ + schema FAQPage nas páginas de serviço (já em pintura predial, impermeabilização, fachadas).
- **Evitar:** Conteúdo só para SEO, duplicação, spam e experiência ruim no celular.

---

## 9. Referências oficiais

- [Google Search Central – Documentação](https://developers.google.com/search/docs)
- [Search Essentials (ex-Webmaster Guidelines)](https://developers.google.com/search/docs/essentials)
- [Criar conteúdo útil e confiável (people-first)](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)

*Documento criado para uso interno do projeto. Atualizado com base nas diretrizes e atualizações do Google em 2024.*
