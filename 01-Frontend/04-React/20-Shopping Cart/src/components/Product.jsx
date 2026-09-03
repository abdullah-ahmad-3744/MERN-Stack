import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import toast from 'react-hot-toast';
import { add } from "../redux/slices/CartSlice";
import { remove } from "../redux/slices/CartSlice";

function Product({post}){
    const {cart} = useSelector((state) => state)
    const dispatch = useDispatch()

    const addToCartHadler = () => {
        dispatch(add(post))
        toast.success('Item added to Cart')
    }

    const removeFromCartHandler = () => {
        dispatch(remove(post.id))
        toast.success('Item removed from Cart')
    }

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
                {
                    cart.some((p) => p.id == post.id) ? 
                    (<button onClick={removeFromCartHandler}>Remove Item</button>) :
                    (<button onClick={addToCartHadler}>Add to Cart</button>)
                }
        </div>
    )
}
export default Product