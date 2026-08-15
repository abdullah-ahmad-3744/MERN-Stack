import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from "./Spinner"

function Blogs (){
    const {loading,posts}  = useContext(AppContext)
    return <div>
        {
            loading ? (<Spinner/>) 
            : (
                posts.length ===0 ? (<div>No Posts Found</div>) :
                 (posts.map( (post) => {
                    return (
                    <div key={post.id}>
                    <p className="font-bold text-xl">{post.title}</p>
                    <p>By <span>{post.author}</span> on {post.category} </p>
                    <p>Posted On <span>{post.date}</span></p>
                    <p>{post.content}</p>
                    <div>{post.tags.map((tag,index) => {
                        return (
                            <span key={index}>{` #${tag}`}</span>
                        )
                    })}</div>
                    </div>
                    )
                 }))
            )
        }
    </div>
}
export default Blogs