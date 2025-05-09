import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./dist/" }));

app.get("/api/hello", (c) => c.json({ message: "Hello from server" }));

app.get("*", (c) => {
  return c.html(`
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        ${
          import.meta.env.PROD
            ? `<script type="module" src="/static/client.js"></script>`
            : `<script type="module" src="/app/client/index.tsx"></script>`
        }
      </head>
      <body><div id="root"></div></body>
    </html>
  `);
});

export default app;

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
