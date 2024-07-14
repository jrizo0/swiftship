"use server";
import { inngest } from "@/lib/inngest";
import { Schema } from "./schema";

export async function sendDemoEvent(data: Schema) {
  await inngest.send({
    name: "demo/greet",
    data: {
      name: data.name,
    },
  });
}
