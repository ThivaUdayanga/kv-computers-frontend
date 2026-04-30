import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminAddProduct() {

    const navigate = useNavigate()

    const [productId, setProductId] = useState("")
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [altName, setAltName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [labelPrice, setLabelPrice] = useState("")
    const [category, setCategory] = useState("")
    const [isVissible, setIsVissible] = useState("isVissible")
    const [brand, setBrand] = useState("Standard")
    const [model, setModel] = useState("Generic")

    async function handleAddProduct () {
        try {
            const token = localStorage.getItem("token")

            if(token == null){
                toast.error("You must be logged in to add a product.")
                window.location.href = "/login"
                return
            }

            await axios.post(import.meta.env.VITE_API_URL +"/products", {
                productId: productId,
                productName: productName,
                productDescription: productDescription,
                altName: altName.split(","),
                productPrice: productPrice,
                labelPrice: labelPrice,
                category: category,
                status: isVissible,
                brand: brand,
                model: model
            }, {
                headers: {
                    Authorization: "Bearer "+token
                }
            })
            toast.success("Product added successfully!")

            // rederect to Admin/products
            navigate("/admin/products");

        } catch (error) {
            toast.error(error?.response?.data?.message ||"Failed to add product. Please try again.")
            return
        }
    }

    return (
            <div className="w-full max-h-full flex flex-wrap p-4 overflow-y-scroll">
                <h1 className="w-full text-3xl font-bold mb-4 text-secondary sticky top-0 bg-primary">Add Product</h1>
                <div className="w-[50%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Product ID</label>
                    <input 
                        placeholder="Ex: ID0001" 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={productId}
                        onChange={
                            (e) => {
                                setProductId(e.target.value)
                            }
                        } 
                    />
                </div> 
                <div className="w-[50%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Product Name</label>
                    <input 
                        placeholder="Ex: Laptop" 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={productName}
                        onChange={
                            (e) => {
                                setProductName(e.target.value)
                            }
                        } 
                    />
                </div>          
                <div className="w-[100%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Product Description</label>
                    <textarea
                        placeholder="Ex: High-performance laptop for gaming" 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={productDescription}
                        onChange={
                            (e) => {
                                setProductDescription(e.target.value)
                            }
                        } 
                    />
                </div>
                <div className="w-[100%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Alternative Product Name</label>
                    <input 
                        placeholder="Ex: Gaming Laptop" 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={altName}
                        onChange={
                            (e) => {
                                setAltName(e.target.value)
                            }
                        } 
                    />
                </div> 
                <div className="w-[50%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Price</label>
                    <input 
                        placeholder="LKR 150,000" 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={productPrice}
                        onChange={
                            (e) => {
                                setProductPrice(e.target.value)
                            }
                        } 
                    />
                </div>
                <div className="w-[50%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Product Label Price</label>
                    <input 
                        placeholder="LKR 150,000" 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={labelPrice}
                        onChange={
                            (e) => {
                                setLabelPrice(e.target.value)
                            }
                        } 
                    />
                </div>
                <div className="w-[25%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Category</label>
                    <select 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={category}
                        onChange={
                            (e) => {
                                setCategory(e.target.value)
                            }
                        }
                    >
                        <option value="">Select a category</option>
                        <option value="laptops">Laptops</option>
                        <option value="desktops">Desktops</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                <div className="w-[25%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Status</label>
                    <select 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={isVissible}
                        onChange={
                            (e) => {
                                setIsVissible(e.target.value)
                            }
                        }
                    >
                        <option value="available">Vissible</option>
                        <option value="not-available">Not Vissible</option>
                    </select>
                </div>
                <div className="w-[25%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Brand</label>
                    <select 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={brand}
                        onChange={
                            (e) => {
                                setBrand(e.target.value)
                            }
                        }
                    >
                        <option value="">Select a brand</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                        <option value="pro">Pro</option>
                    </select>
                </div>
                <div className="w-[25%] h-[90px] flex flex-col">
                    <label className=" text-secondary font-bold ml-2">Model</label>
                    <select 
                        className="w-full border-2 border-accent rounded-[10px] p-3 m-2 focus:outline-white"
                        value={model}
                        onChange={
                            (e) => {
                                setModel(e.target.value)
                            }
                        }
                    >
                        <option value="">Select a model</option>
                        <option value="generic">Generic</option>
                        <option value="pro">Pro</option>
                        <option value="ultra">Ultra</option>
                    </select>
                </div>
                <div className="w-full h-[100px] mt-5 sticky bottom-0 flex flex-row gap-2 justify-end items-center p-4">
                    <button 
                        className="w-[150px] h-[50px] bg-primary border border-secondary text-secondary font-bold py-2 px-4 rounded-[10px] hover:bg-accent focus:outline-none"
                        onClick={
                            () => {
                                navigate("/admin/products");
                            }
                        }
                    >
                        Cancel
                    </button>
                    <button 
                        className="w-[150px] h-[50px] bg-accent text-secondary font-bold py-2 px-4 rounded-[10px] hover:bg-secondary hover:text-primary focus:outline-none"
                        onClick={handleAddProduct}
                    >
                        Add Product
                    </button>
                </div>
        </div>
    )
}