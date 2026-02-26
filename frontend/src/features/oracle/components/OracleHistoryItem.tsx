import type { Interaction } from "../types/interaction.type";

/**
 * Exibe uma única interação do histórico.
 */
type Props = {
  interaction: Interaction;
};

export function OracleHistoryItem({ interaction }: Props) {
  return (
    <div className="border rounded p-4">
      <p className="font-semibold">Pergunta:</p>
      <p className="mb-2">{interaction.question}</p>

      <p className="font-semibold">Resposta:</p>
      <p>{interaction.answer}</p>
    </div>
  );
}
