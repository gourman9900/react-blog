import logo from './logo.svg';
import './App.css';
// import Cards from './components/CardsNew'
import avatar from './avatar.jpg'
import { Contextpage } from '.';
import { useEffect, useState } from 'react';
import Cards from './components/CardsNew';
import Blogs from './components/Blogs';

function App() {
  const [view, setView] = useState("cards")
  const [blog, setBlog] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(json => setBlog(json)).catch(error => console.log(error))
  },[])
  return <>
    <Contextpage.Provider value={{ view: [view, setView], page: [page, setPage] }}>
      <div className='main'>
        <div className='navbar'>
          <div className='profile'>
            <img src={avatar}></img>
            <div className='heading'>
              <h2>Hi Reader,</h2>
              <p>Here's your News!</p>
              {console.log(blog)}
            </div>
          </div>
          <div className='view'>
            <h2>View Toggle</h2>
            <button>Cards</button>
            <button>Tiles</button>
          </div>
          <div className='feedback'>
            <p>Have a feedback?</p>
            <button>We're Listening!</button>
          </div>
        </div>
        <div className='blogs'>
          <Blogs blog={ blog} blogdelete={setBlog}/>
        </div>
      </div>
    </Contextpage.Provider>
  </>;
}

export default App;
