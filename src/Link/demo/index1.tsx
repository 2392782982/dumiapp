import React from 'react';
import Link from '../index';
export default function LinkDom1(){
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link href="https://example.com"   className="custom-link">默认链接</Link>
        <Link href="#"   className="primary-link">主要链接</Link>
        <Link href="#"   className="success-link">成功链接</Link>
        <Link href="#"   className="warning-link">危险链接</Link>
        <Link href="#"   className="info-link">信息链接</Link>

      </div>
    );
  };
  