import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [get, setGet] = useState([]);
  
  const fetchArticles = async () => {

    const res = await fetch("https://newsapi.org/v2/everything?q="+input+"&sortBy=popularity&sortBy=publishedAt&apiKey=f795cc1d719a4248b63c2c0fe22a083e");

    const data = await res.json();

    setGet(data.articles);
    console.log(data.articles);
  };

  return (
    <>
        <div className='nav'>
          <button onClick={fetchArticles}>Szukaj</button>
          <input type="text" placeholder="wpisz temat" onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className='box'>
        {get.map((article, index) => {
        if (index < 10) {
        console.log(new Date(article.publishedAt));
        return (
            <a className='article' href={article.url}>
              <p className='title'>Title: "{article.title}"</p>
              <p className='desc-cl'>description:</p>
              <p className='desc'>{article.description}</p>
              <img className='image' src={article.urlToImage} />
              <p className='auth'>Author: {article.author}</p>
              <p className='date'>Date: {article.publishedAt}</p>
              {/*<a className='link' href={article.url}>link</a>*/}
              {/*<p>Content?:{article.content}</p>*/}
            </a>
          )}
        }
      )}
          </div>
    </>
  );
}

export default App
