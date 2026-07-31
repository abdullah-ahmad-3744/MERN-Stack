import './Cart.css'
function Cart({count,setCount}){



    function ResetHandler(){
        console.log('Cart Reset');
        setCount(0)
    }
    return(
        <>
        <div className="cart-container">
            <h2>Cart Component</h2>
            <h3>Items in Cart: {count}</h3>
            <button onClick={ResetHandler}>Reset Cart</button>
        </div>
        </>
    )
}
export default Cart