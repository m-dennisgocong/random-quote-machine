import React,{useEffect, useState} from "react";
import TwitterLogo from './../assets/twitterLogo.svg';
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

    const shareTweet = () => {
      document.getElementById('tweet-quote').setAttribute('href','https://twitter.com/intent/tweet?hashtags=quotes&text='+encodeURIComponent('"'+quote.text+'" - '+quote.author))
    } 

    return isLoading ? <h1> Loading... </h1> : 
      <>
        <blockquote id="text">
          <p>{quote.text}</p>
          <cite id="author">{quote.author}</cite>
        </blockquote>
        <button onClick={nextRandomQuote} id="new-quote"> Next </button>
        <a onClick={shareTweet} id="tweet-quote" target="_top" title="Tweet this quote!" className="share"> <img src={TwitterLogo} alt="Twitter Logo" /></a>
        
      </>
}
export default DisplayQuote;