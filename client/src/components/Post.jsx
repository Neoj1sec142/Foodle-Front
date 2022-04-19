import { Link } from 'react-router-dom'

const Post = ({post}) => {

    return (
        <div className='post-card-container'>
            <Link to={`/post/${post.id}`} >
                <img src={post.image} style={{maxWidth: '400px'}} alt='post img' />
                <p>{post.description}</p>
                <button>Delete Post</button>
            </Link>
        </div>
    )
}

export default Post