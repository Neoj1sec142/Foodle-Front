
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetailByUsername, GetFollowersByUserId, GetFollowingByFollowerId } from '../services/UserServices'
import { GetPostByUserId } from '../services/PostServices'
import Post from '../components/Post'


const Profile = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const thisProfileUser = params.username

    const [profileUser, setProfileUser] = useState({})
    const [posts, setPosts] = useState([])
    const [followers, setFollowers] = useState({})
    const [following, setFollowing] = useState({})
    
    console.log(props, "PROPS")
    
    useEffect(() => {
        if(thisProfileUser){
            const getUserData = async () => {
                const data = await GetUserDetailByUsername(thisProfileUser)
                setProfileUser(data)
            }
            getUserData()
        }
    }, [thisProfileUser, props.user])

    useEffect(() => {
        const getPostsByProfileUser = async () => {
          if (profileUser.id) {  
            const posts = await GetPostByUserId(profileUser.id) // FIX THIS
            // console.log("GETPOSTS BY PROF USER", profileUser, posts)
            setPosts(posts)
            }
        }
        console.log("ID", profileUser.id)
        const getFollowers = async () => {
            if (profileUser.id) {
                const followMe = await GetFollowersByUserId(profileUser.id)
                setFollowers(followMe)
            }
        }
        const getFollowing = async () => {
            if (profileUser.id) {
                const amFollowing = await GetFollowingByFollowerId(profileUser.id)
                setFollowing(amFollowing)
            }
        }

        getPostsByProfileUser()
        getFollowers()
        getFollowing()
        
    }, [profileUser])
    
    
    const goToUpdate = () => {
        navigate('update')
    }
    
    
    console.log("THIS PROFILE USER", thisProfileUser)
    
    if (props.authenticated && profileUser.id && posts.length && followers.length && following.length) {
    //   console.log("FOLLOWERS:", followers)
      const myFollowers = followers[0].followers
    //   console.log("FOLLOWING:", following)
      const amFollowing = following[0].following
    return(
        <div className='user-profile'>
            <div className='profile-wrapper'>
                <div className='profile-banner'>
                    <div className='profile-info'>
                        <div className='profile-img-container'> 
                            <img src={profileUser.profileImg} alt='thumbnail' />
                        </div>
                        <div className='profile-info-container'>
                            <h1> {profileUser.username} </h1>
                            <h4>Name: {profileUser.fullname}</h4>
                            <h4>Email: {profileUser.email}</h4>
                            <p>{profileUser.profileDescription}</p> 
                            <div>
                                <span> Followers: {myFollowers.length} </span> 
                             | <span> Following: {amFollowing.length} </span>
                            </div>
                            {props.user.username === thisProfileUser 
                                ? <button onClick={() => goToUpdate()}>Edit your profile</button> 
                                : "Follow button here"}
                        </div>
                    </div>
                    {posts.map((post, i) => (
                        <div className='post-container' key={i}>
                            <Post post={post} />
                        </div> 
                    ))}
                    
                </div>
            </div>
        </div>
    )
  } else {
      return (
          <div className='loading'>Loading...</div>
      )
  }  
}
export default Profile
