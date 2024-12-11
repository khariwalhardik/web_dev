import { useState ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState('cool')
  // const getAdjective = () => {
  //   return "good"
  // }
  //this getAdjective function will be called on every render of the component even though it is not used in the component or the content remains the same 
  //so use UseCallback hook to prevent this

  // const getAdjective = useCallback(() => {
  //   return "good" +count;
  // }
  // ,[]) //empty array means the function will be created only once and will not be recreated on every render

  const getAdjective=() => {
    return "good" +count;
  }

  return (
    <>
      <div>
        <Navbar adjective="cool" getAdjective={getAdjective} />
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
