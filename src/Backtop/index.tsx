import React, { useEffect, useState } from "react";
import './Backtop.module.less'
// interface BacktopProps {
//     className?: string,
//     right?: Number,
//     bottom?: Number
// }

import { BacktopProps } from './interface';

const Backtop: React.FC<BacktopProps> = ({  right, bottom }) => {
    const [showBacktop, setShowBacktop] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.pageYOffset > 10) {
                setShowBacktop(true)
            } else {
                setShowBacktop(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
 



    return (
        <>
            <p>Scroll down to see the bottom-right button.</p>
            <div className={`backtopBacktop${showBacktop ? 'Show' : ''}`}
                 style={{ right : right ?  Number(right) : '' , bottom : bottom ? Number(bottom) : '' }}
                onClick={scrollToTop} >
                返回顶部
            </div>
        </>
    )
}

export default Backtop
