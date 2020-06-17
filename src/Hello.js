import React from 'react';
import './App.css';
import './hello.css'

//Another way of writing the above function 
const Hello = ({ fullName }) => {
    return <p className = "hello_para" > This para has been written by { fullName } < /p>;
}

export default Hello;