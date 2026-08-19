import './Counter.css'
function Counter({count,setCount}){

    function incrementHandler () {
        setCount(count + 1)
    }

    function decrementHandler (){
        setCount(count - 1)
    }

    function resetCountHandler() {
        setCount(0)
    }
    return(
        <div className="counter-container">
            <div className="counter">
            <button className='increment counter-btn' onClick={decrementHandler}>- <span>|</span></button>
            <p className='count'>{count}</p>
            <button className='decrement counter-btn' onClick={incrementHandler}> <span> | </span>+</button>
            </div>
            <div className="reset-btn">
                <button className='reset-btn' onClick={resetCountHandler}>Reset Count</button>
            </div>
        </div>
    )
}
export default Counter