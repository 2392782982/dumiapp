import React from 'react';
import Button from '..';

export default function ButtonDemo3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="text" loading width={150} height={50}>加载按钮</Button>
    </div>
  );
}
