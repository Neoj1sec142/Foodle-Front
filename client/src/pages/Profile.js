import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUsers, GetUserDetail } from '../services/UserServices'


const mapStateToProps = ({ userState }) => {
    return { userState }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserDetail: (id) => dispatch(LoadUserDetails(id))
    }
}

const Profile = (props) => {

    const [users, setUsers] = useState([])
    //const [userDetails, setUserDetails] = useState([])

    


    const { id } = useParams()
    console.log(users.user_id)

    // useEffect((id) => {
    //     props.fetchUserDetail(id)
    //    
        
    //   }, [])
      console.log(users)

    return(
        <div className='user-profile'>
            <div className='profile-banner'>
            {/* <h2>{props.userState}</h2> 
            <h4>{props.userState.user.image}</h4> */}
            <h1> Profile Page </h1>
            </div>

        </div>
    )
}
//export default Profile
export default connect(mapStateToProps, mapDispatchToProps)(Profile)