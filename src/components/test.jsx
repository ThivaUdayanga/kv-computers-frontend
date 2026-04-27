import { useState } from "react"

export default function Test() {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState("Active")
    const [isVissible, setIsVisible] = useState(true)

    return (
        <div className="w-full h-screen flex justify-center items-center">
          <button 
            className="w-[50px] h-[50px] bg-amber-950 text-white rounded-full" 
            onClick={
              () =>{
                setIsVisible(!isVissible)
              } 
            }
          >
            {isVissible?"X":"O"}
          </button>

          {isVissible && <div className="w-[400px] h-[400px] bg-accent rounded-2xl shadow-2xl flex flex-col justify-center items-center ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[55px]">{count}</h1>
              <div className="flex flex-row">
                <button 
                  onClick={
                    () => {
                      setCount(count-1)
                    }
                  } 
                  className="m-5 p-3 w-[100px] h-[50px] rounded-lg bg-secondary text-primary font-bold">
                    Incriment
                </button>
                <button 
                  onClick={
                    () => {
                      setCount(count+1)
                    }
                  }
                  className="m-5 p-3 w-[100px] h-[50px] rounded-lg bg-secondary text-primary font-bold">
                    Decriment
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[55px]">{status}</h1>
              <div className="flex flex-row">
                  <button
                    onClick={
                      () => {
                        setStatus("Sleep")
                      }
                    } 
                    className="m-5 p-3 w-[100px] h-[50px] rounded-lg bg-secondary text-primary font-bold">
                    Sleep
                  </button>
                  <button 
                    onClick = {
                      () => {
                        setStatus("Active")
                      }
                    }
                    className="m-5 p-3 w-[100px] h-[50px] rounded-lg bg-secondary text-primary font-bold">
                    Active
                  </button>
              </div>
            </div>
          </div>}
        </div>
    )
}