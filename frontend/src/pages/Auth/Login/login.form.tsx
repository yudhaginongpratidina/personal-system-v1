import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema, LoginFormSchema } from "./login.type"

import Label from "../../../components/UI/Label"
import { InputEmail } from "../../../components/UI/InputEmail"
import { InputPassword } from "../../../components/UI/InputPassword"

export default function FormLogin() {

    const [message, setMessage] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
    })

    const onSubmit = async (values: LoginFormSchema) => {
        const { email, password } = values
        try {
            const response = await fetch(`${import.meta.env.VITE_RESTAPI_PERSONAL_SYSTEM_V1}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            })
            const data = await response.json()
            setMessage(data.message)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 mb-6">
            {message && (
                <div className="w-full font-medium p-2 bg-gray-800 text-red-500">
                    {message}
                </div>
            )}
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">E-Mail</Label>
                <InputEmail id="email" placeholder="Email" autoFocus {...register("email")} />
                {errors.email && <p className="text-sm font-medium text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="password">Password</Label>
                <InputPassword id="password" autoComplete="off" {...register("password")} />
                {errors.password && <p className="text-sm font-medium text-red-500">{errors.password.message}</p>}
            </div>
            <button type="submit" className="w-full p-2 bg-gray-800 hover:bg-gray-700 text-white">Login</button>
        </form>
    )
}