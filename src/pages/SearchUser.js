import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GetUsersWithFollowers, GetUserDetailByUsername, GetFollowersByUserId, GetFollowingByFollowerId, FollowUser, UnfollowUser } from '../services/UserServices'

const SearchUser = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const thisProfileUser = params.username
    //console.log('PROPS', props)

    const [allUsers, setAllUsers] = useState([])
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])
    const [profileUser, setProfileUser] = useState({})
    const [search, setSearch] = useState('')

    // allUsers and profileUser Effect//
    useEffect(() => {
        const getUsersWithFollowers = async () => {
            const all = await GetUsersWithFollowers()
            setAllUsers(all)
        }
        getUsersWithFollowers()        
    }, [])

    useEffect(() => {
        const getUserData = async () => {
            const data = await GetUserDetailByUsername(thisProfileUser)
            setProfileUser(data)
        }
        getUserData()
    }, [thisProfileUser, props.user])
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    // useEffect(() => {
    //     const getSearch = async (e) => {
    //         const searches = await GetUserDetailByUsername(search)
    //         console.log(searches.data)
    //         setSearch('')
    //     }
    //     getSearch()
    // }, [search])
    const handleClick = (e) => {
        setSearch('')
    }
    

    // console.log("ALL USERS", allUsers)

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
                                <span> Followers: {user.followers.length} </span> 
                                <span> Following: {user.following.length} </span>
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

