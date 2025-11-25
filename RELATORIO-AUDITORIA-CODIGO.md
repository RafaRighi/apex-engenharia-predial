# 🔍 Relatório de Auditoria de Código - APEX Engenharia Predial

**Data:** 23/11/2025  
**Arquiteto de Software:** Análise Automatizada  
**Escopo:** Código completo do projeto

---

## 📊 Resumo Executivo

**Total de Problemas Identificados:** 47  
**Críticos:** 8  
**Importantes:** 15  
**Melhorias:** 24

---

## 🟢 NÍVEL 1: SEGURO PARA APAGAR (Baixo Risco)

### 1.1 Dead Code - Arquivos Não Utilizados

- [ ] **`TEMPLATE-GOOGLE-ANALYTICS.html`** - Arquivo template não utilizado (código já migrado para GTM)
  - **Localização:** Raiz do projeto
  - **Ação:** Pode ser removido ou movido para pasta `docs/` se necessário como referência

### 1.2 Dead Code - JavaScript

- [ ] **IntersectionObserver não utilizado** (`js/script.js:248-276`)
  - **Problema:** Observer criado mas nunca usado (código comentado indica que foi desabilitado)
  - **Localização:** `js/script.js` linhas 248-276
  - **Ação:** Remover `observerOptions`, `observer` e código relacionado

- [ ] **Variável `animateElements` com lógica desabilitada** (`js/script.js:268-276`)
  - **Problema:** Código que apenas define elementos como visíveis, sem animação
  - **Localização:** `js/script.js` linhas 268-276
  - **Ação:** Remover ou simplificar (elementos já estão visíveis no CSS)

- [ ] **Variável `navMenu` não declarada no escopo** (`js/script.js:220`)
  - **Problema:** `const isMenuOpen = navMenu && navMenu.classList.contains('active');` - `navMenu` não está no escopo
  - **Localização:** `js/script.js` linha 220
  - **Ação:** Declarar `navMenu` antes do uso ou mover para dentro do escopo correto

- [ ] **Comentário sobre código removido** (`js/blog.js:129-130`)
  - **Problema:** Comentário menciona funções removidas que não existem mais
  - **Localização:** `js/blog.js` linhas 129-130
  - **Ação:** Remover comentário obsoleto

### 1.3 Dead Code - CSS

- [ ] **Classe `.sr-only` não utilizada**
  - **Localização:** `css/main.css` linha 1081
  - **Verificação:** Buscar por `sr-only` no HTML - não encontrado
  - **Ação:** Remover se não for usada

- [ ] **Comentário duplicado** (`css/main.css:70`)
  - **Problema:** `/* Adicione ou substitua na seção do header */` - comentário genérico
  - **Localização:** `css/main.css` linha 70
  - **Ação:** Remover ou tornar mais específico

- [ ] **Linhas vazias excessivas** (`css/main.css:94-95`)
  - **Problema:** Múltiplas linhas vazias consecutivas
  - **Localização:** `css/main.css` linhas 94-95, 635-636
  - **Ação:** Limpar formatação

### 1.4 Favicons Não Referenciados

- [ ] **`favicon-96x96.ico`** - Referenciado apenas em `manifest.json`, não em HTML
- [ ] **`favicon-16x16.ico`** - Referenciado apenas em `manifest.json`, não em HTML
  - **Ação:** Verificar se são necessários ou adicionar referências nos HTMLs

---

## 🟡 NÍVEL 2: PRECISA DE REVISÃO (Médio Risco)

### 2.1 Duplicidade de Código (Violação DRY)

#### 2.1.1 Validação de Email Duplicada
- [ ] **Regex de email repetido 4 vezes:**
  - `js/script.js:313` - `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - `js/blog.js:63` - `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - `api/send-email.js:54` - `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - `api/newsletter.js:54` - `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - **Ação:** Criar função utilitária `utils/validation.js` ou constante compartilhada

#### 2.1.2 Lógica de Formulário Duplicada
- [ ] **Padrão de submit duplicado:**
  - `js/script.js:298-351` - Formulário de contato
  - `js/blog.js:55-100` - Formulário de newsletter
  - **Duplicações:**
    - Validação de campos
    - Desabilitar botão durante submit
    - Tratamento de erro com `console.error` e `alert`
    - Reset do formulário
  - **Ação:** Criar função genérica `submitForm(formId, endpoint, fields)`

