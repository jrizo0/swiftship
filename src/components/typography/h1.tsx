import * as React from "react";

import { cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLHeadingElement> & {};

const H1 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H1.displayName = "h1";

export { H1 };
