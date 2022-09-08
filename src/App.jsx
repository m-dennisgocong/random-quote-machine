import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';
import './App.css';

const App = () => {

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
        <DisplayQuote quotes={quotes} isLoading={isLoading} />
      </main>
    </div>
  )
}

export default App
