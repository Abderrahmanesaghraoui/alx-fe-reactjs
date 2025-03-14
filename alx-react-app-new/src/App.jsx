import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import React from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
            <WelcomeMessage />
        </div>
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
        <div>
            <UserProfile name="Abderrahmane" age="26" bio="im a front-end student 
            free palestine" />
        </div>
        <div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>React Counter App</h1>
      <Counter />
    </div>
    </>


  )
}

export default App
