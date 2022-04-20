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
//import Post from '../components/Post'
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
        console.log(user_id)
        e.preventDefault()
        props.uploadComment(user_id, post_id, props.postDetailState.newComment)
        props.toggleMoreComment(!props.postDetailState.moreComment)
    }
    
    const handleChange = async (e) => {
        const newComment = props.postDetailState.newComment
        await props.updateComment({...newComment, [e.target.name]: e.target.value })
        console.log(newComment)
    }
    
    //console.log(props.user, "user")
    const post = props.postDetailState.postDetail
    // console.log(post, "POST")
    if (post.id){
    return(
        <div className='post-detail' >
            {/* {props.postState.posts.map((post) => (
                <Post post={post} />
            ))} */}
             {/* 
                {props.postDetailState.comments.map((comm) => (
                <Comment rating={comm.rating} comment={comm.comment} key={comm._id} />
                ))} */}
            <img src={post.image} style={{width: '300px'}}/>
            <h3>Title: {post.title}</h3>
            <h3>Url: {post.recipeUrl}</h3>
            <h3>Rating: {post.rating}</h3>
            <p>Description: {post.description}</p>
            <h5>Posted by User: {post.userId}</h5>
            {props.postDetailState.moreComment && (
                <div>
                    <ReactStars
                        onChange={''}
                        size={24}
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
            <button onClick={handleSubmit}>
                {props.postDetailState.moreComment ? 'Send' : 'Add a Comment'}
            </button>
        </div>
        )
    }else {
        return (
            <div>Loading......</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)