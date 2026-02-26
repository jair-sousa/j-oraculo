"use client";

import { useState, useRef } from "react";

/**
 * Estrutura mínima do evento retornado pelo SpeechRecognition.
 */
interface ISpeechRecognitionResultEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

/**
 * Interface mínima da implementação do SpeechRecognition.
 */
interface ISpeechRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: ((event: ISpeechRecognitionResultEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
}

interface ISpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}

declare global {
  interface Window {
    webkitSpeechRecognition?: ISpeechRecognitionConstructor;
  }
}

/**
 * Hook responsável por encapsular o uso da Web Speech API.
 */
export function useSpeechRecognition() {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  function start(onResult: (text: string) => void) {
    if (!window.webkitSpeechRecognition) {
      throw new Error("Reconhecimento de voz não suportado.");
    }

    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "pt-BR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: ISpeechRecognitionResultEvent) => {
      const text = event.results[0][0].transcript;
      onResult(text);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  }

  function stop() {
    recognitionRef.current?.stop();
    setIsRecording(false);
  }

  return {
    start,
    stop,
    isRecording,
  };
}
