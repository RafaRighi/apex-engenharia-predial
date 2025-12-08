# 🔧 GUIA: Deploy Manual na Vercel

## 🎯 **PROBLEMA**
A Vercel não está detectando automaticamente os commits mais recentes do GitHub. Este guia mostra como fazer um deploy manual forçando a Vercel a usar o código mais recente.

---

## 📍 **OPÇÃO 1: Deploy Manual pela Interface (Mais Simples)**

### **Passo 1: Acessar o Dashboard do Projeto**
1. Acesse: **https://vercel.com**
2. Faça login na sua conta
3. No dashboard principal, encontre o projeto **"apex-engenharia-predial"**
4. **Clique no nome do projeto** para abrir a página do projeto

### **Passo 2: Ir para a Página de Deployments**
1. No topo da página do projeto, você verá várias abas:
   - **"Overview"** (Visão Geral)
   - **"Deployments"** (Implantações) ← **CLIQUE AQUI**
   - "Analytics"
   - "Speed Insights"
   - "Logs"
   - "Settings"
   - etc.

2. **Clique na aba "Deployments"**

### **Passo 3: Iniciar Novo Deploy**
1. Na página de "Deployments", procure por um botão no canto superior direito:
   - Pode aparecer como **"Add New..."** ou **"Deploy"** ou **"New Deployment"**
   - Ou pode ser um botão com ícone de **"+"** (mais)

2. **Clique nesse botão**

3. Uma janela/modal deve abrir com opções:
   - **"Import Git Repository"** ou
   - **"Deploy from GitHub"** ou
   - **"Deploy"**

4. Se aparecer uma lista de repositórios:
   - Selecione: **"RafaRighi/apex-engenharia-predial"**
   - Escolha a branch: **"main"**
   - Clique em **"Deploy"** ou **"Import"**

### **Passo 4: Aguardar o Deploy**
- Aguarde 1-3 minutos
- O deploy deve aparecer na lista com status "Building..." e depois "Ready"
- Verifique se o commit mostrado é o mais recente (deve ser `9adf1d1` ou mais recente)

---

## 📍 **OPÇÃO 2: Usar o Botão "Redeploy" (Alternativa)**

### **Se você não encontrar o botão "Add New..." ou "Deploy":**

1. Na página de **"Deployments"**, você verá uma lista de deploys anteriores
2. Encontre o deploy mais recente (mesmo que seja antigo)
3. **Clique nos três pontos (⋯)** ou no menu ao lado do deploy
4. Deve aparecer um menu com opções:
   - **"Redeploy"** ← **CLIQUE AQUI**
   - "Promote"
   - "Inspect Deployment"
   - etc.

5. Uma janela deve abrir perguntando:
   - "Choose Environment" → Selecione **"Production"**
   - Pode ter uma opção "Use existing Build Cache" → **Desmarque esta opção**
   - Clique em **"Redeploy"**

6. Isso deve criar um novo deploy (mas ainda pode usar código antigo)

---

## 📍 **OPÇÃO 3: Verificar Configurações do Projeto**

### **Se nenhuma das opções acima funcionar:**

1. Vá em **"Settings"** (Configurações) na barra superior
2. No menu lateral esquerdo, clique em **"Git"**
3. Verifique se o repositório está conectado:
   - Deve mostrar: **"RafaRighi/apex-engenharia-predial"**
   - Deve ter um botão **"Disconnect"** ou **"Conectar"**

4. Se estiver desconectado:
   - Clique em **"Conectar"** ao lado do repositório
   - Isso deve iniciar um novo deploy automaticamente

---

## 🔍 **ONDE ENCONTRAR CADA ITEM (Referência Visual)**

### **Dashboard Principal:**
```
┌─────────────────────────────────────┐
│ [Logo] Vercel    [Buscar] [Perfil]   │
├─────────────────────────────────────┤
│ Projetos de Rafael Righi            │
│                                      │
│ ┌─────────────────────────────────┐ │
│ │ apex-engenharia-predial        │ │ ← CLIQUE AQUI
│ │ www.apexengenhariapredial...    │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### **Página do Projeto:**
```
┌─────────────────────────────────────┐
│ apex-engenharia-predial             │
├─────────────────────────────────────┤
│ Overview | Deployments | Analytics │ ← CLIQUE EM "Deployments"
│          ↑                           │
└─────────────────────────────────────┘
```

### **Página de Deployments:**
```
┌─────────────────────────────────────┐
│ Deployments                         │
│                                     │
│ [Add New...] ou [Deploy] ou [+]    │ ← CLIQUE AQUI
│                                     │
│ Lista de deploys anteriores...      │
└─────────────────────────────────────┘
```

---

## ⚠️ **PROBLEMAS COMUNS**

### **"Não encontro o botão 'Add New...'"**
- Procure por um botão com ícone de **"+"** (mais)
- Ou procure por **"Deploy"** ou **"New Deployment"**
- Pode estar no canto superior direito da página

### **"Não aparece a opção de selecionar repositório"**
- Isso significa que o repositório já está conectado
- Tente usar a **Opção 2** (Redeploy) ou **Opção 3** (Verificar Configurações)

### **"O deploy ainda usa código antigo"**
- Cancele o deploy atual (se estiver em andamento)
- Faça um novo deploy usando a **Opção 1**
- Certifique-se de que está selecionando a branch **"main"**

---

## ✅ **VERIFICAÇÃO FINAL**

Após fazer o deploy, verifique:

1. **Na página de Deployments:**
   - O deploy mais recente deve ter o commit `9adf1d1` ou mais recente
   - Não deve ser `f365e53` (commit antigo)

2. **No site publicado:**
   - Acesse: `www.apexengenhariapredial.com.br`
   - Verifique se as otimizações dos serviços estão aplicadas
   - As páginas de serviços devem ter a nova estrutura SEO

---

## 🆘 **AINDA COM PROBLEMAS?**

Se nenhuma das opções acima funcionar:

1. **Tire um print da tela** mostrando:
   - A página de "Deployments"
   - Ou a página de "Settings" > "Git"
   - Ou qualquer tela onde você está tentando fazer o deploy

2. **Me envie o print** e eu te ajudo a encontrar a opção correta

---

**Última atualização:** Agora mesmo
**Status:** Aguardando deploy manual na Vercel


