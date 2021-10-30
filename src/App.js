import './App.css';
import Counter from "./Counter";
import React,{createContext,useState} from 'react'

import ContextProvider from "./CounterContext";

// export const Context=createContext()

function App() {
    // const [count,setCount] = useState(0)
    // const incMeth=()=>{
    //     setCount(count+1)
    // }
    //
    // const decMeth=()=>{
    //     setCount(count-1)
    // }
    // const value = {incMeth,decMeth,count}
  return (
      <ContextProvider>
      <div>
        <Counter/>
      </div>
      </ContextProvider>
  );
}
export default App;
