import gamesRepository from "../repository/games-repository";
import { Game } from "../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: Game) {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" };
  }

  gamesRepository.createGame(game);
}

function gameAlreadyExists(game: Game): Promise<boolean> {
  return gamesRepository.getGameByTitleAndPlatform(game);
}

const gamesService = {
  getGames,
  createGame,
};

export default gamesService;
