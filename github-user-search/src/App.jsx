import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUserData } from './services/githubService';
import './App.css';
import { useState } from 'react';
import Search from './components/Search';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';
function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(query);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="app">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
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
