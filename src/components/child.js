import React,{forwardRef, memo,useMemo} from 'react';
// forwardRef((props,ref) => {
    
// })
const Child = forwardRef((props,ref) => {
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
         <button ref={ref}>Click</button>
     </div>
 )
});
export default memo(Child)
