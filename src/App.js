import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const services = fetch("127.0.0.1:3000/haircut-services")
  // useEffect(() => {
  //   const fetchDataForPosts = async () => {
  //     const response = await fetch(
  //       "127.0.0.1:3000/haircut-services"
  //     );

  //     let postsData = await response.json();
  //     console.log(postsData);

  //   };

  //   fetchDataForPosts();
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
