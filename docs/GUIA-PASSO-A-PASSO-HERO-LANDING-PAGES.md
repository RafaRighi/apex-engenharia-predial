# Guia Passo a Passo - Configuração do Hero Section
## Landing Pages: Pintura Predial e Pintura Industrial

---

## 📋 ÍNDICE

1. [Visão Geral da Estrutura](#1-visão-geral-da-estrutura)
2. [Passo 1: Estrutura HTML do Hero](#2-passo-1-estrutura-html-do-hero)
3. [Passo 2: CSS do Header (Logo)](#3-passo-2-css-do-header-logo)
4. [Passo 3: CSS do Hero Section](#4-passo-3-css-do-hero-section)
5. [Passo 4: CSS do Hero Content (Texto)](#5-passo-4-css-do-hero-content-texto)
6. [Passo 5: Ajustes de Espaçamento](#6-passo-5-ajustes-de-espaçamento)
7. [Passo 6: Responsividade Mobile](#7-passo-6-responsividade-mobile)
8. [Passo 7: Teste e Ajustes Finais](#8-passo-7-teste-e-ajustes-finais)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. VISÃO GERAL DA ESTRUTURA

### Componentes do Hero:

```
┌─────────────────────────────────────────┐
│  HEADER (Fixed - Logo)                  │ ← z-index: 1000
│  ┌─────────────┐                        │
│  │   LOGO      │                        │
│  └─────────────┘                        │
├─────────────────────────────────────────┤
│                                          │
│  HERO SECTION (100vh)                    │
│  ┌──────────────────────────────────┐   │
│  │  Hero Overlay (gradiente)       │   │ ← z-index: 1
│  │                                  │   │
│  │  ┌──────────────────────────┐   │   │
│  │  │  Hero Content             │   │   │ ← z-index: 2
│  │  │  - Título (H1)            │   │   │
│  │  │  - Subtítulo              │   │   │
│  │  │  - Texto descritivo       │   │   │
│  │  │  - Botões CTA             │   │   │
│  │  └──────────────────────────┘   │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Hierarquia de Z-Index:
- **Header (Logo)**: `z-index: 1000` (sempre visível)
- **Hero Overlay**: `z-index: 1` (sobre a imagem de fundo)
- **Hero Content**: `z-index: 2` (sobre o overlay)

---

## 2. PASSO 1: ESTRUTURA HTML DO HERO

### 2.1 Estrutura Completa

Localize a seção `<main>` no arquivo HTML (`lp-pintura-predial.html` ou `lp-pintura-industrial.html`) e verifique se está assim:

```html
<main>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">Título Principal Aqui</h1>
            <p class="hero-subtitle">Subtítulo com benefício principal</p>
            <p class="hero-text">Texto descritivo com mais informações...</p>
            <div class="hero-buttons">
                <a href="#formulario" class="btn btn-cta-primary">Botão Principal</a>
                <a href="https://wa.me/..." class="btn btn-cta-whatsapp">WhatsApp</a>
            </div>
        </div>
    </section>
    
    <!-- Outras seções... -->
</main>
```

### 2.2 Verificações Importantes

✅ **Header está ANTES do `<main>`**:
```html
<header class="lp-header">
    <div class="container">
        <a href="index.html" class="logo-link">
            <img src="img/logo-apex.png" alt="Logo APEX" class="lp-logo">
        </a>
    </div>
</header>

<main>
    <!-- Hero aqui -->
</main>
```

✅ **Hero Overlay está DENTRO da section.hero**:
```html
<section class="hero">
    <div class="hero-overlay"></div>  <!-- ✅ Correto -->
    <div class="hero-content">...</div>
</section>
```

❌ **NÃO faça assim**:
```html
<section class="hero">
    <div class="hero-content">...</div>
    <div class="hero-overlay"></div>  <!-- ❌ Errado - overlay deve vir primeiro -->
</section>
```

---

## 3. PASSO 2: CSS DO HEADER (LOGO)

### 3.1 Localização do CSS

O CSS do header está na tag `<style>` dentro do `<head>` do HTML, na seção "Estilos específicos para landing page".

### 3.2 CSS do Header Fixo

```css
/* Header simplificado - apenas logo */
.lp-header {
    position: fixed;           /* Fixo no topo */
    top: 0;                    /* Colado no topo */
    left: 0;
    width: 100%;               /* Largura total */
    background: transparent;   /* Fundo transparente */
    backdrop-filter: none;     /* Sem blur */
    box-shadow: none;          /* Sem sombra */
    z-index: 1000;             /* ACIMA de tudo */
    padding: 15px 0;           /* Espaçamento vertical */
}

.lp-header .container {
    display: flex;
    justify-content: center;   /* Logo centralizado */
    align-items: center;
}

.lp-logo {
    max-width: 200px;          /* Tamanho máximo da logo */
    height: auto;               /* Altura proporcional */
}
```

### 3.3 Ajustes de Tamanho da Logo

#### Desktop (padrão):
```css
.lp-logo {
    max-width: 200px;    /* Ajuste conforme necessário */
    height: auto;
}
```

#### Mobile (dentro de `@media (max-width: 768px)`):
```css
@media (max-width: 768px) {
    .lp-logo {
        max-width: 150px;  /* Menor em mobile */
    }
}
```

### 3.4 Altura do Header

A altura do header é determinada por:
- `padding: 15px 0` (30px total)
- Altura da logo (proporcional ao `max-width`)

**Altura total aproximada**: ~60-80px (dependendo do tamanho da logo)

---

## 4. PASSO 3: CSS DO HERO SECTION

### 4.1 CSS Crítico Inline (no `<head>`)

Este CSS deve estar na tag `<style>` dentro do `<head>`, antes do link para `main.css`:

```css
<!-- CSS crítico inline para hero -->
<style>
    .hero {
        position: relative;              /* Container relativo */
        min-height: 100vh;                /* Altura mínima: tela inteira */
        padding-bottom: 50px;             /* Espaço inferior */
        background: url('img/mock-hero-apex.jpg') center/cover no-repeat;
        display: flex;                    /* Flexbox para centralizar */
        align-items: center;              /* Centraliza verticalmente */
        justify-content: center;          /* Centraliza horizontalmente */
        text-align: center;               /* Texto centralizado */
        color: #ffffff;                   /* Cor do texto */
    }
</style>
```

### 4.2 CSS do Hero Overlay

O overlay cria uma camada escura sobre a imagem de fundo para melhorar a legibilidade do texto:

```css
.hero-overlay {
    position: absolute;                   /* Posicionamento absoluto */
    top: 0;                              /* Do topo */
    left: 0;                             /* Da esquerda */
    width: 100%;                         /* Largura total */
    height: 100%;                        /* Altura total */
    background: var(--gradient-overlay);  /* Gradiente escuro */
    z-index: 1;                         /* Acima da imagem, abaixo do conteúdo */
}
```

**Nota**: Se `var(--gradient-overlay)` não estiver definido, use:
```css
background: linear-gradient(135deg, rgba(0, 52, 89, 0.45) 0%, rgba(0, 126, 167, 0.45) 100%);
```

---

## 5. PASSO 4: CSS DO HERO CONTENT (TEXTO)

### 5.1 CSS Crítico Inline (no `<head>`)

```css
<style>
    .hero-content {
        position: relative;      /* Relativo ao .hero */
        z-index: 2;            /* ACIMA do overlay (z-index: 1) */
        max-width: 800px;       /* Largura máxima do conteúdo */
        padding: 20px;          /* Espaçamento interno */
        margin-top: 100px;      /* ⚠️ IMPORTANTE: Espaço do topo */
        margin-bottom: 50px;    /* Espaço inferior */
        opacity: 1;
        transform: none;
    }
    
    .hero-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: #ffffff;
    }
    
    .hero-subtitle {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        color: #ffffff;
    }
</style>
```

### 5.2 CSS Adicional (no `main.css` ou na seção de estilos da LP)

```css
.hero-content {
    max-width: 1200px;                    /* Largura máxima */
    padding: 20px;                        /* Padding interno */
    margin-top: calc(60px + 100px);       /* ⚠️ Altura do header + espaço extra */
    margin-bottom: 50px;
    margin-left: auto;                    /* Centraliza horizontalmente */
    margin-right: auto;
    box-sizing: border-box;
}

.hero-title {
    font-size: 4rem;                      /* Tamanho grande */
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* Sombra no texto */
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: 300;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    color: #ffffff;
}

.hero-text {
    font-size: 1.1rem;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
}
```

---

## 6. PASSO 5: AJUSTES DE ESPAÇAMENTO

### 6.1 Cálculo do Espaçamento Correto

O `margin-top` do `.hero-content` deve ser calculado considerando:

```
margin-top = Altura do Header + Espaço de Respiração
```

#### Exemplo de Cálculo:

1. **Altura do Header**:
   - Padding: `15px` (top) + `15px` (bottom) = `30px`
   - Logo: `200px` (altura aproximada)
   - **Total**: ~60-80px

2. **Espaço de Respiração**:
   - Mínimo recomendado: `60px`
   - Ideal: `80-100px`

3. **Resultado**:
   ```css
   margin-top: calc(80px + 100px);  /* = 180px */
   /* OU */
   margin-top: 180px;
   ```

### 6.2 Ajuste Fino (Desktop)

Se a logo estiver sobrepondo o texto:

**Aumente o `margin-top`**:
```css
.hero-content {
    margin-top: 120px;  /* Aumente de 100px para 120px */
}
```

Se houver muito espaço vazio:

**Diminua o `margin-top`**:
```css
.hero-content {
    margin-top: 80px;  /* Diminua de 100px para 80px */
}
```

### 6.3 Ajuste por Tamanho da Logo

#### Logo Pequena (150px):
```css
.hero-content {
    margin-top: 100px;  /* Menos espaço necessário */
}
```

#### Logo Média (200px):
```css
.hero-content {
    margin-top: 120px;  /* Espaço médio */
}
```

#### Logo Grande (250px+):
```css
.hero-content {
    margin-top: 150px;  /* Mais espaço necessário */
}
```

---

## 7. PASSO 6: RESPONSIVIDADE MOBILE

### 7.1 Ajustes para Mobile

Adicione dentro de `@media (max-width: 768px)`:

```css
@media (max-width: 768px) {
    /* Logo menor em mobile */
    .lp-logo {
        max-width: 150px;
    }
    
    /* Hero content com mais espaço do topo */
    .hero-content {
        margin-top: 120px;  /* Aumente para mobile */
        padding: 15px;       /* Menos padding */
    }
    
    /* Títulos menores */
    .hero-title {
        font-size: 2.5rem;  /* Reduzido de 4rem */
    }
    
    .hero-subtitle {
        font-size: 1.2rem;  /* Reduzido de 1.5rem */
    }
    
    /* Botões em coluna */
    .hero-buttons {
        flex-direction: column;
        gap: 15px;
    }
}
```

### 7.2 Ajustes para Telas Muito Pequenas

Adicione dentro de `@media (max-width: 600px)`:

```css
@media (max-width: 600px) {
    .hero-content {
        margin-top: 140px;  /* Ainda mais espaço */
    }
    
    .hero-title {
        font-size: 2rem;    /* Ainda menor */
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .hero-text {
        font-size: 1rem;
    }
}
```

---

## 8. PASSO 7: TESTE E AJUSTES FINAIS

### 8.1 Checklist de Verificação

#### ✅ Estrutura HTML
- [ ] Header está antes do `<main>`
- [ ] Hero Overlay está antes do Hero Content
- [ ] Todos os elementos estão dentro da `<section class="hero">`

#### ✅ Posicionamento
- [ ] Logo não sobrepõe o texto do hero
- [ ] Texto está centralizado verticalmente
- [ ] Há espaço de respiração entre header e conteúdo

#### ✅ Visual
- [ ] Overlay está visível (gradiente escuro)
- [ ] Texto está legível (text-shadow aplicado)
- [ ] Botões estão visíveis e clicáveis

#### ✅ Responsividade
- [ ] Mobile: Logo menor, texto ajustado
- [ ] Tablet: Layout intermediário
- [ ] Desktop: Layout completo

### 8.2 Teste em Diferentes Dispositivos

1. **Desktop (1920x1080)**:
   - Verifique se o texto está bem centralizado
   - Confirme que não há sobreposição

2. **Tablet (768px)**:
   - Teste o breakpoint de 768px
   - Verifique se os ajustes mobile estão funcionando

3. **Mobile (375px)**:
   - Confirme que o texto não está cortado
   - Verifique se os botões estão acessíveis

### 8.3 Ajustes Finais por Dispositivo

#### Se no Desktop a logo sobrepõe:
```css
.hero-content {
    margin-top: 150px;  /* Aumente */
}
```

#### Se no Mobile há muito espaço:
```css
@media (max-width: 768px) {
    .hero-content {
        margin-top: 100px;  /* Diminua */
    }
}
```

#### Se o texto está muito próximo das bordas:
```css
.hero-content {
    padding: 30px;  /* Aumente o padding */
}
```

---

## 9. TROUBLESHOOTING

### Problema 1: Logo sobrepõe o texto do hero

**Causa**: `margin-top` do `.hero-content` é menor que a altura do header.

**Solução**:
```css
.hero-content {
    margin-top: 150px;  /* Aumente este valor */
}
```

**Verificação**:
- Altura do header: ~80px
- Espaço mínimo: 60px
- **Total necessário**: 140px+
- **Recomendado**: 150-180px

---

### Problema 2: Texto muito próximo do topo

**Causa**: `margin-top` muito pequeno ou header muito alto.

**Solução**:
```css
.hero-content {
    margin-top: 180px;  /* Aumente */
}

/* OU reduza a altura do header */
.lp-header {
    padding: 10px 0;  /* Reduza de 15px para 10px */
}
```

---

### Problema 3: Texto não está centralizado verticalmente

**Causa**: `.hero` não está usando `display: flex` ou `align-items: center`.

**Solução**:
```css
.hero {
    display: flex;
    align-items: center;      /* Centraliza verticalmente */
    justify-content: center;   /* Centraliza horizontalmente */
    min-height: 100vh;
}
```

---

### Problema 4: Overlay não aparece

**Causa**: `z-index` incorreto ou CSS não aplicado.

**Solução**:
```css
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 52, 89, 0.45) 0%, rgba(0, 126, 167, 0.45) 100%);
    z-index: 1;  /* Deve ser 1 */
}

.hero-content {
    z-index: 2;  /* Deve ser 2 (acima do overlay) */
}
```

---

### Problema 5: Em mobile, texto cortado ou sobreposto

**Causa**: `margin-top` insuficiente em mobile ou padding muito pequeno.

**Solução**:
```css
@media (max-width: 768px) {
    .hero-content {
        margin-top: 140px;  /* Aumente para mobile */
        padding: 20px;      /* Aumente o padding */
    }
}
```

---

### Problema 6: Imagem de fundo não aparece

**Causa**: Caminho da imagem incorreto ou arquivo não existe.

**Solução**:
1. Verifique o caminho: `url('img/mock-hero-apex.jpg')`
2. Confirme que o arquivo existe em `img/mock-hero-apex.jpg`
3. Teste com caminho absoluto: `url('/img/mock-hero-apex.jpg')`

---

## 10. EXEMPLO COMPLETO DE CÓDIGO

### 10.1 HTML Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- ... meta tags ... -->
    
    <!-- CSS crítico inline para hero -->
    <style>
        .hero {
            position: relative;
            min-height: 100vh;
            padding-bottom: 50px;
            background: url('img/mock-hero-apex.jpg') center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #ffffff;
        }
        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            padding: 20px;
            margin-top: 120px;  /* ⚠️ AJUSTE ESTE VALOR */
            margin-bottom: 50px;
            opacity: 1;
            transform: none;
        }
        .hero-title {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            color: #ffffff;
        }
        .hero-subtitle {
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            color: #ffffff;
        }
    </style>
    
    <!-- Estilos específicos para landing page -->
    <style>
        /* Header */
        .lp-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: transparent;
            backdrop-filter: none;
            box-shadow: none;
            z-index: 1000;
            padding: 15px 0;
        }
        .lp-header .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .lp-logo {
            max-width: 200px;
            height: auto;
        }
        
        /* Hero Overlay */
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(0, 52, 89, 0.45) 0%, rgba(0, 126, 167, 0.45) 100%);
            z-index: 1;
        }
        
        /* Hero Content - Estilos adicionais */
        .hero-title {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 15px;
            font-weight: 300;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        .hero-text {
            font-size: 1.1rem;
            margin-bottom: 30px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        .hero-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 40px;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .lp-logo {
                max-width: 150px;
            }
            .hero-content {
                margin-top: 120px;
            }
            .hero-title {
                font-size: 2.5rem;
            }
            .hero-subtitle {
                font-size: 1.2rem;
            }
            .hero-buttons {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="lp-header">
        <div class="container">
            <a href="index.html" class="logo-link">
                <img src="img/logo-apex.png" alt="Logo APEX" class="lp-logo" width="200" height="46">
            </a>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title">Título Principal</h1>
                <p class="hero-subtitle">Subtítulo com benefício</p>
                <p class="hero-text">Texto descritivo...</p>
                <div class="hero-buttons">
                    <a href="#formulario" class="btn btn-cta-primary">Botão Principal</a>
                    <a href="https://wa.me/..." class="btn btn-cta-whatsapp">WhatsApp</a>
                </div>
            </div>
        </section>
        
        <!-- Outras seções... -->
    </main>
</body>
</html>
```

---

## 11. RESUMO RÁPIDO

### Valores Recomendados:

#### Desktop:
```css
.lp-header {
    padding: 15px 0;
    z-index: 1000;
}
.lp-logo {
    max-width: 200px;
}
.hero-content {
    margin-top: 120px;  /* ⚠️ AJUSTE PRINCIPAL */
    max-width: 800px;
    padding: 20px;
}
```

#### Mobile:
```css
@media (max-width: 768px) {
    .lp-logo {
        max-width: 150px;
    }
    .hero-content {
        margin-top: 120px;  /* Pode ser igual ou maior */
    }
}
```

### Fórmula do Espaçamento:

```
margin-top = Altura do Header + Espaço de Respiração (60-100px)
```

**Exemplo**:
- Header: 80px
- Espaço: 60px
- **Total**: 140px (use 120-150px para segurança)

---

## 12. DICAS FINAIS

1. **Teste sempre em diferentes tamanhos de tela**
2. **Use `margin-top` em vez de `padding-top`** para evitar problemas de scroll
3. **Mantenha o `z-index` correto**: Header (1000) > Content (2) > Overlay (1)
4. **Use `text-shadow`** para melhorar legibilidade sobre imagens
5. **Ajuste o `margin-top` gradualmente** até encontrar o valor ideal

---

**Documento criado em**: 25 de dezembro de 2025  
**Versão**: 1.0  
**Aplicável a**: `lp-pintura-predial.html` e `lp-pintura-industrial.html`

