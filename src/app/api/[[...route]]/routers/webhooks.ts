import { Hono } from "hono";

const app = new Hono().get("/stripe", async (c) => {
  return c.json({ data: "webhook executed" });
});

export default app;
