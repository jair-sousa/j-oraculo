"use client";

import { useState, FormEvent } from "react";
import { useSpeechRecognition } from "@/features/oracle/hooks/useSpeechRecognition";

/**
 * Propriedades do OracleForm.
 */
type OracleFormProps = {
  onSubmit: (question: string) => Promise<void>;
  isLoading: boolean;
};

/**
 * Interface ritualística de consulta ao J-Oráculo.
 *
 * Representa o ponto de interação entre usuário
 * e a consciência interpretativa do sistema.
 */
export function OracleForm({ onSubmit, isLoading }: OracleFormProps) {
  const [question, setQuestion] = useState<string>("");

  const { start, stop, isRecording } = useSpeechRecognition();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!question.trim()) return;

    await onSubmit(question);
    setQuestion("");
  }

  async function handleVoiceInput() {
    try {
      start(async (text: string) => {
        setQuestion(text);
        await onSubmit(text);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

      {/* Orientação Cognitiva */}
      <p className="text-center text-xs text-zinc-400 leading-relaxed max-w-md mx-auto">
        O Oráculo não oferece respostas objetivas.
        Ele observa intenções ocultas nas perguntas.
      </p>

      {/* Campo de Consulta */}
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Revele sua inquietação..."
        rows={3}
        disabled={isLoading}
        className="
          w-full
          bg-zinc-900/70
          backdrop-blur-sm
          border border-zinc-700
          rounded-xl
          p-4
          text-sm
          text-zinc-200
          placeholder:text-zinc-500
          resize-none
          outline-none
          transition-all
          duration-300
          focus:border-indigo-400
          focus:ring-1
          focus:ring-indigo-400/40
          disabled:opacity-60
        "
      />

      {/* Ações */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-3
        "
      >

        {/* Ação principal */}
        <button
          type="submit"
          disabled={isLoading}
          className="
            w-full
            sm:w-auto
            sm:min-w-[180px]
            px-6
            py-3
            bg-white
            text-black
            rounded-lg
            font-medium
            cursor-pointer
            transition-all
            duration-200
            hover:bg-zinc-200
            active:scale-95
            disabled:opacity-50
            disabled:cursor-not-allowed
            shadow-md
          "
        >
          {isLoading
            ? "Interpretando intenção..."
            : "Consultar o Oráculo"}
        </button>

        {/* Ação secundária */}
        <button
          type="button"
          onMouseDown={handleVoiceInput}
          onMouseUp={stop}
          onMouseLeave={stop}
          disabled={isLoading}
          className="
            w-full
            sm:w-auto
            sm:min-w-[160px]
            px-6
            py-3
            border border-zinc-600
            rounded-lg
            cursor-pointer
            transition-all
            duration-200
            hover:bg-zinc-800
            active:scale-95
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {isRecording
            ? "O Oráculo escuta..."
            : "Sussurrar"}
        </button>

      </div>

      {/* Presença silenciosa */}
      <span className="text-center text-[11px] text-zinc-500">
        O Oráculo aguarda.
      </span>

    </form>
  );
}
