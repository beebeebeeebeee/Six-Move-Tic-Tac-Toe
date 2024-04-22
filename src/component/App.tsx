import { Player } from "../entity";
import { useApp } from "./AppProvider.tsx";

export function App() {
  const { score, winner, nextPlayer, renderSquare, reset } = useApp();

  return (
    <div
      style={{
        fontSize: "1.5rem",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      <div>
        <div>
          <div>X vs O</div>
          <div>
            {score[Player.X]} : {score[Player.O]}
          </div>
        </div>
        <hr />
        {winner ? (
          <div
            style={{
              color: "red",
            }}
          >
            Winner: {winner.winner}!
          </div>
        ) : (
          <div>Next player: {nextPlayer}</div>
        )}
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="card">
        <button
          onClick={() => reset()}
          style={{
            fontSize: "1.5rem",
            padding: "0.5rem 1rem",
            margin: "1rem",
            border: "1px solid #000",
            borderRadius: "0.5rem",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
