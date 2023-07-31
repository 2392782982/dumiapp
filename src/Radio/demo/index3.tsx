import React , { useState }  from "react";
import Radio from "../index";

export default function RadioDom1(){

    const [selectedValue, setSelectedValue] = useState('');
    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
      };
      const options = [
        { label: '预备项 1', value: 'option-1' },
        { label: '预备项 2', value: 'option-2' },
        { label: '预备项 3', value: 'option-3' },
      ];

    return(
        <div>
            <Radio options={options} selectedValue={selectedValue} onValueChange={handleRadioChange}  />
        </div>
    )
}