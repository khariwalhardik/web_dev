import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums=new Array(100_000).fill(0).map((_,i)=>{
  return {
    index:i,
    ismagical:(i===77777), 
  }
});

function App() {
  const [count, setCount] = useState(0)
  const [numbers,setNumbers]=useState(nums);

  // const magicalNumbers=numbers.filter((num)=>num.ismagical===true);//expensive operation,but whenever state of count changes, this will be re-evaluated, 
  //but we don't want to re-evaluate this expensive operation again and again, so we use useMemo
  const magicalNumbers=useMemo(()=>numbers.find((num)=>num.ismagical===true),[ numbers]);
  //the dependecy array is numbers , whenever numbers changes, re-evaluate this,
  return (
    <>
      <div>
        magical numbers:{magicalNumbers.index}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
