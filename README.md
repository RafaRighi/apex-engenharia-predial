# Site APEX Engenharia Predial

Site institucional desenvolvido para a APEX Engenharia Predial, especializada em pintura predial e manutenção predial.

## 📁 Estrutura do Projeto

```
apex-site/
│
├── index.html          # Página principal do site
├── blog.html           # Página principal do blog
├── css/
│   ├── main.css        # Estilos CSS principais
│   └── blog.css        # Estilos CSS do blog
├── js/
│   ├── script.js       # Scripts JavaScript principais
│   └── blog.js         # Scripts JavaScript do blog
├── img/
│   └── logo-apex.png   # Logo da empresa
├── blog/
│   └── posts/          # Artigos do blog
│       └── restauracao-fachadas-quando-fazer.html
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Hospedagem

Para hospedar o site, você pode usar qualquer serviço de hospedagem web. Algumas opções populares:

- **Hostinger**
- **HostGator**
- **Locaweb**
- **GitHub Pages** (gratuito)
- **Netlify** (gratuito)
- **Vercel** (gratuito)

### 2. Upload dos Arquivos

1. Acesse o painel de controle da sua hospedagem
2. Localize o gerenciador de arquivos (File Manager)
3. Navegue até a pasta `public_html` ou `www`
4. Faça upload de todos os arquivos e pastas do projeto
5. Certifique-se de manter a estrutura de pastas intacta

### 3. Configuração do Domínio

Se você tiver um domínio próprio:
1. Configure os DNS do domínio para apontar para sua hospedagem
2. Aguarde a propagação (pode levar até 48 horas)
3. Acesse seu site pelo domínio

## ✏️ Personalizações Necessárias

Antes de publicar o site, você precisa personalizar algumas informações:

### 1. Informações de Contato (index.html)

Localize e atualize as seguintes informações no arquivo `index.html`:

```html
<!-- Seção de Contato -->
<div class="info-item">
    <span class="info-icon">📍</span>
    <div>
        <h4>Endereço</h4>
        <p>Seu endereço completo aqui<br>Cidade - Estado - CEP</p>
    </div>
</div>

<div class="info-item">
    <span class="info-icon">📞</span>
    <div>
        <h4>Telefone</h4>
        <p>(XX) XXXXX-XXXX</p>
    </div>
</div>

<div class="info-item">
    <span class="info-icon">✉️</span>
    <div>
        <h4>Email</h4>
        <p>contato@apexengenharia.com.br</p>
    </div>
</div>
```

### 2. WhatsApp Flutuante

Atualize o número do WhatsApp no botão flutuante em **todos os arquivos HTML** (`index.html`, `blog.html` e posts):

```html
<!-- Botão WhatsApp Flutuante -->
<a href="https://wa.me/5500000000000" target="_blank" class="whatsapp-float">
```

Substitua `5500000000000` pelo seu número no formato internacional:
- Código do país (55 para Brasil)
- DDD (sem zero)
- Número completo (sem espaços ou traços)

Exemplo: `5547999770874`

### 3. Imagem de Fundo da Seção Hero

A imagem de fundo atual está hospedada no Unsplash. Para usar uma imagem própria:

1. Adicione sua imagem na pasta `img/`
2. Edite o arquivo `css/main.css` e localize:

```css
.hero {
    background: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920') center/cover no-repeat;
}
```

3. Substitua pela sua imagem:

```css
.hero {
    background: url('../img/sua-imagem.jpg') center/cover no-repeat;
}
```

### 4. Cores do Site (Opcional)

Para alterar as cores do site, edite as variáveis CSS no arquivo `css/main.css`:

```css
:root {
    --primary-color: #00a8e8;      /* Cor principal */
    --secondary-color: #003459;    /* Cor secundária */
    --accent-color: #007ea7;       /* Cor de destaque */
}
```

## 📝 Gerenciando o Blog

### Adicionando Novos Posts

Para adicionar um novo post ao blog:

1. **Crie um novo arquivo HTML** na pasta `blog/posts/` (ex: `meu-novo-post.html`)
2. **Use o arquivo de exemplo** `restauracao-fachadas-quando-fazer.html` como modelo
3. **Atualize o conteúdo** do post (título, data, categoria, texto, imagens)
4. **Adicione o post à página principal do blog** (`blog.html`):

```html
<article class="post-card" data-category="sua-categoria">
    <div class="post-image">
        <img src="URL_DA_IMAGEM" alt="Descrição">
        <span class="post-category">Categoria</span>
    </div>
    <div class="post-content">
        <div class="post-meta">
            <span class="post-date">Data do Post</span>
            <span class="post-read-time">X min de leitura</span>
        </div>
        <h2 class="post-title">
            <a href="blog/posts/seu-post.html">Título do Post</a>
        </h2>
        <p class="post-excerpt">Resumo do post...</p>
        <a href="blog/posts/seu-post.html" class="read-more">Ler mais →</a>
    </div>
