"use client";

import { useState } from "react";
import { oracleService } from "../services/oracle.service";
import type { Interaction } from "../types/interaction.type";

/**
 * Representa o estado interno controlado pelo hook useOracle.
 */
type UseOracleState = {
  /**
   * Lista de interações realizadas durante a sessão atual.
   */
  interactions: Interaction[];

  /**
   * Última resposta retornada pelo Oráculo.
   */
  currentAnswer: string | null;

  /**
   * Indica se uma requisição está em andamento.
   */
  isLoading: boolean;

  /**
   * Mensagem de erro, caso a requisição falhe.
   */
  error: string | null;
};

/**
 * Hook responsável por orquestrar toda a lógica da feature Oráculo.
 *
 * Responsabilidades:
 * - Controlar estado de loading
 * - Controlar estado de erro
 * - Gerenciar histórico em memória
 * - Encapsular chamada ao serviço
 * - Preparar ponto de integração com analytics
 *
 * Este hook NÃO:
 * - Realiza chamadas HTTP diretamente
 * - Manipula elementos de UI
 * - Contém lógica de apresentação
 *
 * Fluxo arquitetural:
 * UI → Hook → Service → API Layer → Backend
 */
export function useOracle() {
  const [state, setState] = useState<UseOracleState>({
    interactions: [],
    currentAnswer: null,
    isLoading: false,
    error: null,
  });

  /**
   * Envia uma pergunta ao backend e atualiza o estado
   * com a resposta recebida.
   *
   * @param question Texto da pergunta enviada pelo usuário
   */
  async function ask(question: string): Promise<void> {
    if (!question.trim()) return;

    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      const response = await oracleService.ask({
        pergunta: question,
      });

      const newInteraction: Interaction = {
        id: crypto.randomUUID(),
        question,
        answer: response.resposta,
        createdAt: new Date(),
      };

      setState((prev) => ({
        interactions: [newInteraction, ...prev.interactions],
        currentAnswer: response.resposta,
        isLoading: false,
        error: null,
      }));

      /**
       * Ponto reservado para integração com ferramenta de analytics.
       * Exemplo:
       * window.umami?.track("ask_oracle");
       */

    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : "Erro inesperado",
      }));
    }
  }

  /**
   * Limpa o histórico de interações da sessão atual.
   */
  function clearHistory(): void {
    setState((prev) => ({
      ...prev,
      interactions: [],
    }));
  }

  return {
    interactions: state.interactions,
    currentAnswer: state.currentAnswer,
    isLoading: state.isLoading,
    error: state.error,
    ask,
    clearHistory,
  };
}
