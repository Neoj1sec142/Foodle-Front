import { useNavigate } from 'react-router-dom'
import Welcome from '../assets/programmer.jpeg'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <h1 id='title'>Foodle</h1>
      <img src={Welcome} alt="welcome"/>

      <section className="welcome-signin">
        <button onClick={() => navigate('/signin')}>
          Click Here To Sign In
        </button>
      </section>
    </div>
  )
}

export default Home