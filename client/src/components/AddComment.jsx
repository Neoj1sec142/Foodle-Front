

const AddComment = ({ setComment, comment, handleSubmit }) => {

    

    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                onChange={(e) => setComment(e.target.value)} 
                value={comment}
                placeholder="Add your thoughts..."                
            />
            <button onClick={handleSubmit}>Add</button>
        </form> 
    )
}
export default AddComment