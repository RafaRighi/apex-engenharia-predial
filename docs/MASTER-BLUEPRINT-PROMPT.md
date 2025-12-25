# 🎯 Master Blueprint Prompt - Template de Site Institucional Profissional

## 📋 CONTEXTO

Crie um site institucional completo e profissional para **[NOME DA EMPRESA]**, empresa especializada em **[SETOR DE ATUAÇÃO]**. O site deve ser moderno, responsivo, otimizado para performance e SEO, seguindo as melhores práticas de desenvolvimento web.

---

## 🛠️ STACK TÉCNICA

### Tecnologias Core
- **HTML5** puro e semântico
- **CSS3** com variáveis CSS (custom properties)
- **JavaScript Vanilla** (sem frameworks)
- **Vercel** para deploy (configuração via `vercel.json`)
- **Nodemailer** para envio de emails via API serverless

### Estrutura de Pastas
```
/
├── index.html              # Página principal
├── css/
│   ├── main.css           # Estilos principais
│   └── blog.css           # Estilos do blog (opcional)
├── js/
│   ├── script.js          # Funcionalidades principais
│   ├── utils.js           # Funções utilitárias reutilizáveis
│   └── whatsapp-loader.js # Carregamento otimizado do WhatsApp
├── api/
│   ├── send-email.js      # API serverless para formulário de contato
│   ├── newsletter.js      # API serverless para newsletter
│   └── utils.js           # Utilitários das APIs (transporter, validação)
├── img/                   # Imagens otimizadas (WebP com fallback JPG/PNG)
├── blog/                  # Páginas do blog (opcional)
│   └── posts/
├── manifest.json          # PWA manifest
├── robots.txt             # SEO
├── sitemap.xml            # SEO
├── vercel.json            # Configuração Vercel
└── package.json           # Dependências (nodemailer)
```

---

## 🎨 IDENTIDADE VISUAL

### Paleta de Cores
```css
:root {
  --primary-color: #00a8e8;      /* Azul principal - CTAs, links, destaques */
  --secondary-color: #003459;     /* Azul escuro - títulos, footer */
  --accent-color: #007ea7;        /* Azul médio - hover states */
  --text-dark: #1a1a1a;           /* Texto principal */
  --text-light: #555;              /* Texto secundário */
  --bg-light: #f8f9fa;            /* Fundo claro de seções alternadas */
  --white: #ffffff;                /* Branco */
  
  /* Gradientes */
  --gradient-primary: linear-gradient(135deg, #00a8e8 0%, #007ea7 100%);
  --gradient-overlay: linear-gradient(135deg, rgba(0, 52, 89, 0.45) 0%, rgba(0, 126, 167, 0.45) 100%);
  
  /* Sombras */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
  
  /* Transições */
  --transition: all 0.3s ease;
}
```

### Tipografia
- **Fonte Principal**: Poppins (Google Fonts)
  - Pesos: 400 (regular), 600 (semi-bold), 700 (bold)
  - Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- **Tamanhos**:
  - Hero Title: `clamp(1.8rem, 4vw, 4rem)` (responsivo)
  - Hero Subtitle: `clamp(1rem, 2vw, 1.5rem)`
  - Section Titles: `2.5rem` (desktop), `2rem` (mobile)
  - Body: `1.1rem` (desktop), `1rem` (mobile)
  - Line-height: `1.6` (body), `1.2` (títulos)

### Espaçamentos
- **Container**: `max-width: 1200px`, `padding: 0 20px`
- **Seções**: `padding: 100px 0` (desktop), `80px 0` (mobile)
- **Gaps em Grids**: `30px` (padrão), `20px` (mobile)
- **Botões**: `padding: 15px 35px`, `border-radius: 50px`

### Refinamentos de UI
- **Border Radius**: `15px` (cards), `50px` (botões), `8px` (inputs)
- **Hover Effects**: `transform: translateY(-3px a -10px)` + `box-shadow` aumentada
- **Transições**: `all 0.3s ease` em todos os elementos interativos
- **Overlay Hero**: Gradiente semi-transparente sobre imagem de fundo

---

## 🧩 ESTRUTURA DE COMPONENTES

### 1. Header/Navbar (Fixado no Topo)
```html
<header id="header">
  <nav class="navbar">
    <div class="container">
      <a href="#inicio" class="logo-link">
        <img src="img/logo-[NOME].png" alt="Logo [NOME]" class="logo">
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="#inicio" class="nav-link">Início</a></li>
        <li><a href="#sobre" class="nav-link">Sobre</a></li>
        <li><a href="#servicos" class="nav-link">Serviços</a></li>
        <li><a href="#contato" class="nav-link">Contato</a></li>
      </ul>
    </div>
  </nav>
</header>
```

