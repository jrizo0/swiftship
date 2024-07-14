import * as React from "react";

import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLParagraphElement> & {};

const Muted = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("text-sm text-muted-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Muted.displayName = "p";

export { Muted };
