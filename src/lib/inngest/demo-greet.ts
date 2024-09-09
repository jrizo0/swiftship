import { inngest } from "@/lib/inngest";

export const demoGreet = inngest.createFunction(
  {
    id: "demo-greet",
  },
  { event: "demo/greet" },
  async ({ event, step }) => {
    const { name } = event.data;
    console.log("Running demoGreet function");

    await step.sleep(
      {
        id: "first-wait",
        name: "first-wait-name",
      },
      "10s",
    );

    await step.run("first-greet", async () => {
      console.log(`1st Hello ${name}!`);
    });

    await step.sleep(
      {
        id: "second-wait",
        name: "second-wait-name",
      },
      "10s",
    );

    await step.run("second-greet", async () => {
      console.log(`2nd Hello ${name}!`);
    });

    return { message: `Greeted the user ${name}` };
  },
);
