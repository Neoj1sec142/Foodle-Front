import { Link, useNavigate } from 'react-router-dom'
import { DeletePost } from '../services/PostServices'

const Post = ({post}) => {
const navigate = useNavigate();

    return (
        <div className='post-card-container' key={post.id} onClick={() => navigate(`/details/${post.id}`)}>
                <img src={post.image} alt='post img' />
                <p>{post.title}</p>
            <button 
                    onClick={() => {DeletePost(post.id)
                    window.top.location.reload(true)}}
                    key={post.id}
            >Delete Post</button>
        </div>
    )
}

export default Post