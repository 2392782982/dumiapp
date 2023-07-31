import React from 'react';
import Link from '../index';
export default function LinkDom1() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link href='#' underline className="custom-link">有下划线</Link>
            <Link href='#'  className="primary-link">无下划线</Link>

        </div>
    );
};
