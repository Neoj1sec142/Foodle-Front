import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { GetUsersWithFollowers, GetUserDetailByUsername, GetFollowersByUserId, GetFollowingByFollowerId, FollowUser, UnfollowUser } from '../services/UserServices'

const SearchUser = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const thisProfileUser = params.username
    //console.log('PROPS', props)

    const [allUsers, setAllUsers] = useState([])
    //const [following, setFollowing] = useState([])
    //const [followers, setFollowers] = useState([])
    const [profileUser, setProfileUser] = useState({})
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])


    // allUsers and profileUser Effect///
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
    
    const handleClick = async (e) => {
        e.preventDefault()        
        // const searches = await GetUserDetailByUsername(search)
        const searches = allUsers.filter((item) => item.username.includes(search))
        setResults(searches)
        setSearch('')
        console.log("RESULTS", searches)
    }
    

    

    if (allUsers.length) {

    return(
        <div className='feed-page'>
             <input 
                className='search-user-bar'
                onChange={(e) => handleChange(e)}
                value={search}
                maxLength='255'
                name='username'
                placeholder='Search Users'
            />
            <button onClick={(e) => handleClick(e)}>GO</button>
            {results.map((res) => (
                <div>
                    <h2><Link to={`/profile/${res.username}`}>{res.username}</Link></h2>
                    <div>{res.profileImg}</div>
                    <h4>Followers: {res.followers.length}</h4>
                    <h4>Following: {res.following.length}</h4>
                </div>
            ))}
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

