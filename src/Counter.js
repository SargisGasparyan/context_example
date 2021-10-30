import React,{useContext} from 'react'
import {Context} from "./CounterContext";
 const Counter =()=>{
     const{incMeth,decMeth,count}=useContext(Context)
    return(
        <div>
            <div><h1>{count}</h1></div>
            <button onClick={incMeth}>Inc</button>
            <button onClick={decMeth}>Dec</button>
        </div>
    )
 }
 export default Counter