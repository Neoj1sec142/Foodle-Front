
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import { LoadUserDetails } from '../store/actions/UserActions'
import { GetUserDetail } from '../services/UserServices'
import { GetPostByUserId } from '../services/PostServices'


const Profile = (props) => {
     
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    
    console.log(props, "PROPS")
    
    useEffect(() => {
        // e.prevent.default()
        if(props.user){
            const getUserData = async () => {
                const data = await GetUserDetail(props.user.id)
                
                setUser(data)
            }
            getUserData()
        }
    }, [props.user])

    // useEffect(() => {
    //     const getPostData = async () => {
    //         const posts = await GetPostByUserId(props.user.id)
    //         //console.log(posts)
    //         setPosts(posts)
    //     }
    //     getPostData()
    // }, [props.user])
    
    console.log(user, "BEFORE RETURN")

    return(
        <div className='user-profile'>
            {/* {user.map((u) => ( */}
            <div className='profile-wrapper'>
                <div className='profile-banner'>
                    <div className='profile-info'>
                    <h1> Profile Page </h1>
                    <h2>{user[0].fullname}</h2>
                    <h3>{user[0].email}</h3>
                    <h3>{user[0].username}</h3> 
                    </div>
                    {/* {posts.map((post) => (
                    <div>
                        <h3>{post}</h3>
                    </div> */}
                    {/* ))} */}
                </div>
            </div>
            {/* ))} */}
        </div>
    )
}
export default Profile
