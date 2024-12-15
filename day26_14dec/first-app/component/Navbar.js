import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      i am navbar
      <ul>
        {/* when we use a ref it will reload the page but we dont want to reload the page */}
        {/* so we use link */}
        {/* link is a component that is provided by next js */}
        <li><Link href="/ghar">Home</Link> </li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
