import * as React from "react";
import { useState } from "react";
import { cn } from "../../libs/cn";

const InputPassword = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, ...props }, ref) => {

        const [showPassword, setShowPassword] = useState<boolean>(false)

        return (
            <div className="w-full relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={showPassword ? "Password" : "********"}
                    autoComplete="off"
                    className={cn("w-full p-2 border outline-none focus:border-gray-800", className)}
                    ref={ref}
                    {...props}
                />
                <button className="absolute top-1/2 right-2 -translate-y-1/2 text-sm" onClick={() => setShowPassword(!showPassword)} type="button">
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
);

InputPassword.displayName = "InputPassword";

export { InputPassword };
