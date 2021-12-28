
import React ,{useCallback, useState,useRef,createRef,} from 'react'
import Child from './child'
import Hoc from './Hoc'
function ReactMemo(){
    const childref = useRef(null)
    const [counter,setCounter] = useState(0);
    const [input, setInput] = useState("");

    //useCallback --> UseCallback is used to optimize the rendering behavior of your React function components
    const updateCounterFromChild = useCallback(() => setCounter(counter+1),[counter])
    const clickhandler = () => {
        setCounter(counter + 1)
        childref.current.focus()
    }

    return (

        <div>
            <h1>hello from parent: {counter}</h1>
            <button onClick={clickhandler}>+1</button>
            <input type="text" onChange={e => setInput(e.target.value)} value={input}/>
            <Child counter={counter} updateCounter = {updateCounterFromChild} ref={childref}/>
            <Hoc />
        </div>
    )
}
export default ReactMemo