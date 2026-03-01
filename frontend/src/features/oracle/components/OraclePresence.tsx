"use client";

import { motion, AnimatePresence } from "framer-motion";

/**
 * OraclePresence
 * ------------------------------------------------------------------
 * Representa visualmente a presença cognitiva do J-Oráculo.
 *
 * Este componente traduz estados da aplicação em comportamento visual,
 * permitindo que o usuário perceba quando o Oráculo:
 *
 * - está aguardando interação
 * - está interpretando uma consulta
 * - manifestou uma resposta
 *
 * Não contém regras de negócio.
 * Não realiza chamadas externas.
 * Atua exclusivamente como camada de experiência (UI State).
 *
 * Localização arquitetural:
 * features/oracle/components
 */

/**
 * Propriedades do componente.
 */
type OraclePresenceProps = {
  /**
   * Indica se o Oráculo está processando uma pergunta.
   */
  isLoading: boolean;

  /**
   * Indica se existe uma resposta já gerada.
   */
  hasResponse: boolean;
};

/**
 * OraclePresence Component
 *
 * Estados cognitivos possíveis:
 *
 * idle
 * - Nenhuma interação ativa.
 * - O Oráculo permanece em estado de espera.
 *
 * interpreting
 * - Uma consulta está sendo processada.
 * - A animação torna-se mais intensa.
 *
 * revealed
 * - Uma resposta foi gerada.
 * - Representa a manifestação da revelação.
 */
export function OraclePresence({
  isLoading,
  hasResponse,
}: OraclePresenceProps) {

  /**
   * Determina o estado cognitivo atual.
   */
  const state =
    isLoading
      ? "interpreting"
      : hasResponse
      ? "revealed"
      : "idle";

  return (
    <div className="flex flex-col items-center justify-center gap-4">

      {/* ========================================================= */}
      {/* Núcleo Visual do Oráculo                                 */}
      {/* ========================================================= */}
      {/* 
        A animação varia conforme o estado cognitivo.
        Utiliza escala e opacidade para simular atividade energética.
      */}
      <motion.div
        key={state}
        animate={
          state === "interpreting"
            ? {
                scale: [1, 1.25, 1],
                opacity: [0.6, 1, 0.6],
              }
            : state === "revealed"
            ? {
                scale: [1, 1.4, 1],
                opacity: [0.8, 1, 0.8],
              }
            : {
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }
        }
        transition={{
          duration:
            state === "idle"
              ? 4
              : state === "interpreting"
              ? 2
              : 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          w-32
          h-32
          rounded-full
          bg-white/15
          blur-2xl
        "
      />

      {/* ========================================================= */}
      {/* Estado Cognitivo Textual                                */}
      {/* ========================================================= */}
      {/* 
        O texto acompanha o estado atual do Oráculo,
        reforçando a percepção de presença ativa.
      */}
      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-zinc-500 tracking-wide"
        >
          {state === "idle" && "O Oráculo aguarda"}
          {state === "interpreting" && "Interpretando intenção..."}
          {state === "revealed" && "A revelação manifesta-se"}
        </motion.span>
      </AnimatePresence>

    </div>
  );
}