**Funcionalidades**:
- Fixo no topo (`position: fixed`, `z-index: 1000`)
- Esconde ao rolar para baixo, mostra ao rolar para cima (JavaScript)
- Menu mobile: hamburger animado, menu full-screen com overlay
- Links com underline animado no hover
- Scroll suave para âncoras

### 2. Hero Section (Full Viewport)
```html
<section id="inicio" class="hero">
  <picture>
    <source srcset="img/hero-[NOME].webp" type="image/webp">
    <img src="img/hero-[NOME].jpg" alt="[NOME] - [SETOR]" 
         fetchpriority="high" loading="eager" width="1920" height="1080">
  </picture>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Título Principal com <strong>Destaque</strong></h1>
    <p class="hero-subtitle">Subtítulo descritivo</p>
    <p class="hero-text">Texto introdutório detalhado...</p>
    <div class="hero-buttons">
      <a href="#servicos" class="btn btn-primary">CTA Principal</a>
      <a href="#contato" class="btn btn-secondary">CTA Secundário</a>
    </div>
  </div>
</section>
```

**Características**:
- `min-height: 100vh`
- Imagem de fundo responsiva (WebP com fallback)
- Overlay gradiente semi-transparente
- Texto com `text-shadow` para legibilidade
- Botões com hover effects

### 3. Seção Sobre
```html
<section id="sobre" class="sobre">
  <div class="container">
    <h2 class="section-title">Sobre a <strong>[NOME]</strong></h2>
    <div class="sobre-content">
      <div class="sobre-text">
        <p>Texto sobre a empresa...</p>
      </div>
      <div class="sobre-stats">
        <div class="stat-item">
          <h3>+10 Anos</h3>
          <p>de experiência</p>
        </div>
        <div class="stat-item">
          <h3>100%</h3>
          <p>satisfação</p>
        </div>
      </div>
    </div>
    <div class="diferenciais">
      <h2 class="diferenciais-title">Por que escolher a [NOME]?</h2>
      <div class="diferenciais-grid">
        <div class="diferencial-item">
          <div class="diferencial-icon">✓</div>
          <h4>Título do Diferencial</h4>
          <p>Descrição breve</p>
        </div>
        <!-- Repetir para cada diferencial -->
      </div>
    </div>
  </div>
</section>
```

**Layout**:
- Grid 2 colunas (texto + stats) no desktop, 1 coluna no mobile
- Cards de diferenciais em grid responsivo (`repeat(auto-fit, minmax(250px, 1fr))`)
- Stats com gradiente e hover effect

### 4. Grid de Serviços
```html
<section id="servicos" class="servicos">
  <div class="container">
    <h2 class="section-title">Nossos <strong>Serviços</strong></h2>
    <p class="section-description">Descrição dos serviços...</p>
    <div class="servicos-grid">
      <div class="servico-card">
        <div class="servico-icon">🏗️</div>
        <h3>Nome do Serviço</h3>
        <div class="servico-imagem-container">
          <picture>
            <source srcset="img/servico-[nome].webp" type="image/webp">
            <img src="img/servico-[nome].jpg" alt="Serviço" loading="lazy">
          </picture>
        </div>
        <p class="servico-desc">Descrição do serviço...</p>
        <a href="servico-[nome].html" class="btn-link">Saiba Mais →</a>
      </div>
      <!-- Repetir para cada serviço -->
    </div>
  </div>
</section>
```

**Características**:
- Grid responsivo: `repeat(auto-fit, minmax(320px, 1fr))`
- Cards clicáveis (JavaScript redireciona para página do serviço)
- Imagens com `object-fit: cover`, altura fixa `180px`
- Hover: `translateY(-10px)` + sombra aumentada
- Border-top colorida (`4px solid var(--primary-color)`)

### 5. Formulário de Contato
```html
<section id="contato" class="contato">
  <div class="container">
    <div class="contato-content">
      <div class="contato-info">
        <h3>Fale Conosco!</h3>
        <div class="info-item">
          <span class="info-icon">📍</span>
          <div>
            <h4>Endereço</h4>
            <p>Endereço completo</p>
          </div>
        </div>
        <!-- Telefone, Email -->
      </div>
      <div class="contato-form">
        <form id="contactForm">
          <div class="form-group">
            <input type="text" id="nome" name="nome" placeholder="Seu Nome" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Seu Email" required>
          </div>
          <div class="form-group">
            <input type="tel" id="telefone" name="telefone" placeholder="Seu Telefone" required>
          </div>
          <div class="form-group">
            <textarea id="mensagem" name="mensagem" rows="5" placeholder="Sua Mensagem" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </div>
</section>
```

