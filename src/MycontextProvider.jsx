import React, { useState } from "react";
import { createContext } from "react";

export const Mycontext = createContext();

const MycontextProvider = ({children})=>{

    let [str,setStr] = useState("");

       return(
         <Mycontext.Provider value={[str,setStr]}>
            {children}
         </Mycontext.Provider>
    )

}

export default MycontextProvider;
