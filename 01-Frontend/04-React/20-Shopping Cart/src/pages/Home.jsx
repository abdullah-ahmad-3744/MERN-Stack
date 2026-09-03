import { useEffect, useState } from "react"
import Product from "../components/Product";
import Spinner from "../components/Spinner";


function Home(){
    const API_URL = 'https://fakestoreapi.com/products'
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    async function fetchProductData() {
        setLoading(true)

        try {
            const res =  await fetch(API_URL);
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            console.error(error)
            setPosts([])
        }
        setLoading(false)
    }

    useEffect( () => {
        fetchProductData()
    },[])
    return(
        <div>
            {
                loading ? (<Spinner/>) :
                 (
                    posts.length > 0 ? 
                    (
                        posts.map((post) => {
                            return (
                                <Product key={post.id} post={post}/>
                            )
                        })
                    ) :
                     (<div>No Data Found...</div>)
                 )
            }
        </div>
    )
}
export default Home