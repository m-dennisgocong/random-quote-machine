import React,{useEffect, useState} from "react";
import './DisplayQuote.css'

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
          <p><q>{quote.text}</q> </p>
          <cite id="author">- {quote.author}</cite>
        </blockquote>
        <div className="buttonContainer">
          <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&text='+encodeURIComponent('"'+quote.text+'" - '+quote.author)} target="_top" className="shareTweet"><i class="fa fa-twitter" title="Share Tweet"></i></a>
          <a onClick={nextRandomQuote} id="new-quote"><i class="fa fa-random" aria-hidden="true" title="New Random Quote"></i></a>
        </div>
      </>
}
export default DisplayQuote;