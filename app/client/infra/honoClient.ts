import type { AppType } from "@/server";
import { hc } from "hono/client";

const client = hc<AppType>("/");
export default client;
