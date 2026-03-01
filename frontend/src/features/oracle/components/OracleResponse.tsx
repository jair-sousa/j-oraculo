"use client";

import { motion } from "framer-motion";

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
 * OracleResponse
 * ------------------------------------------------------------------
 * Responsável por exibir a revelação gerada pelo J-Oráculo.
 *
 * Nesta versão, a resposta não surge de forma imediata.
 * Ela é apresentada através de uma animação de manifestação,
 * reforçando a continuidade cognitiva da experiência.
 *
 * Responsabilidades:
 * - Renderizar resposta atual
 * - Renderizar erro quando presente
 * - Aplicar animação de surgimento
 *
 * Este componente não:
 * - Controla estado
 * - Executa requisições
 * - Conhece regras de negócio
 */
export function OracleResponse({
  answer,
  error,
}: OracleResponseProps) {

  /**
   * Renderização de erro.
   */
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          mt-4
          p-4
          border
          border-red-500
          rounded
          text-red-400
        "
      >
        {error}
      </motion.div>
    );
  }

  /**
   * Nenhuma resposta disponível.
   */
  if (!answer) return null;

  /**
   * Manifestação da resposta do Oráculo.
   */
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        mt-4
        p-4
        border
        border-zinc-700
        rounded
      "
    >
      <p className="leading-relaxed whitespace-pre-line text-zinc-200">
        {answer}
      </p>
    </motion.div>
  );
}

