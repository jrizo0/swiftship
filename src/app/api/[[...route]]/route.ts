import { Hono } from "hono";
import { handle } from "hono/vercel";

import cronjobs from "./routers/cronjobs";
import webhooks from "./routers/webhooks";
import demo from "./routers/demo";

export const runtime = "nodejs";

const app = new Hono().basePath("/api/hono");

const routes = app
  .route("/demo", demo)
  .route("/cronjobs", cronjobs)
  .route("/webhooks", webhooks);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
