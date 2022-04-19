import { Link } from 'react-router-dom'
import { DeletePost } from '../services/PostServices'

const Post = ({post}) => {

    return (
        <div className='post-card-container' key={post.id}>
            <Link to={`/post/${post}`} >
                <img src={post.image} style={{maxWidth: '400px'}} alt='post img' />
                <p>{post.description}</p>
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