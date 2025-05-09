import { Hono } from "hono";

const routes = new Hono().get("/hello", (c) =>
  c.json({ message: "Hello from API" })
);

export default routes;
