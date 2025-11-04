# ⏰ LEMBRETE: Configurar DNS no Registro.br

## 📅 **Quando voltar (após ~2 horas):**

### **1. Acessar o Registro.br**
- Acesse: https://registro.br
- Faça login
- Vá em "Meus Domínios"
- Clique no domínio: `apexengenhariapredial.com.br`

### **2. Configurar DNS**
- Clique em "DNS" ou "Zona DNS"
- Clique em "Configurar zona DNS"

### **3. Adicionar Registros DNS do Vercel**

**⚠️ IMPORTANTE:** A Vercel recomenda usar os **novos registros** como parte da expansão planejada do intervalo de IPs. Os registros antigos (`cname.vercel-dns.com` e `76.76.21.21`) continuam funcionando, mas os novos são recomendados.

#### **Registro A (domínio principal - RECOMENDADO):**
- **Tipo:** A
- **Nome/Host:** @ (ou deixe vazio)
- **Valor/IP:** `216.198.79.1` ⭐ **NOVO IP RECOMENDADO**
- **TTL:** 3600 (ou padrão)

#### **Registro CNAME (www):**
- **Tipo:** CNAME
- **Nome/Host:** www
- **Valor:** `cname.vercel-dns.com`
- **TTL:** 3600 (ou padrão)

**📝 Nota:** No print da Vercel, o `www.apexengenhariapredial.com.br` está mostrando "Configuração Inválida" (vermelho). Após configurar o DNS no Registro.br, esse status deve mudar para "Configuração Válida".

### **4. Salvar Alterações**
- Clique em "Salvar" ou "Salvar Alterações"
- Aguarde propagação DNS (10-30 minutos, pode levar até algumas horas)

### **5. Verificar no Vercel**
- Volte ao Vercel
- Vá em Settings > Domains
- Verifique se o status mudou de "Configuração Inválida" para "Configuração Válida"
- O domínio `apexengenhariapredial.com.br` deve mostrar checkmark verde
- O domínio `www.apexengenhariapredial.com.br` deve mudar de "Configuração Inválida" para válido

---

## 📸 **Informações do Print da Vercel (Atualizado)**

### **Domínio Principal: `apexengenhariapredial.com.br`**
- ✅ Status: Recomendação de Alteração de DNS
- **Registro A:**
  - Tipo: A (mostrado como "UM" na interface, mas é tipo A)
  - Nome: @
  - Valor: `216.198.79.1` ⭐ **NOVO IP RECOMENDADO**

### **Domínio www: `www.apexengenhariapredial.com.br`**
- ⚠️ Status: **Configuração Inválida** (vermelho)
- Após configurar DNS no Registro.br, este status deve mudar para válido

### **Informação Importante da Vercel:**
> "Como parte de uma expansão planejada do intervalo de IPs, você poderá notar novos registros acima. Os registros antigos de `cname.vercel-dns.com` e `76.76.21.21` continuarão funcionando, mas recomendamos que você utilize os novos."

> "Pode levar algum tempo para que os registros DNS entrem em vigor."

## 🔍 **Verificar CNAME do www no Vercel**

Antes de configurar, verifique no Vercel qual é o valor exato do CNAME para www:

1. No Vercel, vá em Settings > Domains
2. Clique no domínio `www.apexengenhariapredial.com.br`
3. Veja a seção "Registros DNS" ou "DNS Vercel"
4. Anote o valor do CNAME (provavelmente `cname.vercel-dns.com`)

---

## ✅ **Após Configurar DNS:**

1. ✅ Site acessível em: `https://apexengenhariapredial.com.br`
2. ✅ Site acessível em: `https://www.apexengenhariapredial.com.br`
3. ✅ SSL/HTTPS funcionando (cadeado verde)
4. ✅ Status no Vercel: "Configuração Válida"

---

## 📋 **Checklist:**

- [ ] Aguardar ~2 horas após registro do domínio
- [ ] Acessar Registro.br
- [ ] Configurar zona DNS
- [ ] Adicionar registro A: `@` → `216.198.79.1` ⭐ **NOVO IP RECOMENDADO**
- [ ] Adicionar registro CNAME: `www` → `cname.vercel-dns.com`
- [ ] Salvar alterações
- [ ] Aguardar propagação DNS (10-30 minutos, pode levar horas)
- [ ] Verificar no Vercel:
  - [ ] `apexengenhariapredial.com.br` mostra checkmark verde ✅
  - [ ] `www.apexengenhariapredial.com.br` mudou de "Configuração Inválida" para válido ✅
- [ ] Testar site acessível:
  - [ ] `https://apexengenhariapredial.com.br`
  - [ ] `https://www.apexengenhariapredial.com.br`
  - [ ] SSL/HTTPS funcionando (cadeado verde 🔒)

---

## 🆘 **Se precisar de ajuda:**

Me chame quando for configurar! Vou te guiar passo a passo com prints. 🚀

