/**
 * Base URL da API.
 *
 * Como estamos usando MirageJS,
 * definimos o mesmo prefixo configurado no mock server:
 *
 * this.namespace = 'api'
 *
 * Portanto todas as requisições devem começar com /api
 */
const BASE_URL = '/api'

/**
 * Função utilitária para fazer requisições HTTP.
 *
 * Essa função centraliza chamadas fetch para evitar
 * repetir código em todos os serviços.
 *
 * Ela também facilita futuras melhorias como:
 *
 * - adicionar autenticação
 * - adicionar interceptadores
 * - tratar erros globalmente
 */
export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  /**
   * Faz a requisição HTTP usando fetch
   */
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    /**
     * Define que estamos trabalhando com JSON
     */
    headers: {
      'Content-Type': 'application/json',
    },

    /**
     * Permite sobrescrever opções como:
     * method
     * body
     */
    ...options,
  })

  if (!response.ok) {
    throw new Error('Erro na API')
  }

  if (response.status === 204) {
    return null as T
  }

  return response.json()
}
