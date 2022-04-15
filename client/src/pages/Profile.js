import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadUsers } from '../store/actions/UserActions'
import { GetUsers } from '../services/UserServices'

const mapStateToProps = ({ userState }) => {
    return { userState }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        GetUsers: (id) => dispatch(LoadUsers(id))
    }
}

const Profile = () => {
    const { id } = useParams()

    
    return(
        <div className='user-profile'>


        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)