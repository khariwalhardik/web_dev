import React from 'react'
"use client"
const page = () => {
  const handleClick = async() => {
    let a=await fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify({name: 'Elon Musk', email: 'kk@gamil.com', message: 'Hello World'}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(a)
  }

  return (
    <div>
      I am home page but why this is not working
      {/* create the fomr */}
      <form action="" method="POST">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="_replyto" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit" onClick={handleClick}>Send</button>
      </form>
    </div>
  )
}

export default page

export const metadata = {
  title: 'Home Page',
  description: 'This is home page',
  keywords: 'home, page',
}