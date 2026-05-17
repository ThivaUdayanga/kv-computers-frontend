import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header className="w-full bg-accent h-[80px] flex justify-center items-center relative">
            <img src="/logo.png" alt="logo" className="h-[100px] ml-5 absolute left-5"/>
            <div className="w-[600px] h-full flex justify-center items-center">
                <Link to="/" className="text-primary mx-4 hover:border-b-2">Home</Link>
                <Link to="/products" className="text-primary mx-4 hover:border-b-2">Products</Link>
                <Link to="/contact" className="text-primary mx-4 hover:border-b-2">Contact us</Link>
                <Link to="/about" className="text-primary mx-4 hover:border-b-2">About us</Link>
            </div>
        </header>
    )
}