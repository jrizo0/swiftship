import { randomUUID } from "crypto";
import { Browser as LogBrowser, Node as LogtailNode } from "@logtail/js";
import { ILogtailLog } from "@logtail/types";

export const logNode = new LogtailNode(
  process.env.NEXT_PUBLIC_BETTER_STACK_TOKEN!,
);

async function enrichLogs(log: ILogtailLog) {
  const vercel_env = process.env.VERCEL_ENV ?? "local";
  if (vercel_env === "local") {
    console.log(
      "🔍 logtail-node: ",
      JSON.stringify(
        {
          ...log,
          // context: "",
          // headers: "",
        },
        null,
        2,
      ),
    );
  }

  return {
    log_id: randomUUID(),
    vercel_env,
    ...log,
    message: "logtail-node: ".concat(log.message),
    source: "lognode",
  } as ILogtailLog;
}

logNode.use(enrichLogs);

export const logBrowser = new LogBrowser(
  process.env.NEXT_PUBLIC_BETTER_STACK_TOKEN!,
);

async function enrichLogsBrowser(log: ILogtailLog) {
  return {
    log_id: globalThis.crypto.randomUUID(),
    vercel_env: process.env.VERCEL_ENV ?? "local",
    ...log,
    message: "logtail-browser: ".concat(log.message),
    source: "logbrowser",
  } as ILogtailLog;
}

logBrowser.use(enrichLogsBrowser);
