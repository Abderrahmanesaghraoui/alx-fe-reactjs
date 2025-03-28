import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUserData } from './services/githubService';
import './App.css';
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
        <div className="app">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error">{error}</p>}
      
      {userData && (
        <div className="user-profile">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            className="avatar"
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <a 
            href={userData.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="profile-link"
          >
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
