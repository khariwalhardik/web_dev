import React from 'react'
import { memo } from 'react'
const Navbar = ({adjective,getAdjective}) => {
    console.log("navbar rerendered")
  return (
    <div>
        i am the {adjective} navbar
        <button onClick={()=>getAdjective()}>{getAdjective()}</button>
        
    </div>
  )
}

export default memo(Navbar)
