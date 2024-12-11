import React from 'react'
import Component1 from './Component1'
import {useContext} from 'react';
import { counterContext } from '../context/context'
const Button = () => {
  const value=useContext(counterContext);
  return (
    <div>
      <button onClick={()=>{value.setCount(value.count+1)}}><span><Component1/></span>I am a button</button>
    </div>
  )
}

export default Button
