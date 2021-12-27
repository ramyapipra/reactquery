import React,{memo,useMemo} from 'react';

const Child = props => {
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
         <h1>child - {childNumber} {counter}</h1>
         <button onClick={updateCounter}>Click</button>
     </div>
 )
}
export default memo(Child)