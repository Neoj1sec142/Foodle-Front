import { connect } from 'react-redux'
import {LoadPostDetail} from '../store/actions/PostDetailActions'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
                <div className='username-stripe' onClick={() => navigate(`/profile/${post.User.username}`)} >
                  {post.User.profileImg ?
                    <div className='profile-img-container username-stripe-img' style={{backgroundImage:`url(${post.User.profileImg})`}}></div> 
                  :
                  <div className='profile-img-container username-stripe-img'></div>
                }
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
