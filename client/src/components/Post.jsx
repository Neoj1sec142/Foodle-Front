import { Link, useNavigate } from 'react-router-dom'

const Post = ({post}) => {
const navigate = useNavigate();

    return (
        <div className='post-card-container' key={post.id} onClick={() => navigate(`/details/${post.id}`)}>
                <img src={post.image} alt='post img' />
                <p>{post.title}</p>

        </div>
    )
}

export default Post