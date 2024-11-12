import { Link } from "react-router-dom"
import FormLogin from "./login.form"

export default  function LoginPage() {
    return (
        <div className="w-full min-h-screen p-4 font-poppins flex justify-center items-center bg-gray-800">
            <div className="w-full max-w-md p-4 bg-white">
                <div className="w-full mb-6">
                    <h1 className="text-xl font-bold">LOGIN</h1>
                    <p className="font-medium">Enter your details for login</p>
                </div>
                <FormLogin/>
                <div className="w-full flex justify-center">
                    <Link to={"/register"} className="text-sm font-medium hover:underline hover:underline-offset-8 text-blue-500">I dont have an account</Link>
                </div>
            </div>
        </div>
    )
}