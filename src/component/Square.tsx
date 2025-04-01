import { useState } from "react";
import { Player } from "../entity";

export function Square(props: {
  colorful: boolean;
  value: Player;
  player: Player;
  hoverEnabled: boolean;
  onClick: () => void;
}) {
  const { colorful, value, player, hoverEnabled, onClick } = props;

  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "min(4rem, 8vw)",
        border: "1px solid #e2e8f0",
        backgroundColor: "white",
        cursor: "pointer",
        transition: "background-color 0.2s",
        color: colorful
          ? "#e53e3e"
          : hoverEnabled && hover && value == null
          ? "#e2e8f0"
          : "#1a1a1a",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {value ?? (hoverEnabled && hover ? player : "\u00a0")}
    </div>
  );
}
