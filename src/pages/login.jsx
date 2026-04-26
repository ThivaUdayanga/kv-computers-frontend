import { Link } from "react-router-dom";

export default function LoginPage() {
    return(
        <div className="w-full h-full bg-[url('/login_background.jpg')] bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex flex-col justify-center items-center">
                <img src="./logo.png" className="h-[300px] h-[200px] object-cover"/>
                <h1 className="text-4xl font-bold text-secondary ml-4">KV Computers Tagline</h1>
            </div>
            <div className="w-[50%] h-full flex  justify-center items-center">
                <div className="backdrop-blur-lg w-[400px] h-[600px] shadow-2xl rounded-3xl flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-secondary text-center mt-10">Login</h1>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary"/>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary" />
                    <p className="w-[90%] text-right">Forget Password? <Link to="/register" className="text-secondary hover:underline font-bold">Reset now</Link></p>

                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-secondary text-primary font-bold">Login</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary text-primary font-bold">Login With Google</button>

                    <p className="w-[90%] text-right">Do not have an account? <Link to="/register" className="text-secondary hover:underline font-bold">Register</Link></p>

                </div>

            </div>
            
        </div>
    )
}