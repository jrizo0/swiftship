import * as React from "react";
import { Button, Html } from "@react-email/components";

type Props = {
  firstName: string;
};

export function EmailTemplate({ firstName }: Props) {
  return (
    <Html>
      <div>
        <h1>Welcome, {firstName}!</h1>
      </div>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
