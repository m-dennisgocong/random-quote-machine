import React,{useEffect, useState} from "react";
import './DisplayQuote.css';

const DisplayQuote = ({randomQuote, isLoading, fetchQuote}) => {

  const [quote,setQuote] = useState({content : "", author : ""});

  useEffect(() => {
    setQuote({...quote, ...randomQuote});      
  },[randomQuote]);

  return isLoading ? <h1> Loading... </h1> : 
  <>
    <blockquote id="text">
      <p><q>{quote.content}</q> </p>
      <cite id="author">- {quote.author}</cite>
    </blockquote>
    <div className="buttonContainer">
      <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&text='+encodeURIComponent('"'+quote.content+'" - '+quote.author)} target="_top" className="shareTweet"><i className="fa fa-twitter" title="Share to Twitter!"></i></a>
      <a onClick={fetchQuote} id="new-quote"><i className="fa fa-random" aria-hidden="true" title="New Random Quote"></i></a>
    </div>
  </>
}
export default DisplayQuote;