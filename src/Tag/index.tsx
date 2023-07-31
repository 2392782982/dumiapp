import React from "react";
import './Tag.module.less'
import {TagProps} from './interface'
// interface TagProps {
//     text?: string,
//     type?: string,
//     width?: Number,
//     height?: Number,
//     effect?: Boolean
// }

const Tag: React.FC<TagProps> = ({ text, type, width, height, effect }) => {
    const handleRemoveClick = (e) => {
        console.log(e.target.parentNode.style.display);
        e.target.parentNode.style.display = 'none'
    };
    return (
        <>
            <div className={type ? type : ''} style={{ width: width ? Number(width) : '', height: height ? Number(height) : '' }}>
                {text}
                {
                    effect ? <span className="remove" onClick={(e) => handleRemoveClick(e)}>X</span> : ''
                }
            </div>
        </>
    )
}

export default Tag