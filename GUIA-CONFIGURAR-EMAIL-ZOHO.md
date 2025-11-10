# 📧 GUIA COMPLETO: Configurar Email Profissional no Zoho Mail

## 🎯 **Objetivo:** Criar `contato@apexengenhariapredial.com.br`

---

## PASSO 1: CRIAR CONTA NO ZOHO MAIL

### **1.1. Acessar o Site**
1. Acesse: **https://www.zoho.com/mail/**
2. Clique em **"Sign Up Now"** ou **"Começar Grátis"** (canto superior direito)

### **1.2. Escolher o Plano**
1. Selecione **"Mail for Business"**
2. Escolha o **plano "Free"** (Gratuito - até 5 usuários)
3. Clique em **"Sign Up"** ou **"Assinar"**

### **1.3. Criar Conta**
1. Preencha:
   - **Nome completo:** Seu nome
   - **Email pessoal:** Seu email atual (para confirmação)
   - **Senha:** Crie uma senha forte
   - **Número de telefone:** (opcional, mas recomendado)
2. Clique em **"Sign Up"** ou **"Criar Conta"**
3. Verifique seu email pessoal e confirme o cadastro

---

## PASSO 2: ADICIONAR SEU DOMÍNIO

### **2.1. Acessar o Painel**
1. Após fazer login, você verá o painel do Zoho Mail
2. Procure por **"Add Domain"** ou **"Adicionar Domínio"**
3. Clique nessa opção

### **2.2. Inserir Domínio**
1. Digite: **`apexengenhariapredial.com.br`**
2. Clique em **"Add"** ou **"Adicionar"**
3. O Zoho verificará se o domínio está disponível

### **2.3. Escolher Método de Verificação**
O Zoho oferece 2 métodos:
- **Método DNS (Recomendado):** Adicionar registro TXT no DNS
- **Método de arquivo HTML:** Upload de arquivo (mais complexo)

**Vamos usar o Método DNS!**

---

## PASSO 3: CONFIGURAR DNS NO REGISTRO.BR

