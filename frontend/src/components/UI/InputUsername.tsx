import * as React from "react";
import { cn } from "../../libs/cn";

const InputUsername = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, ...props }, ref) => {
        return (
            <input
                type="text"
                autoComplete="off"
                className={cn("w-full p-2 border outline-none focus:border-gray-800", className)}
                ref={ref}
                {...props}
            />
        );
    }
);

InputUsername.displayName = "InputUsername";

export { InputUsername };
