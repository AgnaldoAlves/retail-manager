import { create } from 'zustand'
import { lojaService, Loja } from '../services/lojaService'

/**
 * estrutura do estado da store
 * aqui definimos o que essa store controla
 */
interface LojaState {
  lojas: Loja[]
  loading: boolean

  fetchLojas: () => Promise<void>
  addLoja: (loja: Omit<Loja, 'id'>) => Promise<void>
  deleteLoja: (id: string) => Promise<void>
  updateLoja: (id: string, data: Partial<Loja>) => Promise<void>
}

/**
 * store global de lojas usando Zustand
 *
 * a ideia é centralizar aqui:
 * - dados
 * - loading
 * - ações que mexem na API
 *
 * assim as telas ficam mais simples
 */
export const useLojaStore = create<LojaState>((set) => ({
  /**
   * lista de lojas carregadas da API
   */
  lojas: [],

  /**
   * usado para controlar loading na tela
   */
  loading: false,

  /**
   * busca todas as lojas no backend
   */
  fetchLojas: async () => {
    // ativa loading
    set({ loading: true })

    const lojas = await lojaService.getLojas()

    // salva no estado
    set({
      lojas,
      loading: false,
    })
  },

  /**
   * cria uma nova loja
   */
  addLoja: async (loja) => {
    const novaLoja = await lojaService.createLoja(loja)

    // adiciona na lista atual
    set((state) => ({
      lojas: [...state.lojas, novaLoja],
    }))
  },

  updateLoja: async (id, data) => {
    const lojaAtualizada = await lojaService.updateLoja(id, data)

    set((state) => ({
      lojas: state.lojas.map((loja) =>
        loja.id === id ? lojaAtualizada : loja,
      ),
    }))
  },

  /**
   * remove loja
   */
  deleteLoja: async (id) => {
    await lojaService.deleteLoja(id)

    set((state) => ({
      lojas: state.lojas.filter((loja) => loja.id !== id),
    }))
  },
}))
