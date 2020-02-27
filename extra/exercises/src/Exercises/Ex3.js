import React, {useState} from 'react';

const Ex3 = () => {
    let initial = 0
    const [count, setCount] = useState(0)
    return (
        <div>
            
            {count % 3 ? <p>{count} times</p> : <p>Fizz</p> } || 
            {count % 5 ? <p>{count} times</p> : <p>Buzz</p> } || 
            {count % 3 && count % 5 ? <p>{count} times</p> : <p>FizzBuzz</p> }
            <button onClick = {() => setCount(count+1)}>Click Me!</button>
            <button onClick = {() => setCount(initial)}>Reset Me!</button>
        </div>
    )   
}
export default Ex3