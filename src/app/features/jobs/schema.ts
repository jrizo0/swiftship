import { z } from "zod";

export const jobSchema = z.object({
  name: z.string().min(1),
});

export type JobSchema = z.infer<typeof jobSchema>;
