import React,{useState} from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { increment , decrement , reset , incrementByAmount } from './counterSlice'

const CounterComponent = () => {

const countValue = useSelector((state) => state.counter.count);
const dispatch = useDispatch()

const [incrementAmt , setincrementAmt] = useState(0);
const addValue = Number(incrementAmt) || 0 ;

const resetAll = () => {
    //why this function is to set the curr component value to zero and also the store value to zero
    setincrementAmt(0);
    dispatch(reset());
}

  return (
    <section>
        <p>
            {countValue}
        </p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
        
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div>
            <input type="text"
                   value = {incrementAmt}
                   onChange={(ch) => setincrementAmt(ch.target.value)}

            
            />

           <button onClick={() => resetAll()}>reset</button>
            
            <button onClick={() => dispatch(incrementByAmount(addValue))}>add value</button>
        </div>

    </section>
    
  )
}

export default CounterComponent