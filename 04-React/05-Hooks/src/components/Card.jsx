import "./Card.css"
function Card ({count,setCount}) {



    function ClickHandler () {
        setCount(count+1)
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