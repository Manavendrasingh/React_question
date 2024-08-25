import React, { useState } from 'react';
import Input from './Input';
import { Mycontext } from './MycontextProvider';
import { useContext } from 'react';
  
const Mycomp = ()=>{

    let [show,setShow] = useState(false);
    let [count,setCount] = useState(0);
    let [concat,setConcate] = useState(false);

    let [str] = useContext(Mycontext);
    
    const handeladd = ()=>{
        
        setCount(count+1);
        setShow(true);
    }

    const handelconcate = ()=>{
        setConcate(true);
        
    }
    return (
        <>
            <div>
                { concat && <p>{str}</p>}
            </div>
           <div>
                <button onClick={handeladd}>add</button>
                <button onClick={handelconcate}>concate</button>
           </div>
           <div>
              {/* {show == true && <Input></Input>} */}
                
                {show && Array(count).fill().map((_,index)=><Input key = {index}></Input>)}
              
             
           </div>
            
        </>
    )
}
export default Mycomp;