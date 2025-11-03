# 🚀 GUIA COMPLETO: Implementação do Site APEX no Vercel

## 📋 **ÍNDICE**
1. [Deploy Inicial no Vercel](#1-deploy-inicial-no-vercel)
2. [Configurar DNS Personalizado](#2-configurar-dns-personalizado)
3. [Configurar Google Search Console](#3-configurar-google-search-console)
4. [Configurar Google Analytics](#4-configurar-google-analytics)
5. [Verificar Site Funcionando](#5-verificar-site-funcionando)

---

## 1. DEPLOY INICIAL NO VERCEL

### **1.1. Criar Conta no Vercel**

1. Acesse: **https://vercel.com**
2. Clique em **"Sign Up"** (no canto superior direito)
3. Escolha **"Continue with GitHub"** (recomendado)
4. Autorize o Vercel a acessar seu GitHub
5. ✅ Conta criada!

### **1.2. Importar Projeto do GitHub**

1. No Dashboard do Vercel, clique em **"Add New..."** > **"Project"**
2. Selecione o repositório: `apex-engenharia-predial`
3. Clique em **"Import"**

### **1.3. Configurar Projeto**

**Configurações importantes:**

- **Framework Preset:** Deixe como está (ou selecione "Other")
- **Root Directory:** Deixe vazio (ou `./` se necessário)
- **Build Command:** Deixe vazio (site estático)
- **Output Directory:** Deixe vazio
- **Install Command:** Deixe vazio

4. Clique em **"Deploy"**

### **1.4. Aguardar Deploy**

- Aguarde 1-3 minutos
- Você verá uma URL temporária como: `https://apex-engenharia-predial-xyz.vercel.app`
- ✅ **Site está no ar!**

---

## 2. CONFIGURAR DNS PERSONALIZADO

### **2.1. Adicionar Domínio no Vercel**

1. No Dashboard do Vercel, clique no seu projeto
2. Vá em **"Settings"** (Configurações)
3. Clique em **"Domains"** (no menu lateral esquerdo)
4. No campo de texto, digite: **`apexengenharia.com.br`**
5. Clique em **"Add"**

### **2.2. Vercel Mostrará as Configurações DNS**

Você verá algo como:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**IMPORTANTE:** Anote essas informações! Você precisará delas.

### **2.3. Configurar DNS no Registrador de Domínio**

**Onde você comprou o domínio?** (Registro.br, GoDaddy, Hostinger, etc.)

#### **Se for REGISTRO.BR (mais comum no Brasil):**

1. Acesse: **https://registro.br**
2. Faça login na sua conta
3. Clique em **"Meus Domínios"**
4. Clique no domínio: **`apexengenharia.com.br`**
5. Vá em **"DNS"** ou **"Zona DNS"**
6. Clique em **"Alterar"** ou **"Editar"**

**Configurações a adicionar:**

**A) Registro A (Domínio principal):**
- **Tipo:** A
- **Nome/Host:** @ (ou deixe vazio)
- **Valor/IP:** `76.76.21.21` (use o IP que o Vercel forneceu)
- **TTL:** 3600 (ou padrão)

**B) Registro CNAME (www):**
- **Tipo:** CNAME
- **Nome/Host:** www
- **Valor:** `cname.vercel-dns.com` (use o valor que o Vercel forneceu)
- **TTL:** 3600 (ou padrão)

7. Salve as alterações

#### **Se for OUTRO REGISTRADOR (GoDaddy, Hostinger, etc.):**

1. Acesse o painel do registrador
2. Procure por **"DNS"**, **"DNS Management"** ou **"Zona DNS"**
3. Adicione os mesmos registros A e CNAME acima
4. Salve as alterações

### **2.4. Aguardar Propagação DNS**

- ⏱️ **Tempo:** 5 minutos a 48 horas (geralmente 10-30 minutos)
- O Vercel mostrará status:
  - 🟡 **Pending** = Aguardando propagação
  - 🟢 **Valid** = Configurado corretamente!

### **2.5. Verificar se Funcionou**

1. Após alguns minutos, acesse: **https://apexengenharia.com.br**
2. Se funcionar, ✅ **DNS configurado!**
3. Se não funcionar, aguarde mais um pouco (propagação pode demorar)

---

## 3. CONFIGURAR GOOGLE SEARCH CONSOLE

### **3.1. Criar Conta no Google Search Console**

1. Acesse: **https://search.google.com/search-console**
2. Faça login com sua conta Google
3. Clique em **"Adicionar propriedade"** (ou "Add Property")

### **3.2. Adicionar Propriedade**

**Escolha o tipo:**
- Selecione **"Prefixo do domínio"** (recomendado)
- Digite: **`apexengenharia.com.br`**
- Clique em **"Continuar"**

### **3.3. Verificar Propriedade - Método DNS (Recomendado)**

1. O Google mostrará opções de verificação
2. Escolha **"Método DNS"**
3. Você verá uma instrução como:
   ```
   Adicione um registro TXT no seu DNS:
   Tipo: TXT
   Nome: @
   Valor: google-site-verification=XXXXXXXXXXXXXX
   ```

4. **Copie o valor** (a parte depois de `google-site-verification=`)

### **3.4. Adicionar Registro TXT no DNS**

1. Volte ao seu registrador de domínio (Registro.br, etc.)
2. Vá em **"DNS"** ou **"Zona DNS"**
3. Adicione um novo registro:

   **Registro TXT:**
   - **Tipo:** TXT
   - **Nome/Host:** @ (ou deixe vazio)
   - **Valor:** `google-site-verification=XXXXXXXXXXXXXX` (cole o valor completo que o Google forneceu)
   - **TTL:** 3600

4. Salve as alterações

### **3.5. Verificar no Google Search Console**

1. Volte ao Google Search Console
2. Clique em **"Verificar"**
3. Aguarde alguns minutos (pode demorar até 48h, mas geralmente funciona em 10-30 min)
4. ✅ **Verificação concluída!**

### **3.6. Adicionar Meta Tag (Método Alternativo)**

Se o método DNS não funcionar rapidamente, você pode usar a meta tag:

1. No Google Search Console, escolha **"Método de tag HTML"**
2. Copie o código fornecido, exemplo:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXX" />
   ```
3. Adicione no `<head>` do `index.html` (já está preparado para isso!)

---

## 4. CONFIGURAR GOOGLE ANALYTICS

### **4.1. Criar Conta no Google Analytics**

1. Acesse: **https://analytics.google.com**
2. Faça login com sua conta Google
3. Clique em **"Começar a medir"** ou **"Start measuring"**

### **4.2. Criar Conta (Account)**

1. **Nome da conta:** `APEX Engenharia Predial`
2. Clique em **"Avançar"** (Next)

### **4.3. Criar Propriedade (Property)**

1. **Nome da propriedade:** `Site APEX Engenharia`
2. **Fuso horário:** `(GMT-03:00) Brasília`
3. **Moeda:** `Real brasileiro (R$)`
4. Clique em **"Avançar"**

### **4.4. Informações do Negócio**

1. **Setor:** `Construção e Engenharia`
2. **Tamanho:** Escolha conforme seu negócio
3. **Como pretende usar o Google Analytics:** Marque as opções desejadas
4. Clique em **"Criar"**

### **4.5. Aceitar Termos**

1. Leia e aceite os Termos de Serviço
2. Clique em **"Aceitar"**

### **4.6. Obter ID de Medição (Measurement ID)**

1. Você será direcionado para a tela inicial
2. No canto superior direito, procure por **"Admin"** (ícone de engrenagem)
3. Vá em **"Propriedade"** > **"Configurações de fluxo de dados"**
4. Clique em **"Adicionar fluxo"** > **"Web"**
5. Preencha:
   - **URL do site:** `https://apexengenharia.com.br`
   - **Nome do fluxo:** `Site APEX`
6. Clique em **"Criar fluxo"**
7. Você verá seu **ID de Medição** no formato: **`G-XXXXXXXXXX`**
8. **COPIE ESSE ID!** Você precisará dele.

### **4.7. Adicionar Google Analytics ao Site**

1. Abra o arquivo `index.html` no editor
2. Procure por esta seção (linha ~48):
   ```html
   <!-- Google Analytics -->
   <!-- INSTRUÇÕES: Após criar conta no Google Analytics, descomente e substitua G-XXXXXXXXXX pelo seu ID de Medição -->
   ```
3. **Substitua `G-XXXXXXXXXX` pelo seu ID real** (exemplo: `G-ABC123XYZ`)
4. **Descomente o código** (remova os `<!--` e `-->`)

**Código final deve ficar assim:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ');
</script>
```

5. Salve o arquivo

### **4.8. Fazer Commit e Push**

1. Abra o GitHub Desktop
2. Você verá `index.html` modificado
3. Escreva mensagem: "Adicionar Google Analytics"
4. Clique em **"Commit to main"**
5. Clique em **"Push origin"**
6. Aguarde o deploy automático (1-2 minutos)
7. ✅ **Google Analytics ativo!**

---

## 5. VERIFICAR SITE FUNCIONANDO

### **5.1. Checklist Final**

- [ ] Site acessível em: `https://apexengenharia.com.br`
- [ ] Site acessível em: `https://www.apexengenharia.com.br`
- [ ] SSL/HTTPS funcionando (cadeado verde no navegador)
- [ ] Todas as páginas carregando corretamente
- [ ] Google Search Console verificado
- [ ] Google Analytics instalado e funcionando

### **5.2. Testar Google Analytics**

1. Acesse seu site: `https://apexengenharia.com.br`
2. Navegue por algumas páginas
3. Aguarde 5-10 minutos
4. Acesse: **https://analytics.google.com**
5. Vá em **"Relatórios"** > **"Tempo real"**
6. Você deve ver sua visita aparecendo! ✅

### **5.3. Testar Google Search Console**

1. Acesse: **https://search.google.com/search-console**
2. Selecione sua propriedade: `apexengenharia.com.br`
3. Vá em **"Sitemap"** (no menu lateral)
4. Adicione o sitemap: `https://apexengenharia.com.br/sitemap.xml`
5. Clique em **"Enviar"**
6. ✅ **Sitemap enviado!**

---

## 🎯 **RESUMO RÁPIDO**

### **Ordem de Implementação:**

```
1. ✅ Deploy no Vercel
2. ✅ Configurar DNS
3. ✅ Verificar domínio funcionando
4. ✅ Google Search Console
5. ✅ Google Analytics
6. ✅ Testar tudo
7. 📸 Depois: Trocar fotos
```

---

## ⚠️ **PROBLEMAS COMUNS E SOLUÇÕES**

### **DNS não funciona:**
- Aguarde mais tempo (até 48h é normal)
- Verifique se os registros estão corretos
- Certifique-se de que salvou as alterações

### **Google Search Console não verifica:**
- Aguarde mais tempo (pode demorar até 48h)
- Use o método de meta tag como alternativa
- Verifique se o registro TXT está correto

### **Google Analytics não aparece:**
- Aguarde 5-10 minutos após adicionar o código
- Verifique se o ID está correto
- Certifique-se de que fez commit e push
- Verifique se o deploy no Vercel foi concluído

---

## 📞 **PRÓXIMOS PASSOS**

Após tudo funcionando:
1. ✅ Aguardar indexação do Google (alguns dias)
2. ✅ Monitorar Google Analytics
3. ✅ Verificar relatórios no Search Console
4. 📸 **Trocar fotos quando quiser!**

---

**Tempo total estimado:** 2-4 horas (com aguardar propagações DNS)

**Dificuldade:** ⭐⭐⭐ Moderada (mas seguindo o passo a passo, é tranquilo!)

---

## 🆘 **PRECISA DE AJUDA?**

Se algo não funcionar, me avise qual etapa você está e qual é o problema!

