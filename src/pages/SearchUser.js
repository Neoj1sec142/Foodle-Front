import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetUsersWithFollowers, GetUserDetailByUsername, GetFollowersByUserId, GetFollowingByFollowerId, FollowUser, UnfollowUser } from '../services/UserServices'

const SearchUser = (props) => {
    //console.log('PROPS', props)

    const [allUsers, setAllUsers] = useState([])
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
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const handleClick = async (e) => {
        e.preventDefault()        
        const searches = allUsers.filter((item) => item.username.toLowerCase().includes(search.toLowerCase()))
        setResults(searches)
        setSearch('')
        console.log("RESULTS", searches)
    }
    
    if (allUsers.length) {

    return(
        <div className='feed-page'>
            <div className='input-wrapper'>
             <input 
                className='search-user-bar'
                onChange={(e) => handleChange(e)}
                value={search}
                maxLength='255'
                name='username'
                placeholder='Search Users'
            />
            <button onClick={(e) => handleClick(e)}>GO</button>
            </div>

            {results.map((res) => (
                <div className='profile-info'>
                    {res.profileImg ?
                        <div className='profile-img-container' style={{backgroundImage: `url(${res.profileImg})`}}></div>
                        :
                        <div className='profile-img-container'></div>
                    }
                    <div className='profile-info-container'>
                        <h2><Link to={`/profile/${res.username}`}>{res.username}</Link></h2>
                        <div>
                            <span>Followers: {res.followers.length}</span>
                            <span>Following: {res.following.length}</span>
                        </div>
                    </div>
                </div>
            ))}
            {!results.length ?  
                <div>
                    <h2> All Users</h2> 
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
                : <div></div> 
            }
        </div>
    )
 } else {
     <div> 
         loading...
     </div>
 }
}
export default SearchUser

