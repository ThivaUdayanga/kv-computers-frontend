import { useState } from "react"

export default function ProductsPage (){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState("true")

    return(
        <>
            <h1>Products Page</h1>    
        </>
    )
}