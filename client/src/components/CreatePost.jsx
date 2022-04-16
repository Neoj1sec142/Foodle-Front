
const AddPost = ({ setNewPost, post, handleSubmit }) => {

    

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                onChange={(e) => setNewPost(e.target.value)} 
                value={post}
                placeholder="Add a recipe..."                
            />
            <button onClick={handleSubmit}>Add</button>
        </form> 
    )
}
export default AddPost