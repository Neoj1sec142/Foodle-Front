import ReactStars from 'react-stars'

const Comment = ({rating, comment}) => {

    return (
        <div>
            <ReactStars value={rating} edit={false} size={24} color2={'#ffd700'} />
            <p>{comment}</p>
        </div>
    )
}

export default Comment