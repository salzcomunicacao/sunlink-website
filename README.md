# Site SunLink - Documentação Completa

## Visão Geral

O site da SunLink é uma plataforma completa desenvolvida em React que apresenta os serviços da empresa de energia solar, oferece simulação online e facilita o contato com potenciais clientes. O site foi projetado com foco na experiência do usuário, responsividade e conversão de leads.

## Características Principais

### ✅ Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Navegação otimizada para todos os dispositivos
- Imagens e elementos responsivos

### ✅ Identidade Visual
- Cores da marca: Verde escuro (#2d5016) e Laranja (#ff8c00)
- Tipografia moderna e legível
- Elementos visuais consistentes

### ✅ Funcionalidades
- Navegação suave entre seções (smooth scroll)
- Formulário de simulação com validação
- Formulário de contato funcional
- Animações e transições suaves
- Header fixo com navegação intuitiva

### ✅ Seções do Site
1. **Header** - Navegação principal e CTA
2. **Hero** - Apresentação principal e proposta de valor
3. **Sobre Nós** - História, missão, visão e valores
4. **Serviços** - Soluções residenciais e empresariais
5. **Simulação** - Formulário de captura de leads
6. **Contato** - Informações e formulário de contato
7. **Footer** - Links, informações e redes sociais

## Estrutura de Arquivos

```
sunlink-website/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Simulation.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de CSS
- **Lucide React** - Ícones
- **JavaScript (JSX)** - Linguagem de programação

## Como Executar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Passos para Execução

1. **Navegue até o diretório do projeto:**
   ```bash
   cd sunlink-website
   ```

2. **Instale as dependências (se necessário):**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   pnpm run dev
   ```

4. **Acesse o site:**
   - Abra o navegador em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Formulários e Validações

### Formulário de Simulação
**Campos obrigatórios:**
- Tipo de Propriedade (Residencial/Empresarial)
- Nome Completo
- Email (com validação de formato)
- WhatsApp (com máscara automática)
- Média de Consumo Mensal

**Validações implementadas:**
- Verificação de campos obrigatórios
- Validação de formato de email
- Validação de número de WhatsApp
- Feedback visual de erro

### Formulário de Contato
**Campos obrigatórios:**
- Nome Completo
- Email (com validação)
- Assunto (dropdown com opções)
- Mensagem

## Personalização e Configuração

### Cores da Marca
As cores estão definidas no arquivo `src/App.css`:
```css
:root {
  --sunlink-green: #2d5016;
  --sunlink-orange: #ff8c00;
  --sunlink-light-green: #3d6b1f;
  --sunlink-light-orange: #ff7700;
}
```

### Informações de Contato
Para atualizar as informações de contato, edite os componentes:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Conteúdo do Site
O conteúdo pode ser editado diretamente nos componentes React correspondentes a cada seção.

## Integração com Backend

### Formulário de Simulação
O formulário está preparado para integração. Localize a função `handleSubmit` em `src/components/Simulation.jsx` e substitua o console.log por uma chamada real para sua API:

```javascript
// Exemplo de integração
const response = await fetch('/api/simulation', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

### Formulário de Contato
Similar ao formulário de simulação, a integração deve ser feita na função `handleSubmit` em `src/components/Contact.jsx`.

## Deploy e Produção

### Build de Produção
```bash
npm run build
```

### Opções de Deploy
1. **Netlify** - Conecte o repositório Git
2. **Vercel** - Deploy automático via Git
3. **GitHub Pages** - Para sites estáticos
4. **Servidor próprio** - Upload da pasta `dist/`

### Configurações de Deploy
- Comando de build: `npm run build`
- Diretório de publicação: `dist`
- Node.js versão: 18+

## SEO e Performance

### Otimizações Implementadas
- Meta tags configuradas no `index.html`
- Título da página otimizado
- Estrutura semântica HTML
- Imagens otimizadas (quando adicionadas)
- CSS minificado na build

### Melhorias Sugeridas
- Adicionar meta descriptions específicas
- Implementar Google Analytics
- Adicionar schema markup
- Otimizar imagens (WebP, lazy loading)
- Implementar sitemap.xml

## Manutenção e Atualizações

### Atualizações de Conteúdo
- Edite os componentes React para alterar textos
- Atualize as informações de contato conforme necessário
- Modifique as cores no arquivo CSS se houver mudança na identidade visual

### Atualizações Técnicas
- Mantenha as dependências atualizadas
- Monitore vulnerabilidades de segurança
- Teste regularmente em diferentes navegadores

## Suporte e Contato Técnico

Para dúvidas técnicas sobre o desenvolvimento ou manutenção do site, consulte:
- Documentação do React: https://react.dev
- Documentação do Tailwind CSS: https://tailwindcss.com
- Documentação do Vite: https://vitejs.dev

## Checklist de Lançamento

- [ ] Testar formulários em diferentes navegadores
- [ ] Verificar responsividade em dispositivos móveis
- [ ] Configurar analytics (Google Analytics, etc.)
- [ ] Configurar domínio personalizado
- [ ] Testar velocidade de carregamento
- [ ] Verificar links e navegação
- [ ] Configurar SSL/HTTPS
- [ ] Testar formulários com dados reais
- [ ] Configurar backup automático

---

**Desenvolvido para SunLink - Conectando você à melhor energia solar**

