import { Link } from 'react-router-dom'
import { DeletePost } from '../services/PostServices'

const Post = ({post}) => {

    return (
        <div className='post-card-container' key={post.id}>
            <Link to={`/details/${post.id}`} >
                <img src={post.image} alt='post img' />
                <p>{post.title}</p>
            </Link>
            <button 
                    onClick={() => {DeletePost(post.id)
                    window.top.location.reload(true)}}
                    key={post.id}
            >Delete Post</button>
        </div>
    )
}

export default Post