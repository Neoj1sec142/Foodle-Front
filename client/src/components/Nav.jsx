import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Logged in as {user.username}!</h3>
        <Link to="/feed">Feed</Link>
        {/* <Link to={`/detail/`}>Details</Link> */}
        <Link to={`/profile/${user.username}`}>Profile</Link>
        <Link to="/create">Create</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://avatars.dicebear.com/api/jdenticon/app.svg"
            alt="welcome banner"
          />
          {/* <img src="../assets/food-icon.png" alt="banner" /> */}
        </div>
      </Link>
      <div className="Foodle-header">
          <h1>Foodle</h1> 
        </div>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav
