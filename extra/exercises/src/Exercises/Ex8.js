import React, {useState} from 'react';

const Ex8 = () => {
    let text = 'My name is Mustapha Mohammed im a student of Hackyourfuture belgium'
    const [count, setCount] = useState('My')
    console.log(count)
    let i
    for (i = 0; i < text.length; i++) {
        
      }
    return (
        <div>
            <p>{count}</p>
            <button onClick = {() => setCount(text[i])}>Previous</button>
            <button onClick = {() => setCount()}>Next</button>
        </div>
    )
};

export default Ex8;