### **3.1. Copiar Código de Verificação do Zoho**
1. No Zoho, você verá uma tela com instruções de DNS
2. Procure por **"TXT Record"** ou **"Registro TXT"**
3. Copie o código completo, exemplo:
   ```
   zoho-verification=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### **3.2. Acessar o Registro.br**
1. Acesse: **https://registro.br**
2. Faça login
3. Vá em **"Meus Domínios"**
4. Clique no domínio: **`apexengenhariapredial.com.br`**

### **3.3. Configurar Zona DNS**
1. Clique em **"DNS"** ou **"Zona DNS"**
2. Clique em **"Configurar zona DNS"**
3. Você verá os registros já existentes (A e CNAME do Vercel)

### **3.4. Adicionar Registro TXT de Verificação**
1. Clique em **"NOVA ENTRADA"**
2. Preencha:
   - **Tipo:** TXT
   - **Nome:** Deixe vazio (ou @)
   - **Dados:** Cole o código completo do Zoho (ex: `zoho-verification=xxxxxxxxxx`)
   - **TTL:** 3600 (ou padrão)
3. Clique em **"ADICIONAR"**
4. **Salve as alterações**

### **3.5. Voltar ao Zoho e Verificar**
1. Volte ao Zoho Mail
2. Clique em **"Verify"** ou **"Verificar"**
3. Aguarde alguns minutos (pode levar até 24h, mas geralmente é rápido)
4. ✅ **Domínio verificado!**

---

## PASSO 4: CONFIGURAR REGISTROS MX (PARA RECEBER EMAILS)

### **4.1. Ver Instruções MX no Zoho**
1. Após verificar o domínio, o Zoho mostrará os registros MX necessários
2. Você verá algo como:
   ```
   mx.zoho.com (prioridade 10)
   mx2.zoho.com (prioridade 20)
   ```

### **4.2. Adicionar Registros MX no Registro.br**
1. No Registro.br, ainda na zona DNS
2. Clique em **"NOVA ENTRADA"**
3. Adicione o primeiro registro MX:
   - **Tipo:** MX
   - **Nome:** Deixe vazio (ou @)
   - **Dados:** `mx.zoho.com`
   - **Prioridade:** 10
   - **TTL:** 3600
4. Clique em **"ADICIONAR"**

5. Adicione o segundo registro MX:
   - **Tipo:** MX
   - **Nome:** Deixe vazio (ou @)
   - **Dados:** `mx2.zoho.com`
   - **Prioridade:** 20
   - **TTL:** 3600
6. Clique em **"ADICIONAR"**

7. **Salve todas as alterações**

### **4.3. Aguardar Propagação DNS**
- ⏱️ Pode levar 10-30 minutos (às vezes até 24h)
- O Zoho verificará automaticamente quando os registros estiverem ativos

---

## PASSO 5: CRIAR CONTAS DE EMAIL

### **5.1. Acessar o Painel de Usuários**
1. No Zoho Mail, vá em **"Users"** ou **"Usuários"**
2. Clique em **"Add User"** ou **"Adicionar Usuário"**

### **5.2. Criar Email Principal**
1. Preencha:
   - **Nome de usuário:** `contato` (sem o @apexengenhariapredial.com.br)
   - **Nome completo:** APEX Engenharia Predial
   - **Senha:** Crie uma senha forte
   - **Email:** `contato@apexengenhariapredial.com.br` (será preenchido automaticamente)
2. Clique em **"Add"** ou **"Adicionar"**

### **5.3. Criar Email Secundário (Opcional)**
Se quiser, crie também:
- **Nome de usuário:** `orcamento`
- **Email:** `orcamento@apexengenhariapredial.com.br`

---

## PASSO 6: TESTAR O EMAIL

### **6.1. Fazer Login no Zoho Mail**
1. Acesse: **https://mail.zoho.com**
2. Faça login com: `contato@apexengenhariapredial.com.br`
3. Use a senha que você criou

### **6.2. Enviar Email de Teste**
1. Envie um email de teste para seu email pessoal
2. Verifique se chegou corretamente

### **6.3. Receber Email de Teste**
1. Envie um email do seu email pessoal para: `contato@apexengenhariapredial.com.br`
2. Verifique se chegou na caixa do Zoho Mail

---

## PASSO 7: ATUALIZAR O SITE

### **7.1. Atualizar Email no Site**
1. Abra o arquivo `index.html`
2. Localize a seção de contato (linha ~456)
3. Procure por: `contato@apexengenharia.com.br`
4. Substitua por: `contato@apexengenhariapredial.com.br`

### **7.2. Fazer Commit e Push**
```bash
git add index.html
git commit -m "Atualizar email de contato para email profissional"
git push origin main
```

---

## ✅ **CHECKLIST FINAL**

- [ ] Conta criada no Zoho Mail
- [ ] Domínio adicionado e verificado
- [ ] Registro TXT adicionado no Registro.br
- [ ] Registros MX adicionados no Registro.br
- [ ] Email `contato@apexengenhariapredial.com.br` criado
- [ ] Email testado (enviar e receber)
- [ ] Site atualizado com novo email
- [ ] Commit e push realizado

---

## 🆘 **PROBLEMAS COMUNS**

### **Domínio não verifica:**
- Aguarde mais tempo (pode levar até 24h)
- Verifique se o registro TXT está correto
- Certifique-se de que salvou as alterações no Registro.br

### **Emails não chegam:**
- Verifique se os registros MX estão corretos
- Aguarde propagação DNS (pode levar até 24h)
- Verifique se não há firewall bloqueando

### **Não consigo fazer login:**
- Verifique se está usando o email completo: `contato@apexengenhariapredial.com.br`
- Verifique a senha
- Tente recuperar a senha se necessário

---

## 📞 **PRECISA DE AJUDA?**

Se em qualquer passo você tiver dúvidas ou problemas, me envie um print e eu te ajudo! 🚀

---

**Última atualização:** 05 de Novembro de 2025

