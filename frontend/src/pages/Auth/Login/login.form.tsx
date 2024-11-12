import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema, LoginFormSchema } from "./login.type"

export default function FormLogin() {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    })

    const onSubmit = async (values: LoginFormSchema) => {
        console.table(values)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 mb-6">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">E-Mail</label>
                <input 
                    type="email" 
                    placeholder="Email" 
                    autoComplete="off" 
                    autoFocus 
                    className={`w-full p-2 border outline-none ${errors.email ? "border-red-500" : ""}`} 
                    {...register("email")} 
                />
                {errors.email && <p className="text-sm font-medium text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
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
            <button type="submit" className="w-full p-2 bg-gray-800 hover:bg-gray-700 text-white">Login</button>
        </form>
    )
}