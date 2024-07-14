import { z } from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
// import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/emails/email-template";
import { Resend } from "resend";
import { headers } from "next/headers";
import { ratelimit } from "@/lib/upstash/redis";

const app = new Hono()
  .get("/greet", async (c) => {
    const ip = headers().get("x-forwarded-for") ?? "127.0.0.1";
    const { success } = await ratelimit.limit(`${ip}-demo`);

    if (!success) {
      return c.json({ error: "Rate limit exceeded" }, 429);
    }

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
  )
  .get("/send-email", async (c) => {
    const to = c.req.query("to");
    if (!to) {
      return c.json({ error: "Missing to" }, 400);
    }
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: "Swift <onboarding@bill-manager.lat>",
        to: [to],
        subject: "Hello world",
        react: EmailTemplate({ firstName: "Julian" }),
      });

      if (error) {
        return c.json({ error }, { status: 500 });
      }

      return Response.json(data);
    } catch (error) {
      return c.json({ error }, { status: 500 });
    }
  });

export default app;
