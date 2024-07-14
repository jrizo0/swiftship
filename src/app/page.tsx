import Link from "next/link";

import { H2 } from "@/components/typography/h2";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { createPage } from "@/lib/utils/create-page";

const { Page, metadata } = createPage({
  metadata: async ({}) => ({
    title: `Dashboard`,
  }),
  component: ({}) => (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <H2>Features</H2>
      <div className="flex flex-col gap-4">
        <Link href="/features/upload" className={cn(buttonVariants())}>
          Upload
        </Link>
        <Link href="/features/jobs" className={cn(buttonVariants())}>
          Jobs
        </Link>
      </div>
    </main>
  ),
});

export { metadata };

export default Page;
