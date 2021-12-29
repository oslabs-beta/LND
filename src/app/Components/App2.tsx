import React from 'react';
import { Subscriber } from './Leak';
import { Test } from './Leak';

export default function App2() {
  console.log('render');
  return (
    <>
      <Subscriber />
      <Test />
    </>
  );
}
