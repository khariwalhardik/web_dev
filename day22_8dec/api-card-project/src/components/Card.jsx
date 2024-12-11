import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <div className="box">
        <div className='id flex'>Card Id:{props.id}</div>
        <div className='user flex'>Card User Id:{props.userId}</div>
        <div className='title flex'>Card Title:{props.title}</div>
        <div className='body flex'>Card Body:{props.body}</div>
      </div>
    </div>
  )
}

export default Card
