import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner"




const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

function Tag(){ 
    const [loading,setLoading] = useState(false)
    const [gif,setGif] = useState('')
    const [tag,setTag] = useState('car')
    async function fetchData() {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
        let output = await axios.get(url)
        let imageSource = output.data.data.images.downsized_large.url
        setGif(imageSource)
        setLoading(false)
    }
    useEffect( () => {
        fetchData()
    },[])
    function clickHandler(){
        fetchData()
    }

    function changeHandler(event){
        setTag(event.target.value)
    }
    return(
        <div className="w-1/2 h-[350px] bg-blue-500 rounded-md border border-black flex flex-col items-center justify-around">
            <h1 className="mt-0.5 text-2xl underline uppercase font-bold">Random GIF</h1>
            {
                loading ? (<Spinner/>) : 
                (<img className="h-[200px] mt-2"
            src={gif} alt="" srcSet=""/>)
            }
            <input className="w-10/12 bg-gray-100 text-lg rounded-md font-semibold py-0.5 mt-3 mb-1 cursor-pointer text-center"
            type="text"
            value={tag}
            onChange={changeHandler} />
            <button  className="w-10/12 bg-gray-100 text-lg rounded-md font-semibold py-0.5 mt-1 mb-3 cursor-pointer"
            onClick={clickHandler}>Generate</button>
        </div>
    )
}
export default Tag