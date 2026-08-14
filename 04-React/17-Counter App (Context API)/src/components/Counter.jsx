import { useContext } from "react"
import { CountContext } from "../context/CountContext"
import { CountContextProvider } from "../context/CountContext"
function Counter(){
    const {count,setCount} = useContext(CountContext)
    function incrementHandler(){
        setCount(count + 1)
    }
    function decrementHandler(){
        setCount(count - 1)
    }
    function resetHandler(){
        setCount(0)
    }
    return(
        <div className="flex flex-col items-center bg-gray-900 text-white font-bold p-6 rounded-md">
            <div className="">
                <span className="text-xl px-2">Decrement</span>
                <span className="text-xl">&</span>
                <span className="text-xl px-2">Increment</span>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={decrementHandler}>- <span className="p-3">|</span></button>
                <p className="p-2">{count}</p>
                <button className=""
                onClick={incrementHandler}> <span className="p-3">|</span>+</button>
            </div>
            <button onClick={resetHandler}
            className="border bg-amber-50 px-3 py-0.5 mt-5 text-black font-semibold rounded-sm cursor-pointer">Reset Count</button>
        </div>
    )
}
export default Counter