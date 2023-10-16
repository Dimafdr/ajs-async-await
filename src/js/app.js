import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const playerGameSaving = await GameSavingLoader.load();
    console.log(playerGameSaving);
  } catch (error) {
    console.log(error);
  }
})();
