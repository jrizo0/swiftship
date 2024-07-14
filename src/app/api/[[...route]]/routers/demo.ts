import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const app = new Hono()
  .get("/greet", async (c) => {
    return c.json({ data: "Hello, world!" });
  })
  .get("/private-greet", clerkMiddleware(), async (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    return c.json({ data: `Hello, ${auth.sessionClaims.firstName}!` });
  })
  .get(
    "/square/:number",
    zValidator(
      "param",
      z.object({
        number: z.number(),
      }),
    ),
    async (c) => {
      const { number } = c.req.valid("param");

      if (!number) {
        return c.json({ error: "Missing number" }, 400);
      }

      return c.json({
        result: number * number,
      });
    },
  );

export default app;
