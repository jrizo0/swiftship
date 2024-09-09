"use server";

import { inngest } from "@/lib/inngest";
import { actionClient } from "@/lib/utils/action";
import { jobSchema } from "./schema";

export const action_sendDemoEvent = actionClient
  .metadata({ actionName: "sendDemoEvent" })
  .schema(jobSchema)
  .action(async ({ parsedInput: { name } }) => {
    // throw new Error("test");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await inngest.send({
      name: "demo/greet",
      // id: "demo-greet-1",
      data: {
        name,
      },
    });

    return {
      success: "Event sent successfully",
    };
  });
