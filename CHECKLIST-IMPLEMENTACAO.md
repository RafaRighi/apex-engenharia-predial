# ✅ CHECKLIST DE IMPLEMENTAÇÃO - Site APEX

Use este checklist para acompanhar seu progresso!

---

## 📦 **FASE 1: DEPLOY NO VERCEL**

- [ ] Criar conta no Vercel (https://vercel.com)
- [ ] Conectar com GitHub
- [ ] Importar projeto `apex-engenharia-predial`
- [ ] Fazer deploy inicial
- [ ] Verificar URL temporária funcionando
- [ ] **Status:** 🟡 Site no ar (URL temporária)

---

## 🌐 **FASE 2: CONFIGURAR DNS**

- [ ] Ir em Settings > Domains no Vercel
- [ ] Adicionar domínio: `apexengenharia.com.br`
- [ ] Copiar configurações DNS (A e CNAME)
- [ ] Acessar registrador de domínio (Registro.br)
- [ ] Adicionar registro A: `@` → IP do Vercel
- [ ] Adicionar registro CNAME: `www` → cname.vercel-dns.com
- [ ] Salvar alterações
- [ ] Aguardar propagação (10-30 minutos)
- [ ] Testar: `https://apexengenharia.com.br`
- [ ] Testar: `https://www.apexengenharia.com.br`
- [ ] **Status:** 🟢 Domínio funcionando!

---

## 🔍 **FASE 3: GOOGLE SEARCH CONSOLE**

- [ ] Criar conta (https://search.google.com/search-console)
- [ ] Adicionar propriedade: `apexengenharia.com.br`
- [ ] Escolher método DNS
- [ ] Copiar código de verificação TXT
- [ ] Adicionar registro TXT no DNS:
  - Tipo: TXT
  - Nome: @
  - Valor: `google-site-verification=XXXXXXXXXXXXXX`
- [ ] Salvar alterações
- [ ] Voltar ao Search Console e clicar "Verificar"
- [ ] Aguardar verificação (pode demorar)
- [ ] Enviar sitemap: `https://apexengenharia.com.br/sitemap.xml`
- [ ] **Status:** 🟢 Search Console configurado!

---

## 📊 **FASE 4: GOOGLE ANALYTICS**

- [ ] Criar conta (https://analytics.google.com)
- [ ] Criar propriedade "Site APEX Engenharia"
- [ ] Criar fluxo de dados Web
- [ ] Copiar ID de Medição: `G-XXXXXXXXXX`
- [ ] Abrir arquivo `index.html`
- [ ] Localizar seção Google Analytics (linha ~48)
- [ ] Substituir `G-XXXXXXXXXX` pelo ID real
- [ ] Descomentar código (remover `<!--` e `-->`)
- [ ] Salvar arquivo
- [ ] GitHub Desktop: Commit + Push
- [ ] Aguardar deploy no Vercel
- [ ] Testar Analytics (acessar site e verificar em Tempo Real)
- [ ] **Status:** 🟢 Google Analytics funcionando!

---

## ✅ **FASE 5: VERIFICAÇÃO FINAL**

- [ ] Site acessível em `apexengenharia.com.br`
- [ ] Site acessível em `www.apexengenharia.com.br`
- [ ] SSL/HTTPS funcionando (cadeado verde)
- [ ] Todas as páginas carregando
- [ ] Google Search Console verificado
- [ ] Google Analytics mostrando visitas
- [ ] Sitemap enviado e processado
- [ ] **Status:** 🟢 TUDO FUNCIONANDO!

---

## 📸 **FASE 6: DEPOIS (OPCIONAL)**

- [ ] Trocar fotos quando quiser
- [ ] Otimizar imagens
- [ ] Adicionar mais conteúdo
- [ ] Monitorar Analytics
- [ ] Acompanhar Search Console

---

## 🎯 **PROGRESSO ATUAL**

**Fase atual:** _______________

**Status geral:** 🟡 Em andamento / 🟢 Concluído

**Próximo passo:** _______________

---

## 📝 **ANOTAÇÕES IMPORTANTES**

**ID Google Analytics:** `G-_______________`

**Domínio:** `apexengenharia.com.br`

**URL Vercel temporária:** `https://_______________.vercel.app`

**Código verificação Google:** `google-site-verification=_______________`

---

**Data início:** _______________

**Data conclusão:** _______________

