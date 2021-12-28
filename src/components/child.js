import React,{useMemo} from 'react';
//react.memo --> Using memo will cause React to skip rendering a component if its props have not changed.This can improve performance.
//useMemo --> useMemo is used to memoize expensive functions to avoid having to call them on every render.
const Child = React.forwardRef( (props,ref) => {
    const {counter,updateCounter} = props;
    console.log("child is Rendering!!!");

    const childNumber = useMemo(() => {
        let output = 0
        for(let i=0; i< 500_000_000; i++){  
            output ++
            }
      return output;
    }, [counter])

    // let childNumber = 0
    // for(let i=0; i< 500_000_000; i++){  //it is rendering every time
    //     childNumber ++
    // }

 return (
     <div className='Child'>
        <input ref={ref}  type="text" />
         <h1>child - {childNumber} {counter}</h1>
         <button onClick={updateCounter} >Click</button>
     </div>
 )
}
)
export default React.memo(Child)