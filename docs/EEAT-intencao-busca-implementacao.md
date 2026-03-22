# Implementação E-E-A-T + intenção de busca (APEX)

Referência alinhada às ideias de **confiança digital** (E-E-A-T) e **resposta à intenção de busca** (conteúdo que resolve a pergunta do síndico/gestor, não só palavra-chave).

---

## Onde foi inserido no site

| Elemento | Arquivo / posição |
|----------|-------------------|
| **Meta publisher** | `index.html` e `blog.html` (`<meta name="publisher" content="APEX Engenharia Predial">`) — reduz aviso “Publisher is missing” em extensões de SEO. |
| **Bloco credenciais e segurança** | `index.html` — seção `#credenciais-seguranca`, **logo após** “Sobre a APEX” e **antes** de “Serviços Realizados”. |
| **Bloco dúvidas / intenção** | `index.html` — seção `#duvidas-sindicos`, **depois** do preview do blog e **antes** do FAQ. |
| **Intro + autoria no blog** | `blog.html` — **entre** o hero do blog e a área principal (`blog-main`). |
| **Rodapé do blog (contato)** | `blog.html` — parágrafo extra em `footer-bottom` com telefone, e-mail, sede e link para `#duvidas-sindicos`. |
| **Autoria em cada artigo** | `blog/posts/*.html` (11 posts, sem arquivos “Copia”) — bloco **após** o `</article>` principal e **antes** de “Conheça nossos serviços”. |
| **Estilos** | `css/main.css` (home), `css/blog.css` (blog e posts). |

---

## Mapeamento: pergunta → intenção → link

| Pergunta típica | Intenção | Link principal |
|-----------------|----------|----------------|
| Quando pintar a fachada? | Sinais de desgaste / timing | `blog/posts/restauracao-fachadas-quando-fazer.html` |
| Quanto custa? | Orçamento, faixas, variáveis | `blog/posts/quanto-custa-restauracao-fachada-porto-alegre.html` |
| Qual o prazo? | Cronograma | Mesmo guia de custos + `/#faq` (FAQ prazo fachada) |
| Como reduzir custos (preventiva)? | Planejamento / ciclo de vida | `blog/posts/manutencao-preventiva-edificios.html` |
| Trincas e infiltrações? | Patologia e barreira | `blog/posts/impermeabilizacao-prevencao-infiltracoes.html` + `restauracao-fachadas.html` |
| Materiais / tintas? | Especificação técnica | `escolher-tinta-ideal-fachada.html` + `pintura-acrilica-vs-esmalte.html` |
| Normas de segurança? | Conformidade NR35 etc. | `nr35-seguranca-trabalho-altura.html` + `trabalhos-em-altura.html` |
| O que exigir na contratação? | Auditoria / documentos | `o-que-exigir-ao-contratar-empresa-reforma-predial.html` |
| Pintura industrial / epóxi | Escolha de fornecedor / sistema | `como-escolher-melhor-empresa-pintura-industrial.html`, `pintura-epoxi-guia-completo.html` |
| Valorização do imóvel | Reformas estratégicas | `reformas-que-valorizam-imovel.html` |

---

## Coerência de contato e região

- **Telefone:** (51) 98107-8843 — `tel:+5551981078843`  
- **E-mail:** contato@apexengenhariapredial.com.br  
- **Endereço (schema e textos):** Rua Major Sezefredo, 1093 — Canoas/RS  
- **Atuação:** Porto Alegre, RM e RS (repetido nos blocos novos)

---

## Manutenção futura

- Novo post: copiar o bloco `<aside class="author-box" ...>` de qualquer artigo atual.  
- Novo “cluster” de intenção: incluir item na lista `#duvidas-sindicos` em `index.html` e, se fizer sentido, bullet na intro do `blog.html`.  
- Se a obrigatoriedade de **ART/RRT** mudar por tipo de serviço, ajustar o card “Procedimentos e responsabilidade técnica” na home com assessoria do CREA/engenheiro responsável.

---

## Transcrições (contexto do prompt)

Os arquivos em `Downloads` reforçam: (1) Google ranqueia **resposta à intenção**, não só volume de texto; (2) **E-E-A-T** exige experiência, expertise, autoridade e confiança — com **autoria**, **credenciais** e **transparência** visíveis no site.
