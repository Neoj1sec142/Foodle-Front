import { useNavigate } from 'react-router-dom'
// import Welcome from '../assets/foodle-background.jpeg'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <h1 id='title'>Foodle </h1>
      <h2 id='login-description'> Welcome to Foodle! Click below to log in.</h2>
      {/* <img src={Welcome} alt="welcome"/> */}

      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here To Sign 
        </button>
      </section>
    </div>
  )
}

export default Home