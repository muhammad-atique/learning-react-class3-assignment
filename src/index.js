import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <
    div > < App name = "Atique "
    age = { 20 * 2 }
    space = " " /
    >
    <
    Hello fullName = "Muhammad Atique. This is being imported in Index.js " / >

    <
    /div > ,
    document.getElementById('root')
);


// ReactDOM.render(
//   React.createElement('div', null, React.createElement('span', null, "Hello world with Span createElement")),
//   document.getElementById('root')
// );

// ReactDOM.render( <
//     div > < App / > < /div> ,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();