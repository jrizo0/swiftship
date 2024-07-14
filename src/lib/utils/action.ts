import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

import { getUserAuth } from "@/lib/auth/utils";
import { logger } from "./log";

export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  defaultValidationErrorsShape: "flattened",
  handleServerErrorLog: (error, { metadata }) => {
    const log = logger.withTag("action error");
    log.error(error, {
      metadata,
    });
  },
  // handleReturnedServerError(e, utils) {
  //   const { clientInput, bindArgsClientInputs, metadata, ctx } = utils;
  //   return "Oh no, something went wrong!";
  // },
}).use(async ({ next, metadata, clientInput }) => {
  const { session } = await getUserAuth();

  // Here we await the action execution.
  const result = await next({ ctx: { session } });

  const log = logger.withTag("action log middleware");

  log.log({
    result,
    clientInput,
    metadata,
  });

  // And then return the result of the awaited action.
  return result;
});
