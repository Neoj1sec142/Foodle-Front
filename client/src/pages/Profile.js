
import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetailByUsername, GetFollowersByUserId, GetFollowingByFollowerId, FollowUser, UnfollowUser } from '../services/UserServices'
import { GetPostByUserId } from '../services/PostServices'
import Post from '../components/Post'
import { DeletePost } from '../services/PostServices'


const Profile = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const thisProfileUser = params.username

    const [profileUser, setProfileUser] = useState({})
    const [posts, setPosts] = useState([])
    const [followers, setFollowers] = useState({})
    const [following, setFollowing] = useState({})
    const [followBtn, setFollowBtn] = useState(false)
    
    //console.log(props, "PROPS")
    
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
        
        getPostsByProfileUser()
        
    }, [profileUser])
    
    // FOLLOWER EFFECT
    useEffect(() => {
        const getFollowers = async () => {
            if (profileUser.id) {
                const followMe = await GetFollowersByUserId(profileUser.id)
                setFollowers(followMe[0].followers)
            }
        }
        const getFollowing = async () => {
            if (profileUser.id) {
                const amFollowing = await GetFollowingByFollowerId(profileUser.id)
                setFollowing(amFollowing[0].following)
            }
        }
        
        getFollowers()
        getFollowing()
        
    },[profileUser, followBtn])
    useEffect(() => {
        const checkIfFollowing = async () => {
            // if (followers){
            //     if (followers.filter((follower) => follower.id === props.user.id).length === 0 ){
            //         setFollowBtn(true)
            //     }else{
            //         setFollowBtn(false)
            //     }
            // }
            console.log("FOLLOWERS", followers)
        }
        checkIfFollowing()
    },[followers])
    
    const goToUpdate = () => {
        navigate('update')
    }
    
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) { 
            DeletePost(id)
            window.location.reload(false)
        }
    }
    const handleClick = (e) => {
        if (followers.filter((follower) => follower.id === props.user.id).length === 0 ){
            FollowUser(profileUser.id, props.user.id)
            setFollowBtn(true)
        }else{
            UnfollowUser(profileUser.id, props.user.id)
            setFollowBtn(false)
        }
    }

    

    //console.log("THIS PROFILE USER", thisProfileUser)
    
    if (props.authenticated && profileUser.id && posts.length ) {
      //console.log("FOLLOWERS:", followers)
    //   const myFollowers = followers[0].followers
    //    //console.log("FOLLOWING:", following)
    //   const amFollowing = following[0].following

     
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
                                <span> Followers: {followers.length} </span> 
                             | <span> Following: {following.length} </span>
                            </div>
                            {props.user.username === thisProfileUser 
                                ? <button onClick={() => goToUpdate()}>Edit your profile</button> 
                                : <button onClick={(e) => handleClick(e)}>
                                    { followBtn ? 'Unfollow' : 'Follow' }
                                  </button>}
                        </div>
                    </div>
                    {posts.map((post, i) => (
                        <div className='post-container' key={i}>
                            <Post post={post} />

                            {props.user.username === thisProfileUser && 
                                <button onClick={() => handleDelete(post.id)}>❌ Delete</button>
                            }
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
