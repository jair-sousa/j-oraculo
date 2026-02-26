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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Digite sua pergunta..."
        className="border rounded p-3 resize-none"
        rows={3}
        disabled={isLoading}
      />

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? "Consultando..." : "Perguntar"}
        </button>

        <button
          type="button"
          onMouseDown={handleVoiceInput}
          onMouseUp={stop}
          onMouseLeave={stop}
          disabled={isLoading}
          className="border py-2 px-4 rounded"
        >
          {isRecording ? "Gravando..." : "Falar"}
        </button>
      </div>
    </form>
  );
}
