import { connect } from 'react-redux'
import {
    LoadOnePostDetail,
    LoadPostDetail,
    UploadComment,
    UpdateComment,
    ToggleMoreComment
  } from '../store/actions/PostDetailActions'
import {LoadPosts} from '../store/actions/PostActions' 
import { useEffect } from 'react'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'


const mapStateToProps = ({  postState, postDetailState }) => {
    return {  postState, postDetailState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => dispatch(LoadPostDetail(id)),
        fetchOnePostDetail: (id) => dispatch(LoadOnePostDetail(id)),
        updatePostState: (id) => dispatch(LoadPosts(id)),
        uploadComment: (user_id, post_id, newComment) => dispatch(UploadComment(user_id, post_id, newComment)),
        updateComment: (comment) => dispatch(UpdateComment(comment)),
        toggleMoreComment: (value) => dispatch(ToggleMoreComment(value))
    }
}

const PostDetail = (props) => {

    const {post_id} = useParams()
    //for postState
    useEffect(() => {
        const GetPost = async () => {
            await props.fetchOnePostDetail(post_id)
            props.updatePostState(post_id)
        }
        GetPost()
    }, [post_id])

    //for postDetailState
    // useEffect(() => {
    //     const GetPostDetail = async () => {
    //         await props.fetchPostDetail(post_id)
    //     }
    //     GetPostDetail()
    // }, [post_id])
    
    const handleSubmit = (e) => {
        const user_id = props.user.id
        //console.log(user_id)
        e.preventDefault()
        if (props.postDetailState.moreComment){
            props.uploadComment(user_id, post_id, props.postDetailState.newComment)
            window.top.location.reload(true)
        }
        props.toggleMoreComment(!props.postDetailState.moreComment)
    }
    
    const handleChange = async (e) => {
        const newComment = props.postDetailState.newComment
        await props.updateComment({...newComment, [e.target.name]: e.target.value })
        //console.log(newComment)
    }
    const handleStars = async (e) => {
        const newComment = props.postDetailState.newComment
        await props.updateComment({...newComment, rating: e})
    }
    
    //console.log(props.user, "user")
    const post = props.postDetailState.postDetail
    console.log(post, "POST")
    if (post.id){
    return(
        <div className='post-detail'>
            
            <h3>
                {post.title ? 
                    <span className='post-title'>
                        {post.title}
                    </span> 
                : 
                    <span className='post-no-title'>
                        (No title)
                        </span>
                }
                </h3>
            <h5>Posted by: {post.User.username}</h5> 
            <img src={post.image} alt='mouth-watering dish'/>
            <h3>Url: <a href={post.recipeUrl} target="_blank"> {post.recipeUrl} </a></h3>
            <h3>My Rating: {post.rating}</h3>
            <p>Description: {post.description}</p>
            
            {props.postDetailState.moreComment && (
                <div>
                    <ReactStars
                        onChange={handleStars}
                        size={24}
                        count={5}
                        color2={'#ffd700'}
                        className={'stars'}
                        half={false}
                        name='rating'
                        value={props.postDetailState.newComment.rating}
                        />
                    <textarea 
                        onChange={handleChange}
                        name='comment'
                        value={props.postDetailState.newComment.comment}
                        placeholder="Add your thoughts..."
                        />
                </div>
            )}
            <button onClick={(e)=> handleSubmit(e)}>
                {props.postDetailState.moreComment ? 'Send' : 'Add a Comment'}
            </button>
           
            <div className='comments-all-container'>
                {props.postDetailState.postDetail.Comments.map((comm) => (
                    <Comment commentor={comm.User.username} rating={comm.rating} comment={comm.comment} key={comm.id} /> 
                    
                ))} 
            </div>
            
        </div>
        )
    }else {
        return (
            <div>Loading......</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)