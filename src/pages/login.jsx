import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    function login() {
        // console.log("Email...", email)
        // console.log("Password...", password)

        axios.post(import.meta.env.VITE_API_URL + "/users/login", {
            email : email,
            password : password
        }).then(
            (response) => {
                // console.log("Login Success")
                // console.log(response)
                console.log(response.data)

                localStorage.setItem("token", response.data.token)

                if(response.data.user.role == "admin"){
                    //rederect ti admin dashboard
                    //console.log("admin dashboard")
                    // window.location.href = "/admin/"
                    navigate("/admin/")
                }else{
                    //rederect to home page
                    //console.log("home page")
                    // window.location.href = "/"
                    navigate("/")
                }
                toast.success("Login Success")
            }
        ).catch(
            (e) => {
                // console.log("Login Faild")
                // console.log(e)
                toast.error("Login Failed")
            }
        )
    }

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
                        onChange={
                            (e)=>{
                                //console.log(e.target.value)
                                setEmail(e.target.value)
                            }
                        } 
                        className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary"/>
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={
                            (e) => {
                                //console.log(e.target.value)
                                setPassword(e.target.value)
                            }
                        } 
                        className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary" />
                    <p className="w-[90%] text-right">Forget Password? <Link to="/register" className="text-secondary hover:underline font-bold">Reset now</Link></p>

                    <button onClick={login} className="m-5 p-3 w-[90%] h-[50px] rounded-lg bg-secondary text-primary font-bold">Login</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-lg border border-secondary text-primary font-bold">Login With Google</button>

                    <p className="w-[90%] text-right">Do not have an account? <Link to="/register" className="text-secondary hover:underline font-bold">Register</Link></p>

                </div>

            </div>
            
        </div>
    )
}