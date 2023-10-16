import GameSavingLoader from "../GameSavingLoader";

test("Проверка работы GameSavingLoader - success", async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };
  const received = await GameSavingLoader.load();
  expect(received).toEqual(expected); 
});

test("Проверка работы GameSavingLoader - fail", async () => {
  // const received = await GameSavingLoader.load();
  await expect(Promise.reject(new Error("fail"))).rejects.toThrow("fail");
});