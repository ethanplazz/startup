import React from 'react';
import { getRandomQuote } from '../api';
import './about.css';

export function About(props) {
  const [quote, setQuote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadRandomQuote();
  }, []);

  async function loadRandomQuote() {
    setLoading(true);
    const quoteData = await getRandomQuote();
    setQuote(quoteData);
    setLoading(false);
  }

  return (
    <main className='about-page'>
      <header>
        <h1>About the Author</h1>
      </header>

      <div style={{ 
        marginBottom: '30px', 
        padding: '20px', 
        backgroundColor: 'rgba(44, 95, 111, 0.1)',
        borderLeft: '4px solid #2c5f6f',
        borderRadius: '4px',
        textAlign: 'center'
      }}>
        <h2>Inspirational Quote of the Day</h2>
        {loading ? (
          <p>Loading quote...</p>
        ) : quote ? (
          <div>
            <p style={{ fontSize: '1.2em', fontStyle: 'italic', margin: '20px 0' }}>
              "{quote.content}"
            </p>
            <p style={{ color: '#666', fontWeight: 'bold' }}>
              — {quote.author}
            </p>
          </div>
        ) : null}
        
        <button 
          onClick={loadRandomQuote}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#2c5f6f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Get New Quote 💭
        </button>
      </div>

      <p>
        Thanks for visiting my website! I'm an avid fly fisherman who has spent
        countless hours on the Provo River and surrounding waters, and I built
        this site to share what I've learned so others can enjoy the sport as
        much as I do. Here you'll find tips, maps, and information to help you
        have a successful day on the water, whether you're new to fly fishing or
        already experienced. Don't forget to share your own catches by posting
        them here—I'd love to see the fish you land and help build a community
        of anglers who enjoy and respect these amazing rivers.
      </p>
    </main>
  );
}