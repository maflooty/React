import React, {useState} from 'react';


const Ex4 = () => {
  let initialtime = new Date();
  let currenttime = initialtime.getHours()+':'+ initialtime.getMinutes()+':'+ initialtime.getSeconds();
  const [time, setTime] = useState(0)
  const handleRefresh = () => {
      setTime(currenttime)
  }
    return (
        <div>
            <h1>The current time is: {time}</h1>
            <button onClick= {handleRefresh}>Refresh Me!</button>
        </div>
    )
    
}
export default Ex4