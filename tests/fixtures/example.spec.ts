import fixture from "./fixture";
import loginContext from "./setLoginContext";

fixture("say hello", async ({ whatYouSay }) => {
  console.log("Hello, Playwright!");
});

fixture("say where is my candle", async ({}) => {
  console.log("Where is my candle?");
});

fixture("say goodbye", async ({}) => {
  console.log("Goodbye, Playwright!");
});

loginContext("login and say hello", async ({ loginFixture }) => {
  console.log("Hello after login fixture!");
});