**Funcionalidades**:
- Validação JavaScript (email regex, campos obrigatórios)
- Máscara de telefone automática
- Envio via API serverless (`/api/send-email`)
- Feedback visual (botão "Enviando...", alertas)
- Layout 2 colunas (desktop), 1 coluna (mobile)

### 6. Footer
```html
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-about">
        <img src="img/logo-[NOME].png" alt="Logo" class="footer-logo">
        <h3>[NOME]</h3>
        <p>Descrição breve da empresa...</p>
        <div class="footer-social">
          <h4>Siga-nos:</h4>
          <div class="social-icons">
            <a href="[FACEBOOK]" class="social-icon facebook">...</a>
            <a href="[INSTAGRAM]" class="social-icon instagram">...</a>
          </div>
        </div>
      </div>
      <div class="footer-links">
        <h4>Nossos Serviços</h4>
        <ul>
          <li><a href="#servicos">Serviço 1</a></li>
          <!-- ... -->
        </ul>
      </div>
      <div class="footer-links">
        <h4>Acesso Rápido</h4>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <!-- ... -->
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; <span id="currentYear"></span> [NOME]. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
```

**Características**:
- Fundo escuro (`--secondary-color`)
- Grid 3 colunas (desktop), 1 coluna (mobile)
- Ícones sociais com hover effects (cores específicas: Facebook #1877f2, Instagram gradient)
- Ano atualizado automaticamente via JavaScript

### 7. Botão WhatsApp Flutuante
```html
<a href="https://wa.me/[NUMERO]?text=[MENSAGEM]" 
   class="whatsapp-float" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Fale conosco no WhatsApp">
  <svg>...</svg>
</a>
```

**Características**:
- `position: fixed`, `bottom: 30px`, `right: 30px`
- Cor: `#25d366` (verde WhatsApp)
- Animação pulse suave
- Carregamento otimizado (via `whatsapp-loader.js`)

---

## ⚡ OTIMIZAÇÕES DE PERFORMANCE

### CSS Crítico Inline
- Incluir no `<head>` do `index.html`:
```html
<style>
  /* Reset básico */
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  /* Estilos críticos acima da dobra */
  html { scroll-behavior: smooth; overflow-x: hidden; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
  #header { position: fixed; top: 0; width: 100%; z-index: 1000; }
  .hero { min-height: 100vh; position: relative; }
  /* ... mais estilos críticos ... */
</style>
```

### Carregamento de Recursos
```html
<!-- Preconnect para domínios externos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload de recursos críticos -->
<link rel="preload" href="css/main.css" as="style">
<link rel="preload" href="img/logo-[NOME].png" as="image" fetchpriority="high">
<link rel="preload" href="js/utils.js" as="script">

<!-- CSS não-crítico carregado de forma assíncrona -->
<link rel="stylesheet" href="css/main.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="css/main.css"></noscript>

<!-- Google Fonts assíncrono -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" 
      rel="stylesheet" media="print" onload="this.media='all';this.onload=null">
```

### Otimização de Imagens
- **Formato**: WebP com fallback JPG/PNG
- **Responsive Images**: `<picture>` com `srcset` e `sizes`
- **Lazy Loading**: `loading="lazy"` em imagens abaixo da dobra
- **Prioridade**: `fetchpriority="high"` apenas na imagem hero
- **Dimensões**: Sempre especificar `width` e `height` para evitar CLS

```html
<picture>
  <source media="(max-width: 640px)" srcset="img/imagem-mobile.webp" type="image/webp">
  <source media="(min-width: 641px)" srcset="img/imagem-desktop.webp" type="image/webp">
  <img src="img/imagem.jpg" alt="Descrição" 
       loading="lazy" width="400" height="300" decoding="async">
</picture>
```

### JavaScript Otimizado
- **Defer/Async**: Scripts não-críticos com `defer`
- **Carregamento sob demanda**: Scripts carregados após interação do usuário
- **RequestAnimationFrame**: Para animações e scroll suave
- **Passive Event Listeners**: `{ passive: true }` em eventos de scroll/touch

```javascript
// Carrega scripts não-críticos após interação
(function() {
  let scriptsLoaded = false;
  const loadScripts = () => {
    if (scriptsLoaded) return;
    scriptsLoaded = true;
    const scripts = ['js/whatsapp-loader.js', 'js/script.js'];
    scripts.forEach(src => {
      const s = document.createElement('script');
      s.src = src;
      s.defer = true;
      document.body.appendChild(s);
    });
  };
  
  ['scroll', 'click', 'touchstart', 'keydown'].forEach(evt => {
    document.addEventListener(evt, loadScripts, { passive: true, once: true });
  });
  
  setTimeout(loadScripts, 3000); // Fallback após 3s
})();
```

---

## 📱 RESPONSIVIDADE

### Breakpoints
- **Mobile**: `max-width: 600px`
- **Tablet**: `max-width: 768px`
- **Desktop**: `max-width: 968px` (menu hamburger aparece)
- **Large Desktop**: `min-width: 1200px`

### Estratégias Responsivas
- **Grids**: `repeat(auto-fit, minmax(320px, 1fr))` para adaptação automática
- **Tipografia**: `clamp()` para tamanhos fluidos
- **Menu Mobile**: Hamburger animado, menu full-screen com overlay
- **Imagens**: `srcset` com diferentes resoluções
- **Espaçamentos**: Reduzidos em mobile (`padding: 80px 0` vs `100px 0`)

### Menu Mobile
```css
@media (max-width: 968px) {
  .menu-toggle { display: flex; }
  .nav-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: var(--white);
    flex-direction: column;
    transition: left 0.3s ease;
  }
  .nav-menu.active { left: 0; }
}
```

---

## 🎭 ANIMAÇÕES E INTERAÇÕES

### Hover Effects
- **Cards**: `transform: translateY(-5px a -10px)` + `box-shadow` aumentada
- **Botões**: `translateY(-3px)` + mudança de cor
- **Links**: Underline animado (`width: 0` → `width: 100%`)
- **Imagens**: `transform: scale(1.1)` em galerias

### Scroll Animations
- **Header**: Esconde ao rolar para baixo, mostra ao rolar para cima
- **Smooth Scroll**: Para âncoras na mesma página
- **Offset**: `90px` para compensar header fixo

### Transições
- **Padrão**: `all 0.3s ease`
- **Suaves**: Usar `requestAnimationFrame` para scroll
- **Performance**: `will-change` apenas quando necessário

---

## 🔧 FUNCIONALIDADES JAVASCRIPT

### 1. Menu Mobile
```javascript
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Fechar ao clicar em link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});
```

### 2. Scroll Suave
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
```

### 3. Header Hide/Show on Scroll
```javascript
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const isScrollingDown = currentScroll > lastScrollTop;
  
  if (isScrollingDown && currentScroll > 120) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  
  lastScrollTop = currentScroll;
}, { passive: true });
```

### 4. Formulário de Contato
```javascript
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    mensagem: document.getElementById('mensagem').value
  };
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    if (data.success) {
      alert('Mensagem enviada com sucesso!');
      e.target.reset();
    }
  } catch (error) {
    alert('Erro ao enviar mensagem. Tente novamente.');
  }
});
```

### 5. Máscara de Telefone
```javascript
document.getElementById('telefone').addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length <= 11) {
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  }
  e.target.value = value;
});
```

---

## 📧 CONFIGURAÇÃO DE EMAIL (Vercel)

### API Serverless (`api/send-email.js`)
```javascript
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método não permitido.' });
  }

  const { nome, email, telefone, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ZOHO_MAIL_USER,
      pass: process.env.ZOHO_MAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `[NOME] <${process.env.ZOHO_MAIL_USER}>`,
      to: process.env.ZOHO_MAIL_TO || process.env.ZOHO_MAIL_USER,
      subject: `Novo contato pelo site - ${nome}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Erro ao enviar email.' });
  }
};
```

### Variáveis de Ambiente (Vercel)
- `ZOHO_MAIL_USER`: Email do remetente
- `ZOHO_MAIL_PASS`: Senha do email
- `ZOHO_MAIL_TO`: Email destinatário (opcional)

---

## 🔍 SEO E META TAGS

### Head Completo
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[DESCRIÇÃO DE 150-160 CARACTERES]">
  <meta name="keywords" content="[PALAVRAS-CHAVE RELEVANTES]">
  <meta name="author" content="[NOME DA EMPRESA]">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.[DOMINIO].com.br/">
  <meta property="og:title" content="[TÍTULO]">
  <meta property="og:description" content="[DESCRIÇÃO]">
  <meta property="og:image" content="https://www.[DOMINIO].com.br/img/logo-[NOME].png">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="[TÍTULO]">
  <meta property="twitter:description" content="[DESCRIÇÃO]">
  <meta property="twitter:image" content="https://www.[DOMINIO].com.br/img/logo-[NOME].png">
  
  <meta name="theme-color" content="#00a8e8">
  <link rel="canonical" href="https://www.[DOMINIO].com.br/">
  
  <title>[TÍTULO] | [NOME DA EMPRESA]</title>
  
  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "[NOME DA EMPRESA]",
    "url": "https://www.[DOMINIO].com.br",
    "telephone": "+55[DDD][NUMERO]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[ENDEREÇO]",
      "addressLocality": "[CIDADE]",
      "addressRegion": "[ESTADO]",
      "addressCountry": "BR"
    }
  }
  </script>
