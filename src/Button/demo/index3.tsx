import React from 'react';
import Button from '..';

export default function ButtonDemo3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="forbidden-disabled" disabled >禁用按钮</Button>
      <Button type="primary-disabled" disabled>基础按钮</Button>
      <Button type="danger-disabled" disabled>危险按钮</Button>
      <Button type="warning-disabled" disabled>警告按钮</Button>
      <Button type="text-disabled" disabled>文本按钮</Button>
    </div>
  );
}