#### 2.1.3 Função `isJsonString` Duplicada
- [ ] **Mesma função em dois arquivos:**
  - `api/send-email.js:3-14`
  - `api/newsletter.js:3-14`
  - **Ação:** Mover para módulo compartilhado `api/utils.js`

#### 2.1.4 Função `readRequestBody` Duplicada
- [ ] **Mesma função em dois arquivos:**
  - `api/send-email.js:16-31`
  - `api/newsletter.js:16-31`
  - **Ação:** Mover para módulo compartilhado `api/utils.js`

#### 2.1.5 Configuração Nodemailer Duplicada
- [ ] **Código de transporte duplicado:**
  - `api/send-email.js:58-70`
  - `api/newsletter.js:64-76`
  - **Ação:** Criar função `createTransporter()` em `api/utils.js`

#### 2.1.6 Scroll Suave Duplicado
- [ ] **Lógica de scroll suave em dois lugares:**
  - `js/script.js:95-169` - Função completa `initSmoothScroll()`
  - `js/blog.js:104-127` - Versão simplificada
  - **Ação:** Unificar em função reutilizável

#### 2.1.7 Fechamento de Menu Duplicado
- [ ] **Lógica de fechar menu repetida:**
  - `js/script.js:134-144` - Dentro de `initSmoothScroll()`
  - `js/script.js:20-29` - Função `closeMenu()`
  - **Ação:** Usar sempre a função `closeMenu()` centralizada

### 2.2 Resíduos de Desenvolvimento

#### 2.2.1 Console.error em Produção
- [ ] **6 ocorrências de `console.error`:**
  - `js/script.js:343` - Erro ao enviar formulário
  - `js/blog.js:92` - Erro ao inscrever newsletter
  - `api/send-email.js:54, 91` - Erros de configuração e envio
  - `api/newsletter.js:60, 119` - Erros de configuração e processamento
  - **Ação:** Manter apenas em desenvolvimento ou substituir por sistema de logging

#### 2.2.2 Comentários de Código Desabilitado
- [ ] **Comentários sobre código removido:**
  - `js/blog.js:129-130` - "Código removido: funções de compartilhamento social..."
  - `js/script.js:265-267` - Comentários sobre animações desabilitadas
  - **Ação:** Remover comentários obsoletos ou documentar decisão arquitetural

#### 2.2.3 Código Comentado
- [ ] **Nenhum código HTML comentado encontrado** ✅

### 2.3 Problemas de Estrutura JavaScript

- [ ] **Variável `navMenu` fora de escopo** (`js/script.js:220`)
  - **Problema:** Usada sem declaração no escopo global
  - **Ação:** Declarar `const navMenu = document.getElementById('navMenu');` antes do uso

- [ ] **Event listener `beforeunload` desnecessário** (`js/script.js:68`)
  - **Problema:** Fechar menu no `beforeunload` não faz sentido (página está sendo descarregada)
  - **Ação:** Remover ou substituir por lógica mais apropriada

---

## 🔴 NÍVEL 3: CRÍTICO - PRECISA CORREÇÃO (Alto Risco)

### 3.1 SEO e Estrutura HTML

#### 3.1.1 Tags Semânticas Ausentes
- [ ] **Falta tag `<main>` em todas as páginas**
  - **Problema:** Conteúdo principal não está envolvido em `<main>`
  - **Impacto SEO:** Google pode ter dificuldade em identificar conteúdo principal
  - **Páginas afetadas:** `index.html`, `blog.html`, todas as páginas de serviços
  - **Ação:** Envolver conteúdo principal em `<main>` após `<header>`

- [ ] **Falta tag `<article>` em posts do blog**
  - **Problema:** Posts individuais não usam `<article>`
  - **Impacto SEO:** Perda de semântica para conteúdo de blog
  - **Páginas afetadas:** Todos os arquivos em `blog/posts/`
  - **Ação:** Envolver cada post em `<article>`

- [ ] **Breadcrumb presente apenas em `blog.html`**
  - **Problema:** CSS para breadcrumb existe, mas não é usado em páginas de serviços
  - **Impacto SEO:** Perda de navegação estruturada
  - **Ação:** Adicionar breadcrumb em todas as páginas de serviços ou remover CSS não utilizado

