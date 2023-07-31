import React from "react";
import './Divider.module.less'
// interface DividerProps {
//     text?: any,
//     SetCopy?: Boolean,
//     contentPosition?: Boolean
// }

import { DividerProps } from './interface'


const Divider: React.FC<DividerProps> = ({ text, SetCopy, contentPosition }) => {
    const className = SetCopy ? 'hrDivider' : '';
    // contentPosition = contentPosition ? contentPosition : ''
    console.log(contentPosition);

    return (
        <>
            <div className="Divider">
                {text && <span>{text}</span>}
                {/* <hr className={className} /> */}
                {
                    contentPosition ? <div className="verticalDivider"></div> :   <hr className={className} />
                }

            </div>
        </>
    )
}


export default Divider















