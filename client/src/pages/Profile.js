
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetail } from '../services/UserServices'



const Profile = (props) => {
     
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    
    
    
    useEffect(() => {
        // if(props.user){
        const getData = async () => {
            const data = await GetUserDetail(props.user.id)
            console.log(data)
            setUser(data)
        }
        getData()
        // console.log(data)
        
    }, [props.user])
    
    console.log(user.id)

    return(
        <div className='user-profile'>
            <div className='profile-banner'>
            <h1> Profile Page </h1>
            <h2>{user[0].fullname}</h2>
            </div>

        </div>
    )
}
export default Profile
