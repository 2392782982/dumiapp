import React from "react";
import './Radio.module.less'
interface RadioOption {
    label: string;
    value: string;
}
interface RadioProps {
     /**
   * @description 选项数组
   */
    options: RadioOption[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    /**
   * @description 是否禁用状态
   * @default false	
   */
    disabled?: Boolean
}

const Radio: React.FC<RadioProps> = ({ options, selectedValue, onValueChange, disabled }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onValueChange(value);
    };


    return (
        <>
            <div>
                {options.map(option => (
                    <label key={option.value} className='radio-container'>
                        <span className={disabled ? 'radioaa' : 'radio-label'}>{option.label}</span>
                        <input
                            type="radio"
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={handleChange}
                            className='radioInput'
                            disabled={disabled ? true : false}
                            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
                        />
                    </label>
                ))}
            </div>
        </>
    )
}

export default Radio