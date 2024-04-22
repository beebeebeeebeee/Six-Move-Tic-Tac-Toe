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
        width: "30vw",
        height: "30vw",
        lineHeight: "30vw",
        textAlign: "center",
        fontSize: "20vw",
        border: "1px solid #000",
        display: "inline-block",
        color: colorful
          ? "red"
          : hoverEnabled && hover && value == null
          ? "#b7b7b7"
          : "black",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {value ?? (hoverEnabled && hover ? player : "\u00a0\u00a0")}
    </div>
  );
}
