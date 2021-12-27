
import React ,{useCallback, useState} from 'react'
import Child from './child'

function ReactMemo(){
    const [counter,setCounter] = useState(0);
    const [input, setInput] = useState("");

    const updateCounterFromChild = useCallback(() => setCounter(counter+1),[counter])

    return (
        <div>
            <h1>hello from parent: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <input type="text" onChange={e => setInput(e.target.value)} value={input}/>
            <Child counter={counter} updateCounter = {updateCounterFromChild}/>
        </div>
    )
}
export default ReactMemo