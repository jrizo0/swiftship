"use server";

import { inngest } from "@/lib/inngest";
import { jobSchema } from "./schema";
import { actionClient } from "@/lib/utils/action";

export const action_sendDemoEvent = actionClient
  .metadata({ actionName: "sendDemoEvent" })
  .schema(jobSchema)
  .action(async ({ parsedInput: { name } }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await inngest.send({
      name: "demo/greet",
      data: {
        name,
      },
    });

    return {
      success: "Event sent successfully",
    };
  });
