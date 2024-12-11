import React from 'react';
import './Card.css';

const Card = ({ imgurl, duration, title, desc }) => {
    const cardStyle = {
    backgroundImage: `url(${imgurl})`, // Dynamically set background image
  };
  return (
    <div className="card" style={{border:'2px solid black',backgroundColor:'black',color:'white'}}>
        <div className="imgbox" style={cardStyle} ></div>
      <h3>{duration} days ago</h3>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>Read More</button>
    </div>
  );
};

export default Card;
