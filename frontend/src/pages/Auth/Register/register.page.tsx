import { Link } from "react-router-dom"
import FormRegister from "./register.form"

export default function RegisterPage(){
    return (
        <div className="w-full min-h-screen p-4 font-poppins flex justify-center items-center bg-gray-800">
            <div className="w-full max-w-md p-4 rounded-md bg-white">
                <div className="w-full mb-6">
                    <h1 className="text-xl font-bold">REGISTER</h1>
                    <p className="font-medium">Enter your details for register</p>
                </div>
                <FormRegister/>
                <div className="w-full flex justify-center">
                    <Link to={"/login"} className="text-sm font-medium hover:underline hover:underline-offset-8 text-blue-500">I already have an account</Link>
                </div>
            </div>
        </div>
    )
}