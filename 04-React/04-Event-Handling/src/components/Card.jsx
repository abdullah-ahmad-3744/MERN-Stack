import "./Card.css"
function Card () {
    let cartCount = 0;

    function ClickHandler () {
        console.log('Added to cart');   
        console.log(cartCount+=1);
        
    }


    
    return (
        <div className="card-container">
            <h2>Card</h2>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, porro.</p>
            <button onClick={ClickHandler}>Add to Cart</button>
        </div>
    )
}
export default Card