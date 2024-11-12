import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema, RegisterFormSchema } from "./register.type"

export default function FormRegister() {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema),
    })

    const onSubmit = async (values: RegisterFormSchema) => {
        console.table(values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 mb-6">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="username" className="text-sm font-medium">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    autoComplete="off"
                    autoFocus
                    className={`w-full p-2 border outline-none ${errors.username ? "border-red-500" : ""}`}
                    {...register("username")}
                />
                {errors.username && <p className="text-sm font-medium text-red-500">{errors.username.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">E-Mail</label>
                <input
                    type="email"
                    placeholder="E-Mail"
                    autoComplete="off"
                    className={`w-full p-2 border outline-none ${errors.email ? "border-red-500" : ""}`}
                    {...register("email")}
                />
                {errors.email && <p className="text-sm font-medium text-red-500">{errors.email.message}</p>}
            </div>
            <div className="w-full relative">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <div className="w-full relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder={showPassword ? "Password" : "********"}
                        autoComplete="off"
                        className={`w-full p-2 border outline-none ${errors.password ? "border-red-500" : ""}`}
                        {...register("password")}
                    />
                    <button className="absolute top-1/2 right-2 -translate-y-1/2 text-sm" onClick={() => setShowPassword(!showPassword)} type="button">
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                {errors.password && <p className="text-sm font-medium text-red-500">{errors.password.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
                <div className="w-full relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder={showPassword ? "Confirm Password" : "********"}
                        autoComplete="off"
                        className={`w-full p-2 border outline-none ${errors.confirmPassword ? "border-red-500" : ""}`}
                        {...register("confirmPassword")}
                    />
                    <button className="absolute top-1/2 right-2 -translate-y-1/2 text-sm" onClick={() => setShowPassword(!showPassword)} type="button">
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                {errors.confirmPassword && <p className="text-sm font-medium text-red-500">{errors.confirmPassword.message}</p>}
            </div>
            <button type="submit" className="w-full p-2 bg-gray-800 hover:bg-gray-700 text-white">Register</button>
        </form>
    )
}