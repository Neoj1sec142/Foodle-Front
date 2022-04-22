import ReactStars from 'react-stars'

const AddPost = ({ setNewPost, newPost, handleSubmit }) => {

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <ReactStars
                onChange={''}
                size={24}
                color2={'#ffd700'}
                className={'stars'}
                value={newPost.rating}
                half={false}
            />
            <textarea 
                onChange={(e) => setNewPost(e.target.value)} 
                value={newPost.image}
                placeholder="Add a recipe image..."                
            />
            <textarea 
                onChange={(e) => setNewPost(e.target.value)} 
                value={newPost.url}
                placeholder="Add a recipe url..."                
            />
            <button onClick={handleSubmit}>Add</button>
            </div>
        </form> 
        </div>
    )
}
export default AddPost