import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlics'

function Counter(){
    const count = useSelector((state) => (state.counter.value))
    const dispatch = useDispatch()
    return (
        <div className="flex h-20 w-1/2 justify-center items-center gap-3 bg-gray-900 text-white">
            <button onClick={() => dispatch(decrement())}
            >Decrement</button>
            <br />
            <br />
            <div>Count : {count}</div>
            <br />
            <br />
            <button onClick={() => dispatch(increment())}
            >Increment</button>
        </div>
    )
}
export default Counter