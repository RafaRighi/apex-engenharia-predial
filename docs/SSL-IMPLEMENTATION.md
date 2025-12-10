# 🔒 Guia de Implementação de Certificado SSL

Este documento contém instruções completas para implementar e configurar um certificado SSL/HTTPS no site da APEX Engenharia Predial.

## 📋 O que foi implementado

O site já está preparado para usar HTTPS com as seguintes configurações:

### 1. Arquivo `.htaccess` Atualizado

✅ **Redirecionamento forçado de HTTP para HTTPS** (linhas 36-41)
- Todos os acessos via HTTP serão automaticamente redirecionados para HTTPS

✅ **Headers de Segurança Avançados** (linhas 90-111):
- **X-Frame-Options**: Previne clickjacking
- **X-Content-Type-Options**: Previne MIME type sniffing
- **X-XSS-Protection**: Proteção contra XSS
- **Content Security Policy (CSP)**: Controla quais recursos podem ser carregados
- **Referrer-Policy**: Controla informações de referência
- **Permissions-Policy**: Desativa recursos não necessários (geolocalização, microfone, câmera)
- **Strict-Transport-Security (HSTS)**: Força uso de HTTPS por 1 ano

### 2. Meta Tags de Segurança no HTML

✅ Adicionadas ao `index.html` (linhas 11-16):
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### 3. Manifest.json para PWA

✅ Criado arquivo `manifest.json` para Progressive Web App
- Configuração de tema
- Ícones do site
- Metadados da aplicação

---

## 🚀 Como Obter um Certificado SSL

### Opção 1: Let's Encrypt (GRATUITO - Recomendado)

**Vantagens:**
- ✅ 100% Gratuito
- ✅ Renovação automática
- ✅ Válido por 90 dias (renova automaticamente)
- ✅ Confiável e amplamente usado

**Como instalar:**

#### Para hospedagens com cPanel:
1. Acesse seu painel cPanel
2. Procure por "SSL/TLS Status" ou "Let's Encrypt"
3. Clique em "Run AutoSSL" ou "Manage SSL Sites"
4. Selecione seu domínio
5. Clique em "Install Certificate"

#### Para hospedagens sem cPanel:
```bash
# Instale o Certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-apache

# Instale o certificado
sudo certbot --apache -d www.apexengenharia.com.br -d apexengenharia.com.br

# Configure renovação automática
sudo certbot renew --dry-run
```

### Opção 2: Cloudflare (GRATUITO - Alternativa)

**Vantagens:**
- ✅ SSL Gratuito + CDN Grátis
- ✅ Melhora performance global
- ✅ Proteção DDoS incluída
- ✅ Fácil de configurar

**Passos:**
1. Crie conta em [cloudflare.com](https://www.cloudflare.com)
2. Adicione seu domínio
3. Altere os DNS do domínio para os fornecidos pela Cloudflare
4. Ative o SSL/TLS no modo "Flexible" ou "Full"
5. Configure o proxy para laranja (ativado)

### Opção 3: Certificado Pago (Comodo, DigiCert, etc)

**Quando usar:**
- Necessidades específicas de compliance
- Certificados EV (Extended Validation)
- Suporte técnico dedicado

**Hospedagens que oferecem:**
- Hostinger: A partir de R$ 99/ano
- Locaweb: Incluído em alguns planos
- HostGator: Variados
- Registro.br: GRATUITO para .br

---

## ⚙️ Configuração na Hospedagem

### Passo 1: Verificar se o Certificado está Instalado

1. Acesse `https://www.apexengenharia.com.br`
2. Procure pelo cadeado 🔒 na barra de endereço
3. Clique no cadeado → "Conexão é segura"

### Passo 2: Ativar Redirecionamento HTTPS

O arquivo `.htaccess` já está configurado. Basta fazer upload do arquivo atualizado:

```bash
# Fazer upload via FTP/SFTP
# Certifique-se de que o .htaccess está na pasta raiz (public_html ou www)
```

### Passo 3: Testar a Configuração

Use estas ferramentas online para testar:

1. **SSL Labs**: https://www.ssllabs.com/ssltest/
   - Digite: `www.apexengenharia.com.br`
   - Verifique a nota (deve ser A ou A+)

2. **Mozilla Observatory**: https://observatory.mozilla.org/
   - Verifica headers de segurança
   - Verifica configurações CSP

3. **Security Headers**: https://securityheaders.com/
   - Verifica todos os headers de segurança

---

## 🔧 Troubleshooting

### Problema: Site não redireciona para HTTPS

**Solução:**
```apache
# No .htaccess, verifique se está assim:
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### Problema: Mixed Content (HTTP em página HTTPS)

**Solução:**
Atualize todos os links internos para usar `https://` ou `/` (caminho relativo):

❌ Errado:
```html
<link href="http://www.apexengenharia.com.br/css/main.css">
```

✅ Correto:
```html
<link href="https://www.apexengenharia.com.br/css/main.css">
<link href="/css/main.css">  <!-- ou caminho relativo -->
```

### Problema: Certificado Expirado

**Para Let's Encrypt:**
```bash
# Renovar manualmente
sudo certbot renew

# Verificar status
sudo certbot certificates
```

**Para Cloudflare:**
- Renovação automática
- Verifique no painel Cloudflare

### Problema: Erro de CSP (Content Security Policy)

Se algum recurso externo não carregar, ajuste o CSP no `.htaccess`:

```apache
# Adicione o domínio necessário em 'script-src' ou 'style-src'
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://novo-dominio.com; ..."
```

---

## ✅ Checklist de Implementação

- [ ] Certificado SSL instalado na hospedagem
- [ ] Arquivo `.htaccess` atualizado no servidor
- [ ] Site acessível via HTTPS
- [ ] Redirecionamento HTTP→HTTPS funcionando
- [ ] Cadeado verde visível no navegador
- [ ] Teste no SSL Labs (Nota A ou A+)
- [ ] Teste no Mozilla Observatory
- [ ] Google Search Console atualizado com versão HTTPS
- [ ] Todas as URLs internas usando HTTPS ou caminhos relativos
- [ ] Sitemap.xml atualizado (já está com HTTPS)
- [ ] Manifest.json acessível via HTTPS

---

## 📊 Benefícios do Certificado SSL

### SEO
- ✅ Ranking melhor no Google
- ✅ Prioridade em resultados de busca
- ✅ Indicador de "Conexão Segura" no navegador

### Segurança
- ✅ Dados criptografados em trânsito
- ✅ Proteção contra man-in-the-middle
- ✅ Confiança dos usuários

### Performance
- ✅ HTTP/2 disponível (faster)
- ✅ Melhor Core Web Vitals
- ✅ Compressão de dados

---

## 📞 Suporte

Se precisar de ajuda adicional:

1. Consulte este guia completo
2. Verifique a documentação da sua hospedagem
3. Entre em contato com o suporte técnico da hospedagem
4. Consulte: https://letsencrypt.org/docs/

---

**Última atualização:** Novembro 2025
**Status:** Configuração completa - Aguardando instalação do certificado

