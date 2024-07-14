import * as React from "react";

import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLElement> & {};

const Small = React.forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <small
        className={cn("text-sm text-muted-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Small.displayName = "small";

export { Small };
