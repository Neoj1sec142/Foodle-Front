import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadUserDetails } from '../store/actions/UserActions'


const mapStateToProps = ({ userState }) => {
    return { userState }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (id) => dispatch(LoadUserDetails(id))
    }
}

const Profile = (props) => {
    const { id } = useParams()


    useEffect(() => {
        props.fetchUsers(id)
      }, [id])

    return(
        <div className='user-profile'>
            <div className='profile-banner'>
            <h2>{props.userState.user.username}</h2>
            <h4>{props.userState.user.image}</h4>
            <h1> Profile Page </h1>
            </div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)