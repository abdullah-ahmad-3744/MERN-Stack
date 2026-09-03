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
        toast.error('Item removed from Cart')
    }

    return(
        <div className="flex flex-col justify-between items-center hover:scale-105 transition duration-300 ease-in shadow-[0_3px_10px_rgb(0,0,0,0.2)] gap-2 p-4 mt-10 ml-4 rounded-xl">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-sm text-left">{post.description.split(' ').slice(0,10).join(' ') + '...'}</p>
            </div>
            <div className="w-32">
            <img className="w-full h-full "
            src={post.image} alt="" srcSet="" />
            </div>

            <div className="flex justify-between items-center w-full mt-3">
                <div>
                <p className="text-green-600 font-semibold">${post.price}</p>
            </div>
                {
                    cart.some((p) => p.id == post.id) ? 
                    (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase hover:bg-gray-800 hover:text-white transition duration-300 ease-in"
                        onClick={removeFromCartHandler}>Remove Item</button>) :
                    (<button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase hover:bg-gray-800 hover:text-white transition duration-300 ease-in"
                        onClick={addToCartHadler}>Add to Cart</button>)
                }
            </div>
        </div>
    )
}
export default Product