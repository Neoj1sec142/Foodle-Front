import { connect } from 'react-redux'
import {
  LoadPostDetail,
  UploadComment,
  UpdateComment,
  ToggleMoreComment
} from '../store/actions/PostDetailActions'
import { useEffect } from 'react'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

const mapStateToProps = ({ postDetailState }) => {
  return { postDetailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostDetail: (id) => dispatch(LoadPostDetail(id)),
    uploadComment: (id, newComment) => dispatch(UploadComment(id, newComment)),
    updateComment: (comment) => dispatch(UpdateComment(comment)),
    toggleMoreComment: (value) => dispatch(ToggleMoreComment(value))
  }
}

const HomePage = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchPostDetail(id)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    props.uploadComment(id, props.postDetailState.newComment)
    props.toggleMoreComment(!props.postDetailState.moreComment)
  }
  //console.log(props.postDetailState, "state")
  const handleChange = async (e) => {
    // await props.setComment(e.target.value)
    await props.updateComment(e.target.value)
  }
 console.log(props.postDetailState, "POST DETAIL STATE")
  if (props.postDetailState.postDetail.length){

    return (
      <div className="feed-page">
      
        {/* 
        {props.postDetailState.comments.map((comm) => (
          <Comment rating={comm.rating} comment={comm.comment} key={comm._id} />
        ))} */}
        {props.postDetailState.postDetail.map((post, i) => (
          <div key={i}>
            <h2>Title: {post.title}</h2>
            <h3>Posted by User: {post.userId}</h3>
            <img src={post.image} alt="post_image" />
            
            
            {props.postDetailState.moreComment && (
              <div>
                <ReactStars
                  onChange={''}
                  size={24}
                  color2={'#ffd700'}
                  className={'stars'}
                  half={false}
                />
                
                <textarea
                  onChange={handleChange}
                  value={props.postDetailState.newComment}
                  placeholder="Add your thoughts..."
                />
                
              </div>
            )}
            <button onClick={handleSubmit}>
                  {props.postDetailState.moreComment ? `Send` : `Add a comment`}
            </button>
          </div>
        ))}
      </div>
    )
  }else{
    return(
      <div>Loading ...</div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
