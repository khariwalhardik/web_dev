import React from 'react'

const Navbar = ({Logotext}) => {
  return (
    <div>
      <h1>{Logotext}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
