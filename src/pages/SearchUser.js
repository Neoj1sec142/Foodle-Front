import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GetUsers, GetUserDetailByUsername, GetFollowersByUserId, GetFollowingByFollowerId, FollowUser, UnfollowUser } from '../services/UserServices'

const SearchUser = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const thisProfileUser = params.username

    const [allUsers, setAllUsers] = useState([])
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])
    const [profileUser, setProfileUser] = useState({})

    // allUsers and profileUser Effect//
    useEffect(() => {
        const getAllUsers = async () => {
            const all = await GetUsers()
            setAllUsers(all)
            
        }
        getAllUsers()        
    }, [])

    useEffect(() => {
        if(thisProfileUser){
            const getUserData = async () => {
                const data = await GetUserDetailByUsername(thisProfileUser)
                setProfileUser(data)
            }
            getUserData()
        }
    }, [thisProfileUser, props.user])
    
    // Follower Effect
    useEffect(() => {
        const getFollowers = async () => {
            if (profileUser.id) {
                const followMe = await GetFollowersByUserId(profileUser.id)
                setFollowers(followMe)
                console.log("FOLLOWERS", followers)
            }
        }
        const getFollowing = async () => {
            if (profileUser.id) {
                const amFollowing = await GetFollowingByFollowerId(profileUser.id)
                setFollowing(amFollowing)
                console.log("FOLLOWING", following)
            }
        }
        getFollowers()
        getFollowing()
    },[profileUser])

    console.log("ALL USERS", allUsers)
// console.log()
    if (allUsers.length) {

    return(
        <div className='feed-page'>
            {allUsers.map((user, i) => (
                <div className='user-search' key={i}>
                    {user.profileImg ?
                    <div className='profile-img-container' style={{backgroundImage:`url(${user.profileImg})`}}></div> 
                  :
                  <div className='profile-img-container'></div>
                }
                <h2><Link to={`/profile/${user.username}`}>{user.username}</Link></h2>
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