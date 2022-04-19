import { connect } from 'react-redux'
import {
    LoadOnePostDetail,
    UploadComment,
    UpdateComment,
    ToggleMoreComment
  } from '../store/actions/PostDetailActions'
import {LoadPosts} from '../store/actions/PostActions' 
import { useEffect } from 'react'
//import Post from '../components/Post'
import { useParams } from 'react-router-dom'


const mapStateToProps = ({  postState }) => {
    return {  postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOnePostDetail: (id) => dispatch(LoadOnePostDetail(id)),
        updatePostState: (id) => dispatch(LoadPosts(id)),
        uploadComment: (id, newComment) => dispatch(UploadComment(id, newComment)),
        updateComment: (comment) => dispatch(UpdateComment(comment)),
        toggleMoreComment: (value) => dispatch(ToggleMoreComment(value))
    }
}

const PostDetail = (props) => {

    // console.log(props, "PROPS")

    const {post_id} = useParams()
    
    useEffect(() => {
        const GetPost = async () => {
            await props.fetchOnePostDetail(post_id)
            props.updatePostState(post_id)
        }
        GetPost()
    }, [post_id])
    
    


    console.log(props.postState, "POST STATE")
    const post = props.postState.detail

    if (props.postState.detail.id){
    return(
        <div className='post-detail' >
            {/* {props.postState.posts.map((post) => (
                <Post post={post} />
            ))} */}
            <img src={post.image} style={{width: '300px'}}/>
            <h3>Title: {post.title}</h3>
            <h3>Url: {post.recipeUrl}</h3>
            <h3>Rating: {post.rating}</h3>
            <p>Description: {post.description}</p>
            <h5>Posted by User: {post.userId}</h5>
        </div>
        )
    }else {
        return (
            <div>Loading......</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)