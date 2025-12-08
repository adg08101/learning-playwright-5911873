import fixture from "./fixture";

fixture("say hello", async ({ whatYouSay }) => {
  console.log("Hello, Playwright!");
});

fixture("say where is my candle", async ({}) => {
  console.log("Where is my candle?");
});

fixture("say goodbye", async ({}) => {
  console.log("Goodbye, Playwright!");
});
