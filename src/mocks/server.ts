import { createServer, Model, hasMany, belongsTo } from 'miragejs'

export function makeServer() {
  createServer({
    models: {
      loja: Model.extend({
        produtos: hasMany(),
      }),

      produto: Model.extend({
        loja: belongsTo(),
      }),
    },

    routes() {
      // todas as rotas começam com /api
      this.namespace = 'api'

      /**
       * LISTAR STORES
       *
       * Retorna todas as lojas
       * com a quantidade de produtos cadastrados
       */
      this.get('/stores', (schema: any) => {
        const lojas = schema.lojas.all().models

        return lojas.map((loja: any) => {
          const produtos = schema.produtos.where({
            lojaId: loja.id,
          }).models

          return {
            id: loja.id,
            nome: loja.nome,
            cidade: loja.cidade,
            estado: loja.estado,
            totalProdutos: produtos.length,
          }
        })
      })

      /**
       * PRODUTOS DA LOJA
       */
      this.get('/stores/:id/products', (schema: any, request: any) => {
        const lojaId = request.params.id

        return schema.produtos.where({
          lojaId,
        })
      })

      /**
       * CRIAR NOVA LOJA
       */
      this.post('/stores', (schema: any, request: any) => {
        const data = JSON.parse(request.requestBody)

        return schema.lojas.create(data)
      })

      /**
       * ATUALIZAR LOJA
       */
      this.put('/stores/:id', (schema: any, request: any) => {
        const id = request.params.id
        const data = JSON.parse(request.requestBody)

        const loja = schema.lojas.find(id)

        return loja.update(data)
      })

      /**
       * REMOVER LOJA
       */
      this.delete('/stores/:id', (schema: any, request: any) => {
        const id = request.params.id

        const loja = schema.lojas.find(id)

        return loja.destroy()
      })

      /** #####  PRODUTOS #####
       *
       * CRIAR PRODUTO
       */
      this.post('/products', (schema: any, request: any) => {
        const data = JSON.parse(request.requestBody)

        return schema.produtos.create(data)
      })

      /**
       * REMOVER PRODUTO
       */
      this.delete('/products/:id', (schema: any, request: any) => {
        const id = request.params.id

        const produto = schema.produtos.find(id)

        return produto.destroy()
      })
      /**
       * ATUALIZAR PRODUTO
       */
      this.put('/products/:id', (schema: any, request: any) => {
        const id = request.params.id
        const data = JSON.parse(request.requestBody)

        const produto = schema.produtos.find(id)

        return produto.update(data)
      })
    },

    seeds(server: any) {
      const loja1 = server.create('loja', {
        nome: 'Loja Centro',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
      })

      const loja2 = server.create('loja', {
        nome: 'Loja Shopping',
        cidade: 'São Paulo',
        estado: 'SP',
      })

      server.create('produto', {
        nome: 'Notebook',
        preco: 3500,
        lojaId: loja1.id,
      })

      server.create('produto', {
        nome: 'Mouse',
        preco: 120,
        lojaId: loja1.id,
      })

      server.create('produto', {
        nome: 'Teclado',
        preco: 200,
        lojaId: loja2.id,
      })
    },
  })
}
