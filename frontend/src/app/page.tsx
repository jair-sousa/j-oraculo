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
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-10">

        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            J_Oráculo
          </h1>

          <p className="text-sm text-zinc-400">
            Faça uma pergunta e receba uma reflexão do Oráculo.
          </p>
        </header>

        {/* Input Surface */}
        <section
          className="
            bg-zinc-900
            border border-zinc-800
            rounded-2xl
            p-6
            shadow-xl
            transition-all
            duration-300
            hover:border-zinc-700
          "
        >
          <OracleForm onSubmit={ask} isLoading={isLoading} />
        </section>

        {/* Response */}
        {(currentAnswer || error) && (
          <section
            className="
              bg-zinc-900
              border border-zinc-800
              rounded-2xl
              p-6
              shadow-lg
              transition-all
              duration-300
              hover:border-zinc-700
            "
          >
            <OracleResponse
              answer={currentAnswer}
              error={error}
            />
          </section>
        )}

        {/* History */}
        {interactions.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-sm font-medium text-zinc-400">
              Histórico
            </h2>

            <div
              className="
                bg-zinc-900
                border border-zinc-800
                rounded-2xl
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:border-zinc-700
              "
            >
              <OracleHistoryList interactions={interactions} />
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
