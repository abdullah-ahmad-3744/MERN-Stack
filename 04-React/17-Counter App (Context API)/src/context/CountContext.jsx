import { createContext, useState } from "react";


const CountContext = createContext()


function CountContextProvider({children}){
    const [count,setCount] = useState(1)

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
        <CountContext.Provider
        value={{
            count,
            setCount,
            resetHandler,
            incrementHandler,
            decrementHandler
        }}
        >
            {children}
        </CountContext.Provider>
    )
}
export {CountContext, CountContextProvider}