import { api } from "@/lib/api";
import type { OracleRequest } from "../types/oracle-request.type";
import type { OracleResponse } from "../types/oracle-response.type";

/**
 * Serviço responsável por encapsular a comunicação
 * com os endpoints relacionados ao Oráculo.
 *
 * Nenhum componente deve chamar a API diretamente.
 * Toda comunicação deve passar por esta camada.
 */
export const oracleService = {
  /**
   * Envia uma pergunta ao backend e retorna a resposta do Oráculo.
   *
   * @param payload Dados da pergunta
   * @returns Resposta do Oráculo
   */
  async ask(payload: OracleRequest): Promise<OracleResponse> {
    return api<OracleResponse>("/perguntar", {
      method: "POST",
      body: payload,
    });
  },
};
