"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action_sendDemoEvent } from "./action";
import { JobSchema, jobSchema } from "./schema";

export default function JobForm() {
  const form = useForm<JobSchema>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleSubmit = async (values: JobSchema) => {
    const result = await action_sendDemoEvent(values);
    console.log(result);

    if (result?.data?.success) return toast.success("Event sent successfully");

    toast.error("Something went wrong");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Doe" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the person you want to greet.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
