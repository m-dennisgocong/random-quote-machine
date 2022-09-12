import './DisplayQuote.css';

const DisplayQuote = ({randomQuote,fetchQuote}) => {
  const {content, author} = randomQuote;
  return( 
  <>
    <blockquote id="text">
      <p><q>{content}</q> </p>
      <cite id="author">- {author}</cite>
    </blockquote>

    <div className="buttonContainer">
      <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&text='+encodeURIComponent('"'+content+'" - '+author)} target="_top" className="shareTweet"><i className="fa fa-twitter" title="Share to Twitter!"></i></a>
      <a onClick={fetchQuote} id="new-quote"><i className="fa fa-random" aria-hidden="true" title="New Random Quote"></i></a>
    </div>
  </>
  );
}
export default DisplayQuote;