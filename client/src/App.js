import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import PostPage from './pages/PostPage'
import { CheckSession } from "./services/Auth";
import './styles/App.css';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </div>
      <div className='main'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/feed"
            element={<PostPage user={user} authenticated={authenticated} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
