import { connection } from "../db/config";
import { Game } from "../protocols/game-protocol";

async function getGames(): Promise<Game[]> {
  return (
    await connection.query<Game>(`
    SELECT title, platform FROM games;
  `)
  ).rows;
}

async function createGame(game: Game): Promise<void> {
  const { title, platform } = game;

  await connection.query<Game>(
    `
    INSERT INTO games (title, platform) VALUES ($1, $2);
  `,
    [title, platform]
  );
}

async function getGameByTitleAndPlatform(game: Game): Promise<boolean> {
  const { title, platform } = game;

  return (
    (
      await connection.query(
        `
    SELECT 1 FROM games WHERE (title=$1 AND platform=$2);
  `,
        [title, platform]
      )
    ).rowCount > 0
  );
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