</head>
```

---

## 🚀 DEPLOY (Vercel)

### `vercel.json`
```json
{
  "version": 2,
  "buildCommand": null,
  "framework": null,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/img/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Estrutura
- [ ] Criar estrutura de pastas
- [ ] Configurar `package.json` com `nodemailer`
- [ ] Criar `vercel.json` para deploy
- [ ] Configurar `manifest.json` para PWA

### HTML
- [ ] Criar `index.html` com todas as seções
- [ ] Adicionar meta tags SEO completas
- [ ] Incluir CSS crítico inline no `<head>`
- [ ] Implementar Schema.org JSON-LD
- [ ] Adicionar favicons e manifest

### CSS
- [ ] Criar `css/main.css` com variáveis CSS
- [ ] Implementar todos os componentes
- [ ] Adicionar media queries responsivas
- [ ] Otimizar para performance (evitar CLS)

### JavaScript
- [ ] Criar `js/utils.js` com funções utilitárias
- [ ] Implementar menu mobile em `js/script.js`
- [ ] Adicionar scroll suave
- [ ] Implementar formulário de contato
- [ ] Criar `js/whatsapp-loader.js` para carregamento otimizado

### API
- [ ] Criar `api/send-email.js`
- [ ] Criar `api/utils.js` com transporter
- [ ] Configurar variáveis de ambiente no Vercel

### Imagens
- [ ] Otimizar todas as imagens (WebP + fallback)
- [ ] Adicionar `width` e `height` em todas as imagens
- [ ] Implementar `<picture>` com `srcset` responsivo
- [ ] Configurar lazy loading

### Performance
- [ ] Adicionar preconnect/preload de recursos críticos
- [ ] Minificar CSS e JavaScript
- [ ] Configurar cache headers no Vercel
- [ ] Testar Core Web Vitals (LCP, FID, CLS)

### SEO
- [ ] Criar `robots.txt`
- [ ] Criar `sitemap.xml`
- [ ] Validar Schema.org no Google Rich Results Test
- [ ] Testar meta tags no Facebook Debugger e Twitter Card Validator

---

## 🎯 RESULTADO ESPERADO

Um site institucional completo, moderno e profissional que:
- ✅ Carrega rapidamente (LCP < 2.5s)
- ✅ É totalmente responsivo (mobile-first)
- ✅ Tem excelente SEO (meta tags, Schema.org, sitemap)
- ✅ Oferece ótima UX (animações suaves, navegação intuitiva)
- ✅ Está otimizado para performance (Core Web Vitals)
- ✅ Funciona perfeitamente em todos os dispositivos
- ✅ Envia emails corretamente via API serverless
- ✅ Segue as melhores práticas de acessibilidade (ARIA labels, semântica HTML)

---

## 📝 NOTAS FINAIS

- **Substituir placeholders**: `[NOME DA EMPRESA]`, `[SETOR DE ATUAÇÃO]`, `[DOMINIO]`, etc.
- **Personalizar cores**: Ajustar variáveis CSS conforme identidade visual da empresa
- **Otimizar imagens**: Usar ferramentas como Squoosh, TinyPNG ou ImageOptim
- **Testar em dispositivos reais**: Sempre validar em mobile, tablet e desktop
- **Monitorar performance**: Usar Google PageSpeed Insights, Lighthouse, WebPageTest
- **Manter atualizado**: Atualizar conteúdo, imagens e informações regularmente

---

**Este prompt foi gerado com base em um projeto real de alta qualidade e pode ser usado como template para criar sites institucionais profissionais.**


