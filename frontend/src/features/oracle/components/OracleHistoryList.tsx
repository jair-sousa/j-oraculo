import type { Interaction } from "../types/interaction.type";
import { OracleHistoryItem } from "./OracleHistoryItem";

/**
 * Lista todas as interações realizadas na sessão.
 */
type Props = {
  interactions: Interaction[];
};

export function OracleHistoryList({ interactions }: Props) {
  if (interactions.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {interactions.map((interaction) => (
        <OracleHistoryItem
          key={interaction.id}
          interaction={interaction}
        />
      ))}
    </div>
  );
}
