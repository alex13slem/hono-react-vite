import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import api from "./api";
import entry from "./entry";

const app = new Hono()
  .use("/static/*", serveStatic({ root: "./dist/" }))
  .route("api", api)
  .get("*", (c) => c.html(entry({ title: "Hono React Vite" })));

export default app;
export type AppType = typeof app;

if (import.meta.env.PROD) {
  serve(
    {
      fetch: app.fetch,
      port: 31313,
    },
    (info) => {
      console.log(`Application is running on ${info.port}`);
    }
  );
}
