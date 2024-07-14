import { EventSchemas, Inngest } from "inngest";
import { z } from "zod";

// import { logNode } from "../utils/log";

export const inngest = new Inngest({
  id: "bill-manager",
  // logger: logNode,
  schemas: new EventSchemas().fromZod({
    "demo/greet": {
      data: z.object({
        name: z.string(),
      }),
    },
  }),
});
