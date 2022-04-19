import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'
import {AddPost} from '../services/PostServices'

const CreatePost = (props) => {
    // console.log(props, "PROPS")
    if (props.user){
        const id = props.user.id
    }
    const [post, setPost] = useState({
        image: '',
        description: '',
        recipeUrl: '',
        rating: []
        // userId: id
    })
    const navigate = useNavigate()
  
    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value}) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        AddPost(props.user.id, post) 
        navigate(`/details/${post.id}`)
        setPost('')
    }

    return(
        <div className="create-post">
            <div>
                <ReactStars
                    onClick={null}
                    size={24}
                    color2={'#ffd700'}
                    className={'stars'}
                    value={post.rating}
                    name='rating'
                    half={false}
                />
                <textarea
                    onChange={handleChange}
                    value={post.image}
                    name='image'
                    placeholder="Add a Picture"
                />
                <textarea
                    onChange={handleChange}
                    value={post.description}
                    name="description"
                    placeholder="Tell Us About It..."
                /> 
                <textarea
                    onChange={handleChange}
                    value={post.recipeUrl}
                    name='recipeUrl'
                    placeholder="Include a Link"
                /> 
            </div>
            
            <button onClick={handleSubmit}>
                {post ? `Send` : `Create a Post`}
            </button>
             
        </div>
        
    )
}
export default CreatePost
