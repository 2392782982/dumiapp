import React,{useState} from "react";
import InputNumber from '../index'

export default function InputNumberDom1(){
const [count , setCount] = useState(0)
const handleCountChange = (newValue: number) => {
    setCount(newValue);
  };
  
    return(
        <div>
        <InputNumber  value={count} onChange={handleCountChange} />
        </div>
    )
} 