import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = (props) => {

  let navigate = useNavigate()
  
  const [formValues, setFormValues] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)

    console.log("handleSubmit PAYLOAD", payload)
    
    props.setUser(payload)
    props.toggleAuthenticated(true)
    setFormValues({ username: '', password: '' })
    navigate('/feed')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username:</label>
            <input
              onChange={handleChange}
              name="username"
              type="username"
              placeholder="jSmith123"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="*****"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.username || !formValues.password}>
            Sign In
          </button>
          <h5>Dont Have an Account? <Link to={'/register'}>Click to Register</Link></h5>
        </form>
      </div>
    </div>
  )
}

export default SignIn