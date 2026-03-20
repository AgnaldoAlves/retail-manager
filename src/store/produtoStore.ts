import { create } from 'zustand'
import { produtoService, Produto } from '../services/produtoService'

/**
 * define a estrutura do estado de produtos
 */
interface ProdutoState {
  produtos: Produto[]
  loading: boolean

  fetchProdutos: (lojaId: string) => Promise<void>
  addProduto: (produto: Omit<Produto, 'id'>) => Promise<void>
  deleteProduto: (id: string) => Promise<void>
  updateProduto: (id: string, data: Partial<Produto>) => Promise<void>
}

/**
 * store global de produtos
 *
 * aqui ficam os produtos da loja selecionada
 * e as ações que mexem nesses dados
 */
export const useProdutoStore = create<ProdutoState>((set) => ({
  /**
   * lista de produtos
   */
  produtos: [],

  /**
   * controla loading na tela
   */
  loading: false,

  /**
   * busca produtos da loja
   */
  fetchProdutos: async (lojaId) => {
    set({ loading: true })

    const produtos = await produtoService.getProductsByStore(lojaId)

    set({
      produtos,
      loading: false,
    })
  },

  /**
   * cria um produto novo
   */
  addProduto: async (produto) => {
    const novoProduto = await produtoService.createProduto(produto)

    set((state) => ({
      produtos: [...state.produtos, novoProduto],
    }))
  },

  updateProduto: async (id, produto) => {
    const atualizado = await produtoService.updateProduto(id, produto)

    set((state) => ({
      produtos: state.produtos.map((p) => (p.id === id ? atualizado : p)),
    }))
  },

  /**
   * remove produto
   */
  deleteProduto: async (id) => {
    await produtoService.deleteProduto(id)

    set((state) => ({
      produtos: state.produtos.filter((p) => p.id !== id),
    }))
  },
}))
