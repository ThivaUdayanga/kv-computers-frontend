import { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios'
import {toast} from 'react-hot-toast'

export default function DeleteModel(props){
    const [isVissible, setIsVissible] = useState(false)

    const product = props.product
    const setRefresh = props.setRefresh

    return(
        <div>
            <RiDeleteBin6Line 
                onClick={
                    ()=>{setIsVissible(true)}
                }
                className="hover:text-red-600 cursor-pointer"
            />
            {
                isVissible && (
                    <div className="fixed inset-0 w-full h-full bg-black/50 z-50 flex justify-center items-center">
                        {/* model rest things */}
                        {console.log(product)}
                        <div className="h-[300px] w-[500px] rounded-3xl bg-white shadow">
                            <div className="flex justify-end p-3">
                                <button 
                                    className="w-[50px] h-[50px] rounded-full text-red-600 cursor-pointer hover:text-white hover:bg-red-600"
                                    onClick={
                                        ()=>{
                                            setIsVissible(false)
                                        }
                                    }
                                >
                                    X
                                </button>
                            </div>
                            <div className='p-5 flex flex-col justify-center items-center'>
                                <h1 className='text-secondary text-2xl'>Are you sure you want to delete {product.productName}?</h1>
                                <div className='flex flex-row mt-7 h-[70px] w-[300px] gap-3 items-center justify-center'>
                                    <button 
                                        className='h-[50px] w-[100px] bg-gray-200 rounded-xl text-secondary text-xl'
                                        onClick={
                                            ()=>{
                                                setIsVissible(false)
                                            }
                                        }
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        className='h-[50px] w-[100px] bg-red-500 rounded-xl text-xl text-primary'
                                        onClick={
                                            ()=>{
                                                const token = localStorage.getItem("token");

                                                axios.delete(import.meta.env.VITE_API_URL + "/products/" + product.productId,{
                                                    headers:{
                                                        Authorization : "Bearer " + token
                                                    }
                                                }).then(
                                                    (response)=>{
                                                        setIsVissible(false)
                                                        setRefresh(true)
                                                    }
                                                ).catch(
                                                    (err)=>{
                                                        toast.error(err.response.data.message || "Faild to delete Product. Please try again..!")
                                                        setIsVissible(false)
                                                    }
                                                )

                                            }
                                        }
                                    >
                                        OK
                                    </button>   
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                )
            }
        </div>
    )
}