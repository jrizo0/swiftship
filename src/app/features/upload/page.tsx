"use client";

import Link from "next/link";

import { H2 } from "@/components/typography/h2";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UploadButton, UploadDropzone } from "@/lib/utils/uploadthing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <div className="flex gap-6">
        <Link href="/" className={cn(buttonVariants())}>
          Home
        </Link>
        <H2>Upload</H2>
      </div>
      <UploadButton
        endpoint="publicImage"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <UploadDropzone
        endpoint="publicImage"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
