import { renderToString } from 'react-dom/server';

const entry = ({ title }: { title: string }) =>
  renderToString(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {import.meta.env.PROD ? (
          <script type="module" src="/static/client.js"></script>
        ) : (
          <script type="module" src="/app/client/index.tsx"></script>
        )}
        <title>{title}</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>,
  );
export default entry;
