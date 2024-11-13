import * as React from "react";
import { cn } from "../../libs/cn";

const InputEmail = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, ...props }, ref) => {
        return (
            <input
                type="email"
                autoComplete="off"
                className={cn("w-full p-2 border outline-none focus:border-gray-800", className)}
                ref={ref}
                {...props}
            />
        );
    }
);

InputEmail.displayName = "InputEmail";

export { InputEmail };
