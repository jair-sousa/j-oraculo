"use client";

import { motion, AnimatePresence } from "framer-motion";

type OraclePresenceProps = {
  isLoading: boolean;
  hasResponse: boolean;
};

/**
 * Representação visual da consciência do Oráculo.
 */
export function OraclePresence({
  isLoading,
  hasResponse,
}: OraclePresenceProps) {

  const state =
    isLoading
      ? "interpreting"
      : hasResponse
      ? "revealed"
      : "idle";

  return (
    <div className="flex flex-col items-center justify-center gap-4">

      <motion.div
        key={state}
        animate={
          state === "interpreting"
            ? { scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }
            : state === "revealed"
            ? { scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }
            : { scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }
        }
        transition={{
          duration: state === "idle" ? 4 : 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          w-32
          h-32
          rounded-full
          bg-indigo-400/20
          blur-2xl
        "
      />

      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-zinc-400 tracking-wide"
        >
          {state === "idle" && "O Oráculo aguarda"}
          {state === "interpreting" && "Interpretando intenção..."}
          {state === "revealed" && "A revelação manifesta-se"}
        </motion.span>
      </AnimatePresence>

    </div>
  );
}
