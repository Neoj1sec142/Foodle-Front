import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import FeedPage from './pages/FeedPage'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'
import Profile from './pages/Profile'
import { CheckSession } from "./services/Auth";
import './styles/App.css';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    //console.log('checkToken', user)
    
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
      //console.log(token, "TOKEN")
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
            element={<FeedPage user={user} authenticated={authenticated} />}
          />
          <Route path="/profile/:username"
            element={<Profile user={user} authenticated={authenticated} />}
          />
          <Route path="/create"
            element={<CreatePost user={user} authenticated={authenticated} />}
          />
          <Route path="/detail/:post_id"
            element={<PostDetail user={user} authenticated={authenticated} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
