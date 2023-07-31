import React from "react";
import './Input.module.less'

// interface InputProps {
//     value?:string,
//     type?:string,
//     disabled?:Boolean,
//     defaultValue?:any

// }
import {InputProps} from './interface'

const Input: React.FC<InputProps> = ({value,type,disabled ,defaultValue}) => {

    const className = disabled ? 'my-element-active' : 'my-element';

    return (
        <>
            <div className="Input">
                <input type={ type  ? 'password' : "text"   }  
                 className={className} 
                 placeholder={defaultValue ? defaultValue : '请输入内容' }
                 disabled={disabled ? true : false}
                 value={disabled ? '' : value }
                  />

            </div>
        </>
    )

}







export default Input