import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GetUsers, } from '../services/UserServices'

const SearchUser = (props) => {
    const navigate = useNavigate()



    const [allUsers, setAllUsers] = useState([])
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])

    // allUsers and profileUser Effect//
    useEffect(() => {
        const getAllUsers = async () => {
            const all = await GetUsers()
            setAllUsers(all)
            
        }
        getAllUsers()        
    }, [])

    console.log("ALL USERS", allUsers)
// console.log()
    if (allUsers.length) {

    return(
        <div className='feed-page'>
            {allUsers.map((user, i) => (
                <div className='profile-info' key={i}>
                    {user.profileImg ?
                    <div className='profile-img-container' style={{backgroundImage:`url(${user.profileImg})`}}></div> 
                  :
                  <div className='profile-img-container'></div>
                }
                <div className='profile-info-container'>
                <h2><Link to={`/profile/${user.username}`}>{user.username}</Link></h2>
                            <div>
                                <span> Followers: {followers.length} </span> 
                             | <span> Following: {following.length} </span>
                            </div>
                </div>
                </div>
            ))}

        </div>
    )
 } else {
     <div> 
         loading...
     </div>
 }
}
export default SearchUser

