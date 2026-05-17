import Header from "../components/header"
import { Route, Routes } from "react-router-dom"
import ProductsPage from "./productsPage"

export default function HomePage() {
    return(
        <div className="w-full min-h-screen">
            <Header/>
            <Routes>
                <Route path="/" element={<div>Home Page Content</div>}/>
                <Route path="/about" element={<div>About Page Content</div>}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route path="/contact" element={<div>Contact Page Content</div>}/>
                <Route path="/*" element={<div>404 Not found</div>}/>
            </Routes>    
        </div>
    )
}