</article>
```

### Categorias Disponíveis

O blog possui as seguintes categorias pré-configuradas:
- `reformas` - Reformas
- `manutencao` - Manutenção
- `dicas` - Dicas
- `seguranca` - Segurança

Para adicionar novas categorias, edite o arquivo `blog.html` e adicione um novo botão de filtro:

```html
<button class="filter-btn" data-category="nova-categoria">Nova Categoria</button>
```

### Imagens para Posts

Você pode usar imagens de bancos gratuitos como:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

Ou adicionar suas próprias imagens na pasta `img/`.

## 📧 Configuração do Formulário de Contato

O formulário atualmente exibe um alerta de confirmação. Para enviar emails reais, você tem algumas opções:

### Opção 1: FormSubmit (Gratuito e Simples)

1. Acesse [formsubmit.co](https://formsubmit.co/)
2. No arquivo `index.html`, modifique o formulário:

```html
<form action="https://formsubmit.co/seu-email@exemplo.com" method="POST">
    <input type="hidden" name="_subject" value="Novo contato do site APEX">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://seusite.com.br/obrigado.html">
    
    <div class="form-group">
        <input type="text" name="nome" placeholder="Seu Nome" required>
    </div>
    <!-- ... resto do formulário ... -->
</form>
```

### Opção 2: EmailJS (Gratuito até 200 emails/mês)

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/)
2. Configure seu serviço de email
3. Adicione o SDK do EmailJS no `index.html`
4. Configure o JavaScript conforme a documentação

### Opção 3: Backend Próprio

Se você tiver conhecimento em programação backend, pode criar uma API própria usando:
- PHP
- Node.js
- Python (Flask/Django)

## 📰 Configuração da Newsletter

A newsletter do blog funciona de forma similar ao formulário de contato. Você pode integrar com serviços como:

- **MailChimp** - Popular e com plano gratuito
- **SendGrid** - Até 100 emails/dia gratuitos
- **EmailJS** - Simples de integrar

Edite o arquivo `js/blog.js` e configure a integração conforme a documentação do serviço escolhido.

## 🎨 Recursos Utilizados

- **Fontes**: Google Fonts (Poppins)
- **Ícones**: Emojis nativos e SVG customizado (WhatsApp)
- **Imagens**: Unsplash (para imagens de exemplo)

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktops (1920px+)
- Laptops (1024px - 1920px)
- Tablets (768px - 1024px)
- Smartphones (320px - 768px)

## 🔧 Suporte e Manutenção

Para editar o site:
1. Abra os arquivos no Visual Studio Code ou qualquer editor de texto
2. Faça as alterações necessárias
3. Salve os arquivos
4. Faça upload novamente para a hospedagem

## 📊 SEO e Performance

### Dicas para Melhorar o SEO:

1. **Atualize as meta tags** em cada página HTML
2. **Use palavras-chave relevantes** nos títulos e conteúdos
3. **Adicione alt text** descritivo em todas as imagens
4. **Crie um sitemap.xml** para facilitar a indexação
5. **Configure o Google Analytics** para monitorar o tráfego

### Dicas para Melhorar a Performance:

1. **Otimize as imagens** antes de fazer upload (use ferramentas como TinyPNG)
2. **Ative o cache** no servidor de hospedagem
3. **Minimize arquivos CSS e JS** (use ferramentas online)
4. **Use CDN** para servir arquivos estáticos

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através dos canais oficiais da APEX Engenharia Predial.

---

**Desenvolvido para APEX Engenharia Predial**

**Versão 2.0 - Agora com Blog Integrado!**

