export interface IGame {
  gameDescription: string;
  gameName: string;
  gamePlayed: number | null;
  gameRating: number;
  id: number;
  imageGame: string;
  slug: string;
  type: string;
  url: string | null;
}
