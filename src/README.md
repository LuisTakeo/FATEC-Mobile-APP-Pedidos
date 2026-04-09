# 📱 Estrutura de Componentes - FATEC Mobile App Pedidos

## Visão Geral
Projeto refatorizado e componentizado com arquitetura escalável e totalmente responsiva para mobile, tablet e desktop.

## 📁 Estrutura de Diretórios

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BackgroundOrbs.tsx      # Efeito visual de fundo com orbs
│   ├── ConfirmButton.tsx       # Botão de confirmação
│   ├── Hero.tsx                # Seção de introdução/hero
│   ├── MainLayout.tsx          # Layout principal da app
│   ├── MenuSection.tsx         # Seção de seleção de produto/bebida
│   ├── PreviewCard.tsx         # Card de visualização de itens
│   ├── SummaryCard.tsx         # Card com resumo rápido
│   └── TotalCard.tsx           # Card com resumo total
├── hooks/               # Custom React Hooks
│   └── useMenu.ts              # Hook para gerenciamento de estado do menu
├── types/               # Tipos TypeScript
│   └── menu.ts                 # Tipos de MenuItem
├── styles/              # Utilidades de estilo
│   ├── colors.ts               # Paleta de cores centralizada
│   └── responsive.ts           # Hook useResponsive() e utilidades
└── constants/           # Constantes
    └── menu.ts                 # Dados de produtos e bebidas
```

## 🎯 Componentes Principais

### `MainLayout`
- Componente raiz que organiza toda a estrutura
- Gerencia o layout responsivo
- Suporta scroll com ScrollView

### `Hero`
- Seção inicial com título e descrição
- Fontes dinâmicas baseadas no tamanho da tela

### `MenuSection`
- Seção reutilizável para produto e bebida
- Picker customizado com estilos responsivos
- Preview card integrada

### `PreviewCard`
- Mostra imagem do produto/bebida
- Badge com preço
- Totalmente responsivo

### `SummaryCard` e `TotalCard`
- Exibição de resumos do pedido
- Cores temáticas diferentes
- Padding dinâmico

### `ConfirmButton`
- Botão de ação principal
- Tamanho e padding responsivos

### `BackgroundOrbs`
- Efeito visual de orbs no fundo
- Redimensiona em telas pequenas

## 📐 Responsividade

### Breakpoints Implementados
- **isSmall**: width < 480px (telefones pequenos)
- **isMedium**: 480px ≤ width < 768px (telefones grandes)
- **isLarge**: 768px ≤ width < 1024px (tablets)
- **isXLarge**: width ≥ 1024px (desktops)

### Propriedades que Escalam
- Font sizes
- Padding e margin
- Border radius
- Image heights
- Heights de inputs

## 🎨 Sistema de Cores

Todas as cores centralizadas em `colors.ts`:
- Backgrounds
- Texts (primary, secondary, muted, dark)
- Accents (primary, secondary, success)
- Borders

## 🔧 Hook useResponsive()

```typescript
const { 
  width, height,
  isSmall, isMedium, isLarge, isXLarge,
  isMobile, isTablet, isDesktop 
} = useResponsive();
```

## 📱 Vantagens da Arquitetura

✅ **Componentização**: Cada componente tem responsabilidade única
✅ **Reusabilidade**: Componentes reutilizáveis em diferentes contextos
✅ **Responsividade**: Funciona perfeitamente em todos os tamanhos
✅ **Manutenibilidade**: Mudanças centralizadas em styles e constants
✅ **Escalabilidade**: Fácil adicionar novos componentes
✅ **Type Safety**: TypeScript em todo o projeto

## 🚀 Como Usar

```typescript
import { useMenu } from './src/hooks/useMenu';
import { MainLayout } from './src/components/MainLayout';

export default function App() {
  const { /* ... */ } = useMenu();
  
  return <MainLayout {/* ... */} />;
}
```

## 🎯 Próximas Melhorias Possíveis

- [ ] Temas dark/light
- [ ] Animações de transição
- [ ] Testes unitários
- [ ] Mais opções de bebidas/produtos
- [ ] Histórico de pedidos
- [ ] Integração com API backend
