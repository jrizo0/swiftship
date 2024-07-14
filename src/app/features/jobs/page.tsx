import { H2 } from "@/components/typography/h2";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { createPage } from "@/lib/utils/create-page";
import JobForm from "./job-form";

const { Page, metadata } = createPage({
  metadata: {
    title: `Jobs`,
  },
  component: ({}) => (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      <div className="flex gap-6">
        <Link href="/" className={cn(buttonVariants())}>
          Home
        </Link>
        <H2>Job + Form</H2>
      </div>

      <JobForm />
    </main>
  ),
});

export { metadata };

export default Page;
