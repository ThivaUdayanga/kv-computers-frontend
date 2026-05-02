import { useState } from "react"
import {fileUpload} from "../utils/media-upload.js"
import toast from "react-hot-toast"

export default function Test() {

    const [file, setFile] = useState(null)

    async function uploadFile(){
        try {
            const url = await fileUpload(file)
            console.log(url)
            toast.success("File uploaded successfully")
        } catch (error) {
            console.log(error)
            toast.error("Error uploading file")
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">

            <input type="file" onChange={
                (e)=>{
                    setFile(e.target.files[0])
                }
            }/>
            <button onClick={uploadFile} className="w-[100px] h-[40px] bg-amber-900 rounded-2xl text-primary">
                Upload
            </button>
            
        </div>
    )
}