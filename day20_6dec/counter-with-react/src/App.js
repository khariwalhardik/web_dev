import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  // useState is a hook that lets you add React state to function components
  const [value, setValue] = useState(0);//created a state variable value and a function setValue to update the value and default value is 0
  //the variable we can use in DOM and also can be changed is called state variable
  return (
    // this syntax is called JSX, it is a syntax extension for JavaScript and it is used to write HTML in React
    <div className="App">
     <Navbar Logotext={"Reading By HK"}/>
      {/* we use className instead of class in JSX because class is a reserved keyword in JavaScript */}
      {/* Hey {value}, Welcome to React! */}
      <div className='counter'>{value}</div>
      <button onClick={()=>{setValue(value+1);}}>Click me</button>
    <Footer/>
    </div>
  );
}

export default App;
