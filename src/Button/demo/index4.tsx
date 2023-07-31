import React from 'react';
import Button from '..';

export default function ButtonDemo3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="text" dashed width={150} height={50}>虚线按钮</Button>
    </div>
  );
}
