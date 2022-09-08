import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    const fetchQuote = async () => {
      const result = await axios(`https://type.fit/api/quotes`) 
      // console.log(result.data);
      setQuotes(result.data);
      setLoading(false);
      
    }
    fetchQuote();
  },[]);

  return (
    <div className="App">
      <main id="quote-box">
     
        <blockquote id="text">

          <p>{/* {quote text variable here} */}</p>

          <cite id="author"> 
        {/* author name variable here */}
          </cite>

        </blockquote>
        
        <button id="new-quote"> </button>
        <a href="#" id="tweet-quote"> </a>

      </main>
    </div>
  )
}

export default App
