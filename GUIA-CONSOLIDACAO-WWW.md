# Guia: Consolidar www e não-www no Google Search Console

## ⚠️ IMPORTANTE
A ferramenta "Mudança de endereço" **NÃO funciona** para consolidar www e não-www. Ela é apenas para mudanças de domínio completo.

## ✅ SOLUÇÃO CORRETA: Passo a Passo

### PASSO 1: Verificar se ambas as propriedades estão adicionadas

1. No Google Search Console, clique no **seletor de propriedade** (dropdown no topo)
2. Verifique se você tem **DUAS propriedades**:
   - `apexengenhariapredial.com.br` (sem www)
   - `www.apexengenhariapredial.com.br` (com www)

**Se faltar alguma:**
- Clique em **"+ Adicionar propriedade"**
- Adicione a versão que está faltando
- Verifique a propriedade seguindo as instruções do Google

---

### PASSO 2: Definir a propriedade PREFERIDA (www)

**A propriedade preferida será:** `www.apexengenhariapredial.com.br`

**Por quê?**
- ✅ Já tem mais páginas indexadas (20 vs 5)
- ✅ É a versão usada no sitemap
- ✅ É a versão usada nas canonical tags
- ✅ É a versão para onde o redirect aponta

---

### PASSO 3: Configurar Sitemap APENAS na propriedade www

1. **Na propriedade COM www** (`www.apexengenhariapredial.com.br`):
   - Vá em **"Sitemaps"** (menu lateral)
   - Adicione: `https://www.apexengenhariapredial.com.br/sitemap.xml`
   - Clique em **"ENVIAR"**

2. **Na propriedade SEM www** (`apexengenhariapredial.com.br`):
   - Vá em **"Sitemaps"** (menu lateral)
   - **REMOVA** qualquer sitemap que esteja lá
   - Isso força o Google a usar apenas a versão www

---

### PASSO 4: Verificar Redirects (já está configurado ✅)

O arquivo `vercel.json` já tem o redirect configurado:
- `apexengenhariapredial.com.br` → `www.apexengenhariapredial.com.br` (301)

**Para verificar se está funcionando:**
1. Abra uma aba anônima no navegador
2. Acesse: `http://apexengenhariapredial.com.br`
3. Deve redirecionar automaticamente para `https://www.apexengenhariapredial.com.br`

---

### PASSO 5: Verificar Canonical Tags (já está configurado ✅)

Todas as páginas já têm:
```html
<link rel="canonical" href="https://www.apexengenhariapredial.com.br/...">
```

Isso está correto! ✅

---

### PASSO 6: Solicitar Reindexação das Páginas Principais

**Na propriedade COM www** (`www.apexengenhariapredial.com.br`):

1. Vá em **"Inspeção de URL"**
2. Para cada página principal, insira a URL e clique em **"Solicitar indexação"**:
   - `https://www.apexengenhariapredial.com.br/`
   - `https://www.apexengenhariapredial.com.br/pintura-predial.html`
   - `https://www.apexengenhariapredial.com.br/restauracao-fachadas.html`
   - `https://www.apexengenhariapredial.com.br/impermeabilizacao.html`
   - `https://www.apexengenhariapredial.com.br/trabalhos-em-altura.html`
   - `https://www.apexengenhariapredial.com.br/manutencao-reforma-telhados.html`
   - `https://www.apexengenhariapredial.com.br/demarcacoes-pisos.html`
   - `https://www.apexengenhariapredial.com.br/blog.html`

---

### PASSO 7: Monitorar a Consolidação

**O que vai acontecer:**

1. **Nas próximas semanas:**
   - O Google vai começar a consolidar as páginas
   - Páginas da versão sem www vão ser redirecionadas para a versão com www
   - O número de páginas indexadas na propriedade **com www** vai aumentar
   - O número de páginas indexadas na propriedade **sem www** vai diminuir

2. **Como monitorar:**
   - Acompanhe semanalmente em **"Indexação > Páginas"**
   - Na propriedade **com www**: número deve aumentar
   - Na propriedade **sem www**: número deve diminuir

3. **Tempo esperado:**
   - **2-4 semanas** para começar a ver mudanças significativas
   - **2-3 meses** para consolidação completa

---

## 📊 Resumo do Estado Atual

| Propriedade | Páginas Indexadas | Status |
|------------|-------------------|--------|
| `www.apexengenhariapredial.com.br` | **20** | ✅ Preferida |
| `apexengenhariapredial.com.br` | 5 | ⚠️ Será consolidada |

---

## ✅ Checklist de Ações

- [ ] Verificar se ambas as propriedades estão adicionadas no Search Console
- [ ] Enviar sitemap APENAS na propriedade com www
- [ ] Remover sitemap da propriedade sem www (se houver)
- [ ] Verificar se redirect 301 está funcionando
- [ ] Solicitar reindexação das páginas principais na propriedade com www
- [ ] Monitorar consolidação semanalmente

---

## 🎯 Resultado Esperado

Após 2-3 meses:
- **Propriedade com www**: ~34 páginas indexadas (todas as páginas)
- **Propriedade sem www**: 0 páginas indexadas (tudo redirecionado)

---

## ❓ Dúvidas Frequentes

**P: Por que não usar "Mudança de endereço"?**
R: Essa ferramenta é para mudanças de domínio completo (ex: site.com → site2.com), não para consolidar www e não-www.

**P: Vou perder as páginas indexadas?**
R: Não! Elas serão migradas para a propriedade com www. O Google entende que são a mesma página.

**P: Quanto tempo leva?**
R: 2-4 semanas para começar, 2-3 meses para consolidar completamente.

**P: Preciso fazer mais alguma coisa?**
R: Não! O redirect 301 e canonical tags já estão corretos. Apenas aguarde o Google processar.



