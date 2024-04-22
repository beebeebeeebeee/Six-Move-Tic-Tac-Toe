import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getOpponent, Player } from "../entity";
import { calculateWinner } from "../function";
import { Square } from "./Square.tsx";

export type AppContextValue = {
  winner: { winner: Player; row: number[] } | null;
  score: { X: number; O: number };
  nextPlayer: Player;
  renderSquare: (i: number) => JSX.Element;
  reset: () => void;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [score, setScore] = useState<{
    X: number;
    O: number;
  }>({
    X: 0,
    O: 0,
  });
  const [history, setHistory] = useState<number[]>([]);
  const [squares, setSquares] = useState<(Player | null)[]>(
    Array(9).fill(null)
  );
  const [nextPlayer, setNextPlayer] = useState<Player>(Player.X);

  const winner = useMemo(() => calculateWinner(squares), [squares]);

  useEffect(() => {
    if (winner != null) {
      setScore((score) => {
        return {
          ...score,
          [winner.winner]: score[winner.winner] + 1,
        };
      });
    }
  }, [winner]);

  const renderSquare = useCallback(
    (i: number) => {
      return (
        <Square
          colorful={
            winner
              ? winner.row.includes(i)
              : history.length >= 6 && history[0] === i
          }
          value={squares[i]!}
          player={nextPlayer}
          hoverEnabled={winner == null}
          onClick={() => {
            if (squares[i] || winner) return;
            const nextSquares = squares.slice();
            nextSquares[i] = nextPlayer;
            setHistory((history) => {
              if (history.length > 5) {
                const idx = history.shift();
                nextSquares[idx!] = null;
              }
              return [...history, i];
            });
            setSquares(nextSquares);
            setNextPlayer(getOpponent(nextPlayer));
          }}
        />
      );
    },
    [squares, history, nextPlayer, winner]
  );

  const reset = useCallback(() => {
    setSquares(Array(9).fill(null));
    setHistory([]);
    setNextPlayer(Player.X);
  }, []);

  const value = useMemo(
    () => ({
      winner,
      score,
      nextPlayer,
      renderSquare,
      reset,
    }),
    [winner, score, nextPlayer, renderSquare, reset]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }

  return context;
}
