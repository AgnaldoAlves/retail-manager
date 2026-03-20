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

## Screenshots do Aplicativo

### Gestão de Lojas

#### Tela inicial de lojas

![Tela Inicial de lojas](docs/screenshots/Tela Inicial de lojas.png)

#### Busca de lojas

![Busca de lojas](docs/screenshots/Tela fazendo busca d elojas.png)

#### Cadastro de nova loja

![Cadastro de loja](docs/screenshots/Tela de cadastro de nova loja.png)

#### Loja cadastrada com sucesso

![Loja cadastrada](docs/screenshots/Tela com a nova loja cadastrada.png)

#### Alteração de loja

![Alterando loja](docs/screenshots/Alterando loja.png)

---

### Gestão de Produtos

#### Lista de produtos da loja

![Lista de produtos](docs/screenshots/Tela de produtos.png)

#### Busca de produtos

![Busca de produtos](docs/screenshots/Tela de pesquisa de produtos.png)

#### Cadastro de novo produto

![Cadastro de produto](docs/screenshots/Tela de cadastro de novo produto.png)

#### Produto alterado

![Produto alterado](docs/screenshots/Tela de depois que alterou produto.png)

# 👨‍💻 Autor

Agnaldo Alves Pereira
