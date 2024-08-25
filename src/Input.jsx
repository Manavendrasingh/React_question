import React, { useState } from "react";
import { Mycontext } from "./MycontextProvider";
import { useContext } from "react";

const Input = ()=>{
    let[str,setStr] = useContext(Mycontext);
   


    
    const handelChange = (event)=>{
       setStr(str+event.target.value);
       
       
    }
    return (
        <>
             <input onBlur={handelChange}></input>
        </>
    )
}
export default Input;