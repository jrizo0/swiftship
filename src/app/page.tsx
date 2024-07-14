import { H2 } from "@/components/typography/h2";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
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
  );
}
