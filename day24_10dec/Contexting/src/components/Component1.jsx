import React from 'react'
import {useContext} from 'react';
import { counterContext } from '../context/context'
const Component1 = () => {
  const count=useContext(counterContext);
  return (
    <div>
      {count.count    };
    </div>
  )
}

export default Component1