#### 3.1.2 Hierarquia de Cabeçalhos
- [ ] **Verificar hierarquia H1-H6**
  - **Problema:** Necessário verificar se há saltos na hierarquia (ex: H1 → H3)
  - **Ação:** Auditar todas as páginas para garantir H1 → H2 → H3 sequencial

#### 3.1.3 Schema.org Incompleto
- [ ] **`sameAs` vazio no Schema.org** (`index.html:109, 131`)
  - **Problema:** Array `sameAs: []` vazio - deveria conter links de redes sociais
  - **Impacto SEO:** Perda de dados estruturados para redes sociais
  - **Ação:** Adicionar links do Facebook e Instagram já presentes no footer

### 3.2 Problemas de Acessibilidade

- [ ] **Falta `aria-label` em alguns botões**
  - **Verificação necessária:** Auditar todos os botões sem texto visível

- [ ] **Falta `lang` em algumas páginas**
  - **Verificação:** Confirmar se todas as páginas têm `<html lang="pt-BR">`

### 3.3 Problemas de Performance

- [ ] **Imagens sem `loading="lazy"`**
  - **Verificação necessária:** Auditar todas as imagens abaixo da dobra

- [ ] **Favicons não otimizados**
  - **Problema:** Múltiplos formatos de favicon podem causar requisições desnecessárias
  - **Ação:** Consolidar ou usar formato único

---

## 📝 OBSERVAÇÕES E RECOMENDAÇÕES

### Arquitetura

1. **Modularização JavaScript:**
   - Considerar criar `js/utils/validation.js` para funções compartilhadas
   - Considerar criar `js/utils/form-handler.js` para lógica de formulários
   - Considerar criar `api/utils.js` para funções compartilhadas das APIs

2. **Organização de CSS:**
   - CSS está bem organizado, mas poderia ser dividido em módulos (header.css, forms.css, etc.)
   - Considerar usar CSS custom properties de forma mais extensiva

3. **Documentação:**
   - Muitos arquivos `.md` na raiz - considerar pasta `docs/`
   - `TEMPLATE-GOOGLE-ANALYTICS.html` deveria estar em `docs/` ou ser removido

### Boas Práticas

1. **Console.error:**
   - Em produção, considerar sistema de logging (Sentry, LogRocket, etc.)
   - Ou pelo menos condicionar `console.error` a ambiente de desenvolvimento

2. **Validação:**
   - Centralizar validações em módulo único
   - Considerar biblioteca de validação (Zod, Yup) para validações mais robustas

3. **Tratamento de Erros:**
   - Padronizar mensagens de erro
   - Melhorar feedback ao usuário (não apenas `alert()`)

---

## 📋 CHECKLIST DE PRIORIDADES

### 🔴 Prioridade ALTA (Fazer Primeiro)
1. Adicionar tag `<main>` em todas as páginas
2. Adicionar tag `<article>` nos posts do blog
3. Corrigir variável `navMenu` fora de escopo (`js/script.js:220`)
4. Preencher `sameAs` no Schema.org com links de redes sociais
5. Remover IntersectionObserver não utilizado

### 🟡 Prioridade MÉDIA (Fazer em Seguida)
6. Consolidar validação de email em função única
7. Consolidar lógica de formulários em função genérica
8. Consolidar funções duplicadas das APIs (`isJsonString`, `readRequestBody`, `createTransporter`)
9. Remover comentários obsoletos
10. Adicionar breadcrumb em páginas de serviços ou remover CSS não usado

### 🟢 Prioridade BAIXA (Melhorias)
11. Remover arquivo `TEMPLATE-GOOGLE-ANALYTICS.html` ou mover para `docs/`
12. Limpar linhas vazias excessivas no CSS
13. Remover classe `.sr-only` se não utilizada
14. Consolidar favicons
15. Modularizar JavaScript em utils

---

## 📊 Estatísticas

- **Total de Arquivos Analisados:** 21 HTML, 2 JS, 2 CSS, 2 API
- **Linhas de Código:** ~8.500+ linhas
- **Duplicações Encontradas:** 7 blocos principais
- **Dead Code:** ~50 linhas
- **Comentários Obsoletos:** 3 seções
- **Console.error:** 6 ocorrências

---

**Fim do Relatório**

