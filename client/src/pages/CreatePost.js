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
            <div className='card-overlay centered'>
            <div className="input-wrapper">
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
                 <div className="input-wrapper">
                    <textarea
                    onChange={handleChange}
                    value={post.description}
                    name="description"
                    placeholder="Tell Us About It..."
                /> 
                     </div>
                 <div className="input-wrapper">
                <input 
                    onChange={handleChange}
                    type='text'
                    value={post.title}
                    name='title'
                    placeholder="Title Here..."
                />
                    </div>
                 <div className="input-wrapper">
                <input 
                    onChange={handleChange}
                    type='text'
                    value={post.image}
                    name='image'
                    placeholder="Add a Picture"
                />
                    </div>
                <div className="input-wrapper">
                <input
                    onChange={handleChange}
                    type='text'
                    value={post.recipeUrl}
                    name='recipeUrl'
                    placeholder="Include a Link"
                /> 
                     </div>
            </div>
            <button onClick={handleSubmit}>
                {post ? `Send` : `Create a Post`}
            </button>
            </div>
             

        
    )
}
export default CreatePost
