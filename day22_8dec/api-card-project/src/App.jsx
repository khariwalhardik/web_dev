import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);//initialize displayedCards as an empty array to store the cards that will be displayed

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    padding: '1rem',
  };

  const addCard = () => {
    if (displayedCards.length < data.length) {
      const nextCard = data[displayedCards.length]; // Get the next card data
      setDisplayedCards([...displayedCards, nextCard]); // Add it to displayedCards
    } else {
      alert('No more cards to add');
    }
  };
  const RemoveCard = () => {
    if (displayedCards.length > 0) {
      setDisplayedCards(displayedCards.slice(0, -1)); // Remove the last card
    } else {
      alert('No cards to remove');
    }
  };
  const stylebtn={
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  return (
    <>
      <h1>This is my page</h1>
      <button
        onClick={() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setData(data));
        }}
      >
        Fetch data
      </button>
        <button onClick={addCard} style={stylebtn}>Add Card</button>
        <button onClick={RemoveCard} style={stylebtn}>Remove Card</button>
      <div className="container" style={containerStyle}>
        {/* Render cards dynamically */}
        {displayedCards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} userId={card.userId} body={card.body} />
        ))}
      </div>

    </>
  );
}

export default App;
