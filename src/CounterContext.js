import React,{createContext,useState} from 'react'
export const Context=createContext()

const ContextProvider=(props)=>{
    const [count,setCount] = useState(0)
    const incMeth=()=>{
        setCount(count+1)
    }

    const decMeth=()=>{
        setCount(count-1)
    }
    const val = {incMeth,decMeth,count}
    return(
        <Context.Provider value={val}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider