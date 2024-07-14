import * as React from "react";

import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLHeadingElement> & {};

const H3 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H3.displayName = "h3";

export { H3 };
