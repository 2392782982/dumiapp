import React from 'react';
import './Link.module.less';

// interface LinkProps {
//     /**
//    * @description 原生 href 属性
//    */
//     href: string;

//     target?: string;
//     className?: string;
//     children: React.ReactNode;
// }

import { LinkProps } from './interface';

const Link: React.FC<LinkProps> = ({ href, className, children, disabled, underline }) => {

    if (disabled) {
        disabled = true
    } else {
        disabled = false
    }
    if (!href) {
        href = "/"
    }
    href = disabled ? 'javascript:void(0)' : href
    if (underline) {
        underline = true
    } else {
        underline = false
    }

    return (
        <>
            <div className='Link'>
                <a href={href} className={className} style={{ cursor: disabled ? 'not-allowed' : 'pointer' , textDecoration: underline ?'underline' : ''  }}>
                    {children}
                </a>
            </div>
        </>
    );
};


export default Link;