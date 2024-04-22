export enum Player {
  X = "X",
  O = "O",
}

export function getOpponent(player: Player): Player {
  return player === Player.X ? Player.O : Player.X;
}
