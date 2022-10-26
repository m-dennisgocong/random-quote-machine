import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';
import './App.css';

const App = () => {

  const [randomQuote, setRandomQuotes] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchQuote = async () => {
    const result = await axios(`https://api.quotable.io/random`) 
    setRandomQuotes(result.data);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchQuote();
    },[]);
  
  return (
    <>
        { isLoading ? <h1> LOADING... </h1> : 
          <main id="quote-box">
            <DisplayQuote randomQuote={randomQuote} fetchQuote={fetchQuote}/> 
          </main>
        }
    </>  
  )
}

export default App
