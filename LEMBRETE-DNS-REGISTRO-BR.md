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

#### **Registro A (domínio principal):**
- **Tipo:** A
- **Nome/Host:** @ (ou deixe vazio)
- **Valor/IP:** `216.198.79.1`
- **TTL:** 3600 (ou padrão)

#### **Registro CNAME (www):**
- **Tipo:** CNAME
- **Nome/Host:** www
- **Valor:** `cname.vercel-dns.com`
- **TTL:** 3600 (ou padrão)

### **4. Salvar Alterações**
- Clique em "Salvar" ou "Salvar Alterações"
- Aguarde propagação DNS (10-30 minutos)

### **5. Verificar no Vercel**
- Volte ao Vercel
- Vá em Settings > Domains
- Verifique se o status mudou de "Configuração Inválida" para "Configuração Válida"

---

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
- [ ] Adicionar registro A: `@` → `216.198.79.1`
- [ ] Adicionar registro CNAME: `www` → `cname.vercel-dns.com`
- [ ] Salvar alterações
- [ ] Verificar no Vercel (status mudou para válido)
- [ ] Testar site acessível

---

## 🆘 **Se precisar de ajuda:**

Me chame quando for configurar! Vou te guiar passo a passo com prints. 🚀

