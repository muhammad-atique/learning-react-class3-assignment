import React from 'react';
import './App.css';
import Hello from './Hello';
import './hello.css';
import Hi from './Assignment';

//Another way of writing the above function 
const App = ({ name, age, space }) => < div className = "app_div" > Hello from { name }
whose age is { age - 10 } { space }
years old. <
    br / > < Hello fullName = "Muhammad Atique. This is being imported as tree in App.js" > < /Hello>  <
br / >
    <
    Hi myName = "Muhammad Atique Rafique" > < /Hi> < /
    div > ;




/* 
function App({ name, age, space }) {
    return <div >
        Hello from { name }
    whose age is { age - 10 } { space }
    years old. <
        /div>
}
 */



/* 
//Another way of writing the above function 
const App = ({ name, age, space }) => < div > Hello from { name }
whose age is { age - 10 } { space }
years old. < /div>;
 */



/* function App(props) {
    return <div >
        Hello from { props.name }
    whose age is { props.age - 10 } { props.space }
    years old. <
        /div>
} */



/* function App() {
    return <div >
        Hello from App.js UPDATED <
        div > Another Div < /div> <
        /div>
} */


export default App;