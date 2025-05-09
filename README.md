#### A lightweight **runtime-oriented fullstack boilerplate** using:

- ⚡️ [Hono](https://hono.dev/) – ultra-fast web framework for backend/API
- ⚛️ [React](https://react.dev/) – modern frontend SPA
- 🚀 [Vite](https://vitejs.dev/) – build tool with SSR and dev server
- 🔒 [Zod](https://zod.dev/) – runtime validation for API schemas

Ideal for edge deployments or lightweight Node runtimes.

---

## 📁 Project Structure

```

integrations.bso.ae
├─ app
│  ├─ client         # React SPA: pages, layouts, styles
│  └─ server         # Hono server: API routes, SSR HTML
├─ vite.config.ts    # Separate configs for client/server modes
├─ tsconfig.json     # TypeScript configuration
├─ package.json
└─ README.md

```

---

## 🧰 Scripts

```bash
yarn dev           # Start dev server with HMR (client + server)
yarn build         # Build both client and server
yarn build:client  # Build only client
yarn build:server  # Build only server
yarn start         # Run production server (after build)
```

---

## 🛠 Tech Stack

| Layer      | Tech                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| Backend    | [Hono](https://hono.dev/) with Node runtime                                 |
| Frontend   | [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/) |
| Build      | [Vite 6](https://vitejs.dev/) with SSR + dev server plugin                  |
| Validation | [Zod](https://zod.dev/) for runtime schema validation                       |

---

## 🌐 Routes Overview

| Method | Route        | Description                  |
| ------ | ------------ | ---------------------------- |
| GET    | `/`          | Serves SSR HTML + mounts SPA |
| GET    | `/static/*`  | Static assets from `dist/`   |
| GET    | `/api/hello` | Simple test JSON API         |

---

## ✅ Features

- 🧩 Modular file structure
- 🌐 React SPA with client-side routing
- 📦 SSR + asset bundling via Vite
- ⚡ Runtime-focused (no heavy frameworks or servers)
- 🧪 Typed and validated API with Zod
- 🧵 Minimal boilerplate — ready to extend

---

## 🏁 Deployment

You can run it on any Node.js-compatible runtime:

```bash
yarn build
yarn start
```

For edge environments (e.g. Vercel, Cloudflare Workers), adapt the `server/index.ts` export for their platform-specific API (e.g. `fetch` handler).

---

Feel free to fork and build your own integration platform on top!
