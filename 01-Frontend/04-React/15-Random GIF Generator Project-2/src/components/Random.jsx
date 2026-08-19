import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner"
import useGif from "../hooks/useGif"




const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

function Random(){ 
    const{gif,loading,fetchData} = useGif()
    function clickHandler(){
        fetchData()
    }
    return(
        <div className="w-1/2 h-[350px] bg-green-500 rounded-md border border-black flex flex-col items-center justify-around">
            <h1 className="mt-0.5 text-2xl underline uppercase font-bold">A Random GIF</h1>
            {
                loading ? (<Spinner/>) : 
                (<img className="h-[250px] mt-2"
            src={gif} alt="" srcSet=""/>)
            }
            <button  className="w-10/12 bg-gray-100 text-lg rounded-md font-semibold py-1 mt-3 mb-3 cursor-pointer"
            onClick={clickHandler}>Generate</button>
        </div>
    )
}
export default Random