import { Player } from "../entity";
import { useApp } from "./AppProvider.tsx";

export function App() {
  const { score, winner, nextPlayer, renderSquare, reset } = useApp();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <div
          style={{
            marginBottom: "1.5rem",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "0.5rem",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#1a1a1a",
              marginBottom: "0.5rem",
            }}
          >
            X vs O
          </div>
          <div
            style={{
              fontSize: "1.5rem",
              color: "#4a5568",
            }}
          >
            {score[Player.X]} : {score[Player.O]}
          </div>
        </div>

        {winner ? (
          <div
            style={{
              color: "#e53e3e",
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              padding: "0.5rem",
              backgroundColor: "#fff5f5",
              borderRadius: "0.5rem",
            }}
          >
            Winner: {winner.winner}!
          </div>
        ) : (
          <div
            style={{
              color: "#4a5568",
              fontSize: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            Next player: {nextPlayer}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.5rem",
            marginBottom: "1.5rem",
            aspectRatio: "1",
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto 1.5rem auto",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} style={{ width: "100%", aspectRatio: "1" }}>
              {renderSquare(index)}
            </div>
          ))}
        </div>

        <button
          onClick={() => reset()}
          style={{
            width: "100%",
            fontSize: "1.25rem",
            padding: "0.75rem",
            border: "none",
            borderRadius: "0.5rem",
            backgroundColor: "#4299e1",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.2s",
            fontWeight: "600",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#3182ce";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#4299e1";
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
