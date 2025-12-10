# 📧 CONFIGURAR EMAIL NO VERCEL - PASSO A PASSO

## ⚠️ PROBLEMA ATUAL
Os formulários de contato e newsletter não estão funcionando porque as **variáveis de ambiente do Zoho Mail não estão configuradas no Vercel**.

---

## ✅ SOLUÇÃO: Configurar Variáveis de Ambiente

### **PASSO 1: Acessar o Vercel**

1. Abra seu navegador
2. Acesse: **https://vercel.com**
3. Faça login na sua conta
4. Selecione o projeto: **apex-engenharia-predial**

---

### **PASSO 2: Ir para Configurações**

1. No menu do projeto, clique em **"Settings"** (Configurações)
2. No menu lateral esquerdo, clique em **"Environment Variables"** (Variáveis de Ambiente)

---

### **PASSO 3: Adicionar Variável 1 - ZOHO_MAIL_USER**

1. Clique no botão **"Add New"** ou **"Adicionar Nova"**
2. Preencha:
   - **Key (Chave):** `ZOHO_MAIL_USER`
   - **Value (Valor):** `contato@apexengenhariapredial.com.br`
   - **Environment:** Marque TODAS as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Clique em **"Save"** ou **"Salvar"**

---

### **PASSO 4: Adicionar Variável 2 - ZOHO_MAIL_PASS**

1. Clique novamente em **"Add New"** ou **"Adicionar Nova"**
2. Preencha:
   - **Key (Chave):** `ZOHO_MAIL_PASS`
   - **Value (Valor):** **[A SENHA DO EMAIL DO ZOHO]**
     - ⚠️ **IMPORTANTE:** Use a senha que você criou para o email `contato@apexengenhariapredial.com.br` no Zoho Mail
     - ⚠️ **Se usar autenticação de dois fatores:** Você precisa criar uma "App Password" (Senha de Aplicativo) no Zoho
   - **Environment:** Marque TODAS as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Clique em **"Save"** ou **"Salvar"**

---

### **PASSO 5: Adicionar Variável 3 - ZOHO_MAIL_TO (Opcional)**

1. Clique novamente em **"Add New"** ou **"Adicionar Nova"**
2. Preencha:
   - **Key (Chave):** `ZOHO_MAIL_TO`
   - **Value (Valor):** `contato@apexengenhariapredial.com.br`
     - ⚠️ **Nota:** Se não configurar, usará o valor de `ZOHO_MAIL_USER`
     - ⚠️ **Múltiplos emails:** Você pode separar por vírgula: `email1@exemplo.com,email2@exemplo.com`
   - **Environment:** Marque TODAS as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Clique em **"Save"** ou **"Salvar"**

---

### **PASSO 6: Fazer Redeploy**

**IMPORTANTE:** Após adicionar as variáveis, você DEVE fazer um redeploy para que elas sejam aplicadas!

#### **Opção A: Redeploy Manual**
1. Vá em **"Deployments"** (Implantações)
2. Clique nos **3 pontos** (...) do último deploy
3. Selecione **"Redeploy"**
4. Confirme o redeploy

#### **Opção B: Novo Commit (Recomendado)**
1. Faça um pequeno ajuste em qualquer arquivo (ou crie um commit vazio)
2. Faça commit e push para o GitHub
3. O Vercel fará deploy automaticamente

---

## 🔐 Como Obter a Senha do Zoho

### **Se você já tem o email configurado:**

1. Acesse: **https://mail.zoho.com**
2. Faça login com: `contato@apexengenhariapredial.com.br`
3. A senha é a que você criou ao criar o email

### **Se você usa autenticação de dois fatores (2FA):**

Você precisa criar uma **"App Password"** (Senha de Aplicativo):

1. Acesse: **https://accounts.zoho.com**
2. Faça login
3. Vá em **"Security"** (Segurança)
4. Procure por **"App Passwords"** ou **"Senhas de Aplicativo"**
5. Clique em **"Generate New Password"** ou **"Gerar Nova Senha"**
6. Dê um nome: `Vercel API`
7. Copie a senha gerada (ela só aparece uma vez!)
8. Use essa senha no campo `ZOHO_MAIL_PASS` do Vercel

### **Se você ainda não tem o email configurado:**

