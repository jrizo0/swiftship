import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest";
import { demoGreet } from "@/lib/inngest/demo-greet";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [demoGreet],
});
