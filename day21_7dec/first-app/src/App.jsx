import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)
  const cardStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center',
    gap: '10px',
    padding: '20px',
    backgroundColor: 'black',  }
  return (
    <>
      {/* you have to close all the tags in the jsx */}
      <Navbar />
      <main>
        {/* This is my main content of the webpage */}
        <div className="cards" style={cardStyle} >
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        <Card imgurl={"https://th.bing.com/th/id/OIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ?w=141&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"} duration={5} title={"Animal"} desc={"this is a shit"}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