Siga o guia: **`GUIA-CONFIGURAR-EMAIL-ZOHO.md`**

---

## 🧪 Testar Após Configuração

### **Teste 1: Formulário de Contato**
1. Acesse: `https://www.apexengenhariapredial.com.br/#contato`
2. Preencha o formulário:
   - Nome: Teste
   - Email: seu-email@exemplo.com
   - Telefone: (51) 99999-9999
   - Mensagem: Teste de envio
3. Clique em **"Enviar Mensagem"**
4. **Resultado esperado:** "Mensagem enviada com sucesso! Em breve entraremos em contato."

### **Teste 2: Newsletter**
1. Acesse: `https://www.apexengenhariapredial.com.br/blog.html`
2. Preencha o email na seção Newsletter
3. Clique em **"Inscrever"**
4. **Resultado esperado:** "Inscrição realizada com sucesso! Verifique sua caixa de entrada para confirmar."

### **Teste 3: Verificar Email**
1. Acesse: **https://mail.zoho.com**
2. Faça login com `contato@apexengenhariapredial.com.br`
3. Verifique se os emails estão chegando na caixa de entrada

---

## 🐛 Problemas Comuns e Soluções

### **❌ Erro: "Configuração de e-mail ausente"**

**Causa:** Variáveis de ambiente não configuradas ou não aplicadas

**Solução:**
1. ✅ Verifique se as variáveis `ZOHO_MAIL_USER` e `ZOHO_MAIL_PASS` estão configuradas
2. ✅ Verifique se fez redeploy após adicionar as variáveis
3. ✅ Verifique se não há espaços extras nos valores das variáveis
4. ✅ Verifique se selecionou todas as environments (Production, Preview, Development)

---

### **❌ Erro: "Invalid login" ou "Authentication failed"**

**Causa:** Senha ou email incorretos

**Solução:**
1. ✅ Verifique se a senha está correta
2. ✅ Verifique se o email está correto
3. ✅ Tente fazer login manualmente no Zoho Mail para confirmar as credenciais
4. ✅ Se usar 2FA, certifique-se de usar uma "App Password" e não a senha normal
5. ✅ Se necessário, redefina a senha no Zoho Mail

---

### **❌ Erro: "Connection timeout"**

**Causa:** Problema de conexão ou firewall

**Solução:**
1. ✅ Verifique se o domínio está configurado corretamente no Zoho
2. ✅ Verifique os logs do Vercel para mais detalhes
3. ✅ Aguarde alguns minutos e tente novamente

---

### **❌ Emails não chegam**

**Causa:** Problema no envio ou na recepção

**Solução:**
1. ✅ Verifique a caixa de spam
2. ✅ Verifique se os registros MX estão configurados corretamente no DNS
3. ✅ Verifique os logs do Vercel para ver se o email foi enviado
4. ✅ Teste enviando um email manualmente para `contato@apexengenhariapredial.com.br`

---

## 📋 Checklist de Configuração

- [ ] Variável `ZOHO_MAIL_USER` configurada no Vercel
- [ ] Variável `ZOHO_MAIL_PASS` configurada no Vercel
- [ ] Variável `ZOHO_MAIL_TO` configurada (opcional)
- [ ] Todas as variáveis marcadas para Production, Preview e Development
- [ ] Redeploy realizado no Vercel
- [ ] Formulário de contato testado
- [ ] Newsletter testada
- [ ] Emails verificados na caixa do Zoho

---

## 📞 Precisa de Ajuda?

Se após seguir todos os passos o problema persistir:

1. **Verifique os logs do Vercel:**
   - Vá em **Deployments**
   - Clique no último deploy
   - Vá em **Functions**
   - Clique em `/api/send-email`
   - Verifique os logs para ver erros específicos

2. **Teste as credenciais:**
   - Acesse https://mail.zoho.com
   - Tente fazer login com as mesmas credenciais
   - Se não conseguir, as credenciais estão incorretas

3. **Verifique o email do Zoho:**
   - Certifique-se de que o email `contato@apexengenhariapredial.com.br` existe
   - Certifique-se de que a senha está correta
   - Certifique-se de que o domínio está verificado no Zoho

---

**Última atualização:** 12 de Dezembro de 2025

