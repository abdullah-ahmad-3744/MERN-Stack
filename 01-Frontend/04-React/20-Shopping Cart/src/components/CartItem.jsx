import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

function CartItem({item,itemIndex}){
    const dispatch = useDispatch((state) => state)

    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.success('Item removed from Cart')
    }
    return (
        <div>

            <div>
                <img src={item.image} alt="" srcSet="" />
            </div>

            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>

            <div>
                <p>{item.price}</p>
            </div>
            <div onClick={removeFromCart}>
                <FcDeleteDatabase />
            </div>



        </div>
    )
}
export default CartItem