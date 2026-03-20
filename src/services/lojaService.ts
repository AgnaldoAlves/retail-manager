import { apiFetch } from './api'

/**
 * Interface que representa uma loja.
 *
 * Ela define a estrutura dos dados que esperamos
 */
export interface Loja {
  id: string
  nome: string
  cidade: string
  estado: string
  totalProdutos?: number
}

/**
 * Serviço responsável por operações
 * relacionadas às lojas.
 *
 * Ele funciona como uma camada entre
 * a UI e a API.
 */
export const lojaService = {
  /**
   * Busca todas as lojas
   */
  /**
   * Busca todas as lojas
   */
  async getLojas(): Promise<Loja[]> {
    const response = await apiFetch<Loja[]>('/stores')

    return response
  },

  /**
   * Cria uma nova loja
   */
  async createLoja(loja: Omit<Loja, 'id'>): Promise<Loja> {
    const response = await apiFetch<{ loja: Loja }>('/stores', {
      method: 'POST',
      body: JSON.stringify(loja),
    })

    return response.loja
  },

  /**
   * Atualiza uma loja existente
   */

  async updateLoja(id: string, store: Partial<Loja>): Promise<Loja> {
    const response = await apiFetch<{ store: Loja }>(`/stores/${id}`, {
      method: 'PUT',
      body: JSON.stringify(store),
    })

    return response.store
  },
  /**
   * Remove uma loja
   */
  async deleteLoja(id: string): Promise<void> {
    return apiFetch(`/stores/${id}`, {
      method: 'DELETE',
    })
  },
}
