import React from 'react';
import Link from '../index';
export default function LinkDom1() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link disabled href='#' className="custom-disabled">默认链接</Link>
            <Link disabled href='#' className="primary-disabled">主要链接</Link>
            <Link disabled href='#' className="success-disabled">成功链接</Link>
            <Link disabled href='#' className="warning-disabled">危险链接</Link>
            <Link disabled href='#' className="info-disabled">信息链接</Link>
        </div>
    );
};
