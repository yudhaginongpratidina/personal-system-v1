import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema, RegisterFormSchema } from "./register.type"

import Label from "../../../components/UI/Label"
import { InputUsername } from "../../../components/UI/InputUsername"
import { InputEmail } from "../../../components/UI/InputEmail"
import { InputPassword } from "../../../components/UI/InputPassword"

export default function FormRegister() {
    const navigate = useNavigate()
    const [message, setMessage] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema),
    })

    const onSubmit = async (values: RegisterFormSchema) => {
        const { username, email, password, confirmPassword } = values

        try {
            const response = await fetch(`${import.meta.env.VITE_RESTAPI_PERSONAL_SYSTEM_V1}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                }),
            })
            const data = await response.json()
            setMessage(data.message)

            if (data.message === "Created") {
                navigate("/login")
            }
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
                <Label htmlFor="username">username</Label>
                <InputUsername id="username" placeholder="Username" autoFocus {...register("username")} />
                {errors.username && <p className="text-sm font-medium text-red-500">{errors.username.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">e-mail</Label>
                <InputEmail id="email" placeholder="Email" autoFocus {...register("email")} />
                {errors.email && <p className="text-sm font-medium text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="password">password</Label>
                <InputPassword id="password" autoComplete="off" {...register("password")} />
                {errors.password && <p className="text-sm font-medium text-red-500">{errors.password.message}</p>}
            </div>
            <div className="flex flex-col gap-1.5">
                <Label htmlFor="confirmPassword">confirm password</Label>
                <InputPassword id="confirmPassword" autoComplete="off" {...register("confirmPassword")} />
                {errors.confirmPassword && <p className="text-sm font-medium text-red-500">{errors.confirmPassword.message}</p>}
            </div>
            <button type="submit" className="w-full p-2 bg-gray-800 hover:bg-gray-700 text-white">Register</button>
        </form>
    )
}