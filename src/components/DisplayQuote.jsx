import React,{useEffect, useState} from "react";
const DisplayQuote = (props) => {

    const randomQuote = () => props.quotes[(Math.floor(Math.random() * props.quotes.length) + 1)];
    
    const [quote,setQuote] = useState({quote : "", author : ""});

    useEffect(() => {
      const getRandomQuote = randomQuote();
      setQuote({...quote, ...getRandomQuote});
    },[props.quotes]);

    const nextRandomQuote = () => {
      const getRandomQuote = randomQuote();
      setQuote({...quote, ...getRandomQuote});
    }

    return props.isLoading ? <h1> Loading... </h1> : 
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