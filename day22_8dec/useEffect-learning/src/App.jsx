import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [x, setx] = useState()
  const [y, sety] = useState()
  const [result, setresult] = useState(0)
  const [form, setform] = useState({email:'',password:''})
  //this is will run on every render
  // useEffect(() => {
  //   alert('Component is mounted')
  // })

  // //this will run only once when component is mounted, run for first render only
  // useEffect(() => {
  //   alert('Component is mounted')
  // }, [])

  // //this will run only when x is updated
  // useEffect(() => {
  //   alert('x is updated')
  // }, [x])

  // //this will run only when y is updated
  // useEffect(() => {
  //   alert('y is updated')
  // }, [y])
  //we can link use effect with different states



  //using useref to store previous value
  const a = useRef(0)
  useEffect(() => {
    a.current = a.current + 1;
    console.log(a.current)
  }, [result])
  //if we did not use useRef, the value of a will be 0 on every render and will not be updated


  //when we changed the value of state variable, the component will re-render but when we use useRef, the value will be updated but the component will not re-render

  //other use of useRef is to refernce the dom element
  const btnref = useRef(null)
  useEffect(() => {
    btnref.current.style.backgroundColor = 'red'
  }, [])
  function changeColor(ref) {
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    ref.current.style.backgroundColor = `rgb(${a},${b},${c})`;
    // ref.current.style.backgroundColor ;
  }


  const buttonstyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: '5px',
  }
  const handleChange = (e) => {
    setform({...form,[e.target.type]:e.target.value})
    console.log(form)
  } 
  return (
    <>
      <Navbar result={result} />
      <h1>Calculator</h1>
      <div className="calculator">
        <input
          type="number"
          value={x}
          onChange={(e) => setx(Number(e.target.value))}
        />
        {/* we are using onChange event to update the input value in the state variable */}
        <input
          type="number"
          value={y}
          onChange={(e) => sety(Number(e.target.value))}
        />
        <div style={buttonstyle}>
          <button ref={btnref} onClick={() => setresult(x + y)}>+</button>
          <button onClick={() => setresult(x - y)}>-</button>
          <button onClick={() => setresult(x * y)}>*</button>
          <button onClick={() => setresult(x / y)}>/</button>
          <button onClick={() => { setx(0); sety(0); setresult(0) }}>C</button>
          <button onClick={() => setresult(result + 1)}>++</button>
          <button onClick={() => setresult(result - 1)}>--</button>
          <button onClick={() => setresult(result * result)}>x^2</button>
          <button onClick={() => setresult(Math.sqrt(result))}>sqrt</button>
          <button onClick={() => setresult(x ** y)}>x^y</button>
          <button onClick={() => setresult(x % y)}>%</button>
          <button onClick={()=>{changeColor(btnref);}}>Change Color</button>
        </div>
        <h2>Result: {result}</h2>
      </div>
      <h1>Form</h1>
      <div>
        <input type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
        <input type="password" placeholder="Enter password" value={form.password} onChange={handleChange} />
        <h2>Email: {form.email}</h2>
        <h2>Password: {form.password}</h2>
      </div>
    </>
  )
}

export default App
