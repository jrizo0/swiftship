import { Hono } from "hono";

const app = new Hono().get("/cronjobs", async (c) => {
  return c.json({ data: "cronjob executed" });
});

export default app;
