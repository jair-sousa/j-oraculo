/**
 * Propriedades esperadas pelo componente OracleResponse.
 */
type OracleResponseProps = {
  /**
   * Última resposta retornada pelo Oráculo.
   */
  answer: string | null;

  /**
   * Mensagem de erro, caso exista.
   */
  error: string | null;
};

/**
 * Componente responsável por exibir o resultado da consulta
 * ou mensagem de erro.
 *
 * Responsabilidades:
 * - Renderizar resposta atual
 * - Renderizar erro quando presente
 *
 * Este componente não:
 * - Controla estado
 * - Executa requisições
 * - Conhece regras de negócio
 */
export function OracleResponse({ answer, error }: OracleResponseProps) {
  if (error) {
    return (
      <div className="mt-4 p-4 border border-red-500 rounded text-red-600">
        {error}
      </div>
    );
  }

  if (!answer) return null;

  return (
    <div className="mt-4 p-4 border rounded">
      <p>{answer}</p>
    </div>
  );
}
