import { createContext, useState } from "react";


const CountContext = createContext()


function CountContextProvider({children}){
    const [count,setCount] = useState(1)
    return(
        <CountContext.Provider
        value={{
            count: count,
            setCount: setCount
        }}
        >
            {children}
        </CountContext.Provider>
    )
}
export {CountContext, CountContextProvider}