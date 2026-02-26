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
 * Formulário principal da feature.
 *
 * Responsável por:
 * - Capturar pergunta digitada
 * - Disparar envio manual
 * - Integrar reconhecimento de voz
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Digite sua pergunta..."
        rows={3}
        disabled={isLoading}
        className="
          w-full
          bg-zinc-950
          border border-zinc-800
          rounded-xl
          p-4
          text-sm
          resize-none
          outline-none
          transition-all
          duration-200
          focus:border-zinc-600
          focus:ring-1
          focus:ring-zinc-700
          disabled:opacity-60
        "
      />

      <div className="flex justify-center gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="
            min-w-[120px]
            px-5 py-2
            bg-white
            text-black
            rounded-lg
            font-medium
            cursor-pointer
            hover:bg-zinc-200
            active:scale-95
            transition-all
            duration-150
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {isLoading ? "Consultando..." : "Perguntar"}
        </button>

        <button
          type="button"
          onMouseDown={handleVoiceInput}
          onMouseUp={stop}
          onMouseLeave={stop}
          disabled={isLoading}
          className="
            min-w-[120px]
            px-5 py-2
            border border-zinc-700
            rounded-lg
            cursor-pointer
            hover:bg-zinc-800
            active:scale-95
            transition-all
            duration-150
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {isRecording ? "Gravando..." : "Falar"}
        </button>
      </div>

    </form>
  );
}
