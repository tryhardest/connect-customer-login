const fs = require("fs");
const Koa = require("koa");
const app = new Koa();

const PORT = process.env.PORT || 5000

const CONSOLE_NAME = process.env.CUSTOMER_CONSOLE_NAME || "Fake customer login"
const CONSOLE_URL = process.env.CUSTOMER_CONSOLE_URL || "http://customer.localhost:3000"

const HTML = fs
  .readFileSync("./index.html")
  .toString()
  .replace(/{{CUSTOMER_CONSOLE_NAME}}/g, CONSOLE_NAME)
  .replace(/{{CUSTOMER_CONSOLE_URL}}/g, CONSOLE_URL);

app.use(ctx => {
  ctx.body = HTML;
});

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`)
});
