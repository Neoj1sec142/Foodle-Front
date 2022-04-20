import ReactStars from 'react-stars'

const Comment = ({rating, comment, commentor}) => {

    return (
        <div>
            <ReactStars value={rating} edit={false} size={24} color2={'#ffd700'} />
            <p>{comment}</p>
            <h5>By: {commentor}</h5>
        </div>
    )
}

export default Comment