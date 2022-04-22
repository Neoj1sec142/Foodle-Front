import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import {AddPost} from '../services/PostServices'

const CreatePost = (props) => {
    // console.log(props, "PROPS")
    if (props.user){
        const id = props.user.id
    }
    const [post, setPost] = useState({
        title: '',
        image: '',
        description: '',
        recipeUrl: '',
        rating: 0
        // userId: id
    })
    const navigate = useNavigate()
    //const {id} = useParams()
    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value}) 
        console.log(post)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await AddPost(props.user.id, post) 
        // const res =
        // const data = await res.json()
        // console.log(data)
        navigate(`/feed`)
        setPost('')
    }
    const handleStars = (e) => {
        setPost({...post, rating: e})    
    }

    return(
        <div className="create-post">
            <form className='card-overlay centered' onSubmit={handleSubmit}>
                <h3>New Post</h3>

                 <div className="input-wrapper">
                     <p>Title</p>
                <input 
                    onChange={handleChange}
                    type='text'
                    value={post.title}
                    name='title'
                    placeholder="Title Here..."
                    maxlength='255'
                    required
                />
                    </div>
                 <div className="input-wrapper">
                 <p>Image (Url)</p>
                <input 
                    onChange={handleChange}
                    type='url'
                    value={post.image}
                    name='image'
                    placeholder="Add a Picture"
                    maxlength='255'
                    required
                />
                    </div>
                <div className="input-wrapper">
                <p>Recipe Link</p>
                <input
                    onChange={handleChange}
                    type='url'
                    value={post.recipeUrl}
                    name='recipeUrl'
                    placeholder="Include a Link"
                    maxlength='255'
                /> 
                     </div>
                 <div className="input-wrapper">
                 <p>Description</p>
                    <textarea
                    onChange={handleChange}
                    value={post.description}
                    name="description"
                    placeholder="Tell Us About It..."
                /> 
            <div className="input-wrapper">
            <p>Rating</p>
                <ReactStars
                    onChange={handleStars}
                    size={24}
                    count={5}
                    color2={'#ffd700'}
                    className={'stars'}
                    value={post.rating}
                    name='rating'
                    half={false}
                />
                    </div>
                     </div>
                <div className='input-wrapper center'>
                    <button type='submit'>Save</button>
                </div>
            </form>
            </div>
             

        
    )
}
export default CreatePost
