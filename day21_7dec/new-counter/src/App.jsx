import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)//this is called a hook and it is used to create a state variable and the variable count is also changed in the rendered output
  

  return (
    <>
      <div className="card">
        <div className="box">The value of count is {count}</div>
          {/* i will create the buttons decrease and Increase */}
        <div className="buttons">
          {/* <div  onClick={setCount(count-1)}>Decrease</div> */}
          {/* <button  onClick={setCount(count+1)}>Increase</button> */}
          <button onClick={()=>{setCount(count+1);}}>Increase</button>
          <button onClick={()=>{setCount(count-1);}}>Decrease</button>
        </div>
      </div>

    </>
  )
}

export default App
