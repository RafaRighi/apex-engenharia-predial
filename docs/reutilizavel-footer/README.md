# Rodapé reutilizável – 4 colunas + regiões + logos

Pacote para usar em outro site: rodapé em 4 colunas (lado a lado), texto curto, lista de regiões à esquerda e logos à direita.

## Conteúdo

- **footer.html** – HTML do rodapé (substitua links, textos e caminhos das imagens).
- **footer.css** – CSS do rodapé (inclui layout 4 colunas e responsivo).

## Como usar no outro site

1. **CSS:** Copie o conteúdo de `footer.css` para o seu arquivo de estilos global ou inclua o arquivo:
   ```html
   <link rel="stylesheet" href="caminho/footer.css">
   ```
   Se o seu site não usar as variáveis `--secondary-color`, `--primary-color`, `--white`, `--transition`, defina-as no `:root` ou troque no `footer.css` pelos valores desejados (ex.: cor de fundo do rodapé, cor dos títulos, cor do texto).

2. **HTML:** Copie o bloco de `footer.html` para dentro do `<body>`, antes do `</body>`. Ajuste:
   - `src` do logo (ex.: `img/logo-apex.png` → seu logo).
   - `href` dos links de serviços e acesso rápido.
   - Lista “Regiões onde atendemos”: links e textos conforme suas páginas de região.
   - Caminho da segunda logo (ex.: `img/zurich.webp`) ou remova se não usar.
   - Texto do parágrafo curto e nome da empresa.
   - Redes sociais: URLs do Facebook e Instagram (ou remova/altere ícones).
   - Texto do copyright no `.footer-bottom`.

3. **Estrutura das 4 colunas:**
   - Coluna 1: logo + nome + texto curto + endereço/telefone + redes.
   - Coluna 2: Nossos Serviços (links).
   - Coluna 3: Acesso Rápido (links).
   - Coluna 4: Regiões onde atendemos (lista à esquerda, logos à direita).

4. **Mobile:** No `footer.css` já existe regra para telas ≤ 968px: as colunas viram uma única coluna e o texto da coluna 1 usa largura total.

## Variáveis CSS usadas no footer.css

- `--secondary-color` – fundo do rodapé.
- `--primary-color` – títulos (h4) e hover dos links.
- `--white` – texto e ícones.
- `--transition` – transição dos hovers (ex.: `all 0.3s ease`).

Defina no `:root` do seu projeto ou altere os valores diretamente no `footer.css`.
