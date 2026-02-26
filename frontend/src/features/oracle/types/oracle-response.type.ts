/**
 * Representa a resposta de sucesso retornada pelo backend.
 */
export type OracleResponse = {
  resposta: string;
};

/**
 * Representa um possível erro retornado pela API.
 */
export type OracleErrorResponse = {
  erro: string;
};
