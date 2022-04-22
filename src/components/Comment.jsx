import ReactStars from 'react-stars'

const Comment = ({rating, comment, commentor}) => {

    return (
        <div className='comment-wrapper'>
            <h5>Comment By: {commentor}</h5>
            <p>{comment}</p>
            <ReactStars value={rating} edit={false} size={24} color2={'#ffd700'} />
        </div>
    )
}

export default Comment