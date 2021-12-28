import React from 'react';
import ReactDOM from 'react-dom';
// import './styles.css';
import App from './Components/App.js';
// if (typeof window !== 'undefined') {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
