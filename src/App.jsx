import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [quote, setQuote] = useState([]);

  useEffect(()=>{

  });

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
