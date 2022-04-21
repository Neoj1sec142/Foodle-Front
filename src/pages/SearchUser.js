import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { GetUsers, GetUserDetailByUsername, GetFollowersByUserId, GetFollowingByFollowerId, FollowUser, UnfollowUser } from '../services/UserServices'

const SearchUser = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const thisProfileUser = params.username

    const [allUsers, setAllUsers] = useState([])
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])
    const [profileUser, setProfileUser] = useState({})

    // User Effect
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

    useEffect(() => {
        const getAllUsers = async (e) => {
            
            const all = await GetUsers()
            setAllUsers(all.data)
            console.log("ALL USERS", allUsers)
        }
        getAllUsers()        
    }, [])

    return(
        <div className='search-user-page'>
            {}

        </div>
    )
}
export default SearchUser