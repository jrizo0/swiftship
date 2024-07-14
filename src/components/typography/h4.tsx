import * as React from "react";

import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLHeadingElement> & {};

const H4 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H4.displayName = "h4";

export { H4 };
