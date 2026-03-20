# 🧩 Retail Manager

Aplicativo desenvolvido em **React Native com Expo** para gerenciamento de **lojas e produtos** de uma rede de varejo.

Este projeto foi desenvolvido como parte de um **desafio técnico**.

---

# Funcionalidades

## Lojas

- Listar lojas
- Criar nova loja
- Editar loja
- Excluir loja
- Visualizar quantidade de produtos por loja

## Produtos

- Listar produtos de uma loja
- Criar novo produto
- Editar produto
- Remover produto

---

# Arquitetura

O projeto foi estruturado seguindo separação de responsabilidades:

```
src
  app
  components
  services
  store
  mocks
  constants
```

Fluxo de dados:

```
Screen → Store (Zustand) → Service → Mock API (MirageJS)
```

---

# Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Expo Router
- Zustand
- MirageJS
- Jest
- Testing Library

---

# Como executar

### Instalar dependências

```
npm install
```

### Executar projeto

```
npx expo start
```

### Rodar testes

```
npm test
```

---

# 🧪 Testes

Foram implementados testes unitários utilizando:

- Jest
- Testing Library React Native

---

# 👨‍💻 Autor

Agnaldo Alves Pereira
