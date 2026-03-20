import { apiFetch } from './api'

/**
 * Interface que representa um produto.
 */
export interface Produto {
  id: string
  nome: string
  preco: number
  lojaId: string
}

/**
 * Serviço responsável por operações
 * relacionadas aos produtos.
 */
export const produtoService = {
  /**
   * Busca todos os produtos de uma loja
   */

  async getProductsByStore(storeId: string): Promise<Produto[]> {
    const response = await apiFetch<any>(`/stores/${storeId}/products`)

    return response.produtos || response.products || response
  },
  /**
   * Cria um produto
   */
  async createProduto(product: Omit<Produto, 'id'>): Promise<Produto> {
    const response = await apiFetch<{ produto: Produto }>('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    })

    return response.produto
  },

  /**
   * Atualiza um produto
   */
  async updateProduto(id: string, product: Partial<Produto>): Promise<Produto> {
    const response = await apiFetch<any>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    })

    return response.produto ?? response
  },

  /**
   * Remove um produto
   */
  async deleteProduto(id: string): Promise<void> {
    return apiFetch(`/products/${id}`, {
      method: 'DELETE',
    })
  },
}
