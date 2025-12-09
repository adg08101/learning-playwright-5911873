import {
  test as base,
  expect,
} from "@playwright/test";

type LoginContext = {
  loginFixture: string;
};

const loginContext = base.extend<LoginContext>({
  loginFixture: async ({ page, context }, use: any) => {
    // Setup code for the fixture can go here

    const email = "customer@practicesoftwaretesting.com";
    const password = "welcome01";
    const customer01AuthFile = ".auth/customer01_fixture.json";
    const baseURL = "https://practicesoftwaretesting.com/auth/login";

    await page.goto(baseURL);

    await page.getByTestId("email").fill(email);
    await page.getByTestId("password").fill(password);
    await page.getByTestId("login-submit").click();

    await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
    await context.storageState({ path: customer01AuthFile });

    // end of base coding
    await use();
    console.log("Tearing down login fixture with context.");
  },
});

export default loginContext;
