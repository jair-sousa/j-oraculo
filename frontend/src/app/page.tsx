"use client";

import { useOracle } from "@/features/oracle/hooks/useOracle";
import { OracleForm } from "@/features/oracle/components/OracleForm";
import { OracleResponse } from "@/features/oracle/components/OracleResponse";
import { OracleHistoryList } from "@/features/oracle/components/OracleHistoryList";

/**
 * Página principal.
 *
 * Responsável por:
 * - Instanciar o hook da feature
 * - Compor os componentes
 * - Orquestrar fluxo de dados
 *
 * Não contém regra de negócio.
 */
export default function HomePage() {
  const {
    ask,
    isLoading,
    currentAnswer,
    error,
    interactions,
  } = useOracle();

  return (
    <main className="max-w-2xl mx-auto p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">J_Oráculo</h1>

      <OracleForm onSubmit={ask} isLoading={isLoading} />

      <OracleResponse answer={currentAnswer} error={error} />

      <OracleHistoryList interactions={interactions} />
    </main>
  );
}
