import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

import { getUserAuth } from "@/lib/auth/utils";

export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  defaultValidationErrorsShape: "flattened",
  // handleReturnedServerError(e, utils) {
  //   const { clientInput, bindArgsClientInputs, metadata, ctx } = utils;
  //   return "Oh no, something went wrong!";
  // },
}).use(async ({ next, metadata, clientInput }) => {
  const { session } = await getUserAuth();

  // Here we await the action execution.
  const result = await next({ ctx: { session } });

  console.log(
    ">> 🔍 LOGGING MIDDLEWARE",
    JSON.stringify(
      {
        result,
        clientInput,
        metadata,
        // user,
      },
      null,
      2,
    ),
  );

  // And then return the result of the awaited action.
  return result;
});
