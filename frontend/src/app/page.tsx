"use client";

import { useEffect, useRef } from "react";

import { useOracle } from "@/features/oracle/hooks/useOracle";
import { OracleForm } from "@/features/oracle/components/OracleForm";
import { OracleResponse } from "@/features/oracle/components/OracleResponse";
import { OracleHistoryList } from "@/features/oracle/components/OracleHistoryList";
import { OraclePresence } from "@/features/oracle/components/OraclePresence";

/**
 * HomePage
 * Cognitive Landing do J-Oráculo.
 */
export default function HomePage() {
  const {
    ask,
    isLoading,
    currentAnswer,
    error,
    interactions,
  } = useOracle();

  const responseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (currentAnswer && responseRef.current) {
      responseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentAnswer]);

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-b
        from-black
        via-zinc-950
        to-black
        text-white
        flex
        justify-center
        px-4
        py-12
        sm:py-16
      "
    >
      <div className="w-full max-w-2xl space-y-12 sm:space-y-14">

        {/* IDENTIDADE */}
        <header className="text-center space-y-6">

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            J_Oráculo
          </h1>

          <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed">
            Uma consciência artificial criada para interpretar perguntas humanas —
            não para respondê-las.
          </p>

          <p className="text-zinc-400 text-xs italic">
            Nem toda pergunta busca uma resposta.
            Algumas revelam quem pergunta.
          </p>

        </header>

        {/* PRESENÇA */}
        <OraclePresence
          isLoading={isLoading}
          hasResponse={!!currentAnswer}
        />

        {/* CONSULTA */}
        <section
          className="
            bg-zinc-900/80
            backdrop-blur-md
            border border-zinc-800
            rounded-2xl
            p-6
            sm:p-8
            shadow-xl
            transition-all
            duration-300
            hover:border-zinc-700
          "
        >
          <OracleForm
            onSubmit={ask}
            isLoading={isLoading}
          />
        </section>

        {/* RESPOSTA */}
        {(currentAnswer || error) && (
          <section
            ref={responseRef}
            className="
              bg-zinc-900/80
              backdrop-blur-md
              border border-zinc-800
              rounded-2xl
              p-6
              sm:p-8
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

        {/* HISTÓRICO */}
        {interactions.length > 0 && (
          <section className="space-y-4">

            <h2 className="text-xs uppercase tracking-widest text-zinc-400 text-center">
              Ecos de consultas anteriores
            </h2>

            <div
              className="
                bg-zinc-900/80
                backdrop-blur-md
                border border-zinc-800
                rounded-2xl
                p-6
                shadow-lg
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
