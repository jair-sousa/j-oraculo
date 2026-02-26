/**
 * Base URL da API.
 * 
 * Deve ser definida no arquivo `.env.local` como:
 * NEXT_PUBLIC_API_URL=https://sua-api.com
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error("Environment variable NEXT_PUBLIC_API_URL is not defined.");
}

/**
 * Opções aceitas pela função `api`.
 */
export type ApiRequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: HeadersInit;
};

/**
 * Cliente HTTP genérico para comunicação com o backend.
 *
 * Responsabilidades:
 * - Centralizar base URL
 * - Padronizar headers
 * - Serializar body automaticamente
 * - Tratar erros HTTP
 * - Retornar resposta tipada
 *
 * @template T Tipo esperado da resposta
 * @param endpoint Caminho da rota (ex: "/perguntar")
 * @param options Configuração da requisição
 * @returns Promise<T>
 *
 * @throws Error quando a requisição falha (status não 2xx)
 */
export async function api<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { method = "GET", body, headers } = options;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    let errorMessage = "Unexpected API error";

    try {
      const errorData = await response.json();
      errorMessage =
        errorData?.erro ||
        errorData?.message ||
        errorMessage;
    } catch {
      // Caso a resposta não seja JSON, mantém mensagem padrão
    }

    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
}
