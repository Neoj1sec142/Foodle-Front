import { connect } from 'react-redux'
import {LoadPostDetail} from '../store/actions/PostDetailActions'
import { useEffect } from 'react'
//import Comment from '../components/Comment'
import { useParams, Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();

  useEffect(() => {
    props.fetchPostDetail(id)
  }, [id])

  
  if (props.postDetailState.postDetail.length){

    return (
      <div className="feed-page">
        <div className="feed-wrapper"><div>

          {props.postDetailState.postDetail.sort((a,b) => {return (a.updatedAt < b.updatedAt) ? 1 : -1} ).map((post, i) => (
            <div key={i} className='post-container'>
              {/* {console.log(post, "POSTS")} */}
              

                <div className='username-stripe' onClick={() => navigate(`/profile/${post.User.username}`)} >
                  <img src={post.User.profileImg} alt='profile thumbnail' /> 
                  {post.User.username}
                </div>
              
              <Post post={post} />
            </div>
          ))}

        </div></div>
      </div>
    )
  }else{
    return(
      <div>Loading ...</div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
