import React from 'react';
import ReactDOM from 'react-dom';
// import './styles.css';
import App2 from './App2';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App2 />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
