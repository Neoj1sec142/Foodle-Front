import { Link, useNavigate } from 'react-router-dom'

const Post = ({post}) => {
const navigate = useNavigate();

    return (
        <div className='post-card-container' key={post.id} onClick={() => navigate(`/details/${post.id}`)}>
                <h3>{post.title}</h3>
                <img src={post.image} alt='post img' />

        </div>
    )
}

export default Post