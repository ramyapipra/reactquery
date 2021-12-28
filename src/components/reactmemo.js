
import React ,{useCallback, useState,useRef} from 'react'
import Child from './child'
import Hoc from './Hoc'
function ReactMemo(){
    const childref = useRef(null)
    const [counter,setCounter] = useState(0);
    const [input, setInput] = useState("");
   const childRef = useRef(null);

    //useCallback --> UseCallback is used to optimize the rendering behavior of your React function components
    const updateCounterFromChild = useCallback(() => setCounter(counter+1),[counter])
    const changeCounterValue = () => {
        setCounter(counter + 1)

    };
    return (

        <div>
            <h1>hello from parent: {counter}</h1>
            <button onClick={changeCounterValue} ref={childRef}>+1</button>
            <input type="text" onChange={e => setInput(e.target.value)} value={input}/>
            <Child counter={counter} updateCounter = {updateCounterFromChild} ref={childRef}/>
        </div>
    )
}
export default ReactMemo