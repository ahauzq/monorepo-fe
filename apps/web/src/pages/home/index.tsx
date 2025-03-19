import { Message } from '@monorepofe/components';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const test = () => {
    Message.success('测试');
  };
  return (
    <div>
      <div>web</div>
      <Button onClick={test}>测试</Button>
    </div>
  );
};
