import { useNavigate } from 'react-router-dom'
// import Welcome from '../assets/foodle-background.jpeg'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <div className="welcome-card col card-overlay">
        <div className="Foodle-header"><h1>Foodle</h1></div>
        <h2 id='login-description'> Welcome to Foodle! Click below to log in.</h2>
        {/* <img src={Welcome} alt="welcome"/> */}

        <section className="welcome-signin">
          <button onClick={() => navigate('/signin')}>
            Click Here To Sign In 
          </button>
        </section>
      </div>
    </div>
  )
}

export default Home