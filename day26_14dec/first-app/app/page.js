"use client"
import React from 'react'
//by default all components in next js are server components that means they are rendered on server side
//if you want to render component on client side then we can use "use client"
const page = () => {
  console.log("This is client side rendered component")
  // when we remove the "use client" then this console will not be printed in the console
  //we can also import client side components in server side components but we can not import server side components in client side components
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
      i am home page with count value = {count}
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
    </div>
  )
}

export default page
