"use client";

import { H2 } from "@/components/typography/h2";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { sendDemoEvent } from "./action";
import { Schema, schema } from "./schema";

export default function Home() {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const handleSubmit = async (values: Schema) => {
    toast.info("Sending event with name: " + values.name);
    await sendDemoEvent(values);
    toast.success("Event sent successfully");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      <div className="flex gap-6">
        <Link href="/" className={cn(buttonVariants())}>
          Home
        </Link>
        <H2>Job + Form</H2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Julian" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the person you want to greet.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}
