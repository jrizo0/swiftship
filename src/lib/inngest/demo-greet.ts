import { inngest } from "@/lib/inngest";

export const demoGreet = inngest.createFunction(
  {
    id: "demo-greet",
  },
  { event: "demo/greet" },
  async ({ event, step }) => {
    const { name } = event.data;

    await step.sleep("wait-30-seconds", "30s");

    console.log(`Hello ${name}!`);

    return { message: `Hello ${name}!` };
  },
);
