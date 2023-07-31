import React, { useState } from "react";
import './InputNumber.module.less'
import { InputNumberProps } from './interface'

// interface InputNumberProps {
//     value: number;
//     onChange: (value: number) => void;
//     disabled?: Boolean,
//     step?: number
// }

const InputNumber: React.FC<InputNumberProps> = ({ value, onChange, disabled,  step }) => {
    console.log(Number(step));

    const handleIncrement = () => {
        if (step) {
            onChange(value + Number(step));
        } else {
            onChange(value + 1);

        }
    };
    const handleDecrement = () => {
        if (step) {
            onChange(value - Number(step));
        } else {
            onChange(value - 1);

        }
    };

    const cursor = { cursor: disabled ? 'not-allowed' : 'pointer' }
    return (
        <>
            <div className="InputNumber"  >
                <button className="plus" onClick={handleDecrement} disabled={disabled ? true : false} style={cursor}>-</button>
                <input className="inp" type="text" value={value}
                    disabled={disabled ? true : false}
                    style={cursor}
                />
                <button className="subtract" onClick={handleIncrement} disabled={disabled ? true : false} style={cursor}>+</button>
            </div>
        </>
    )

}

export default InputNumber 
