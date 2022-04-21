import { connect } from 'react-redux'
import {LoadPostDetail} from '../store/actions/PostDetailActions'
import { useEffect } from 'react'
//import Comment from '../components/Comment'
import { useParams, Link } from 'react-router-dom'
import Post from '../components/Post'


const mapStateToProps = ({ postDetailState }) => {
  return { postDetailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostDetail: (id) => dispatch(LoadPostDetail(id))
  }
}

const HomePage = (props) => {
  const { id } = useParams()

  useEffect(() => {
    props.fetchPostDetail(id)
  }, [id])

  
  if (props.postDetailState.postDetail.length){

    return (
      <div className="feed-page">
        <div className="feed-wrapper">

          {props.postDetailState.postDetail.map((post, i) => (
            <div key={i}>
              {/* {console.log(post, "POSTS")} */}
              <Link to={`/profile/${post.User.username}`}>Posted By:{post.User.profileImg} {post.User.username}</Link>
              <Post post={post} />
            </div>
          ))}

        </div>
      </div>
    )
  }else{
    return(
      <div>Loading ...</div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
