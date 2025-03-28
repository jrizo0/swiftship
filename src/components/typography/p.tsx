import * as React from "react";

import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLParagraphElement> & {};

const P = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
P.displayName = "p";

export { P };
