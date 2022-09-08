import React,{useEffect, useState} from "react";
const DisplayQuote = ({quotes, isLoading}) => {

    const randomQuote = () => quotes[(Math.floor(Math.random() * quotes.length) + 1)];

    const [quote,setQuote] = useState({quote : "", author : ""});

    useEffect(() => {
      const getRandomQuote = randomQuote();
      setQuote({...quote, ...getRandomQuote});
    },[quotes]);

    const nextRandomQuote = () => {
      const getRandomQuote = randomQuote();
      setQuote({...quote, ...getRandomQuote});
    }

    return isLoading ? <h1> Loading... </h1> : 
      <>
        <blockquote id="text">
          <p>{quote.text}</p>
          <cite id="author">{quote.author}</cite>
        </blockquote>
        <button onClick={nextRandomQuote} id="new-quote"> Next </button>
        <a href="#" id="tweet-quote"> </a>
      </>
}
export default DisplayQuote;