import { useState } from "react"

function Product({post}){
    const [selected,setSelected] = useState(false)
    return(
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
            <img src={post.image} alt="" srcSet="" />
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            <button>
                {
                    selected ? (<p>Remove Item</p>) : (<>Add to Cart</>)
                }
            </button>
        </div>
    )
}
export default Product