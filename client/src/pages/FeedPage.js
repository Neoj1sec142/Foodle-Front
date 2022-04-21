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

          {props.postDetailState.postDetail.sort((a,b) => {return (a.updatedAt < b.updatedAt) ? 1 : -1} ).map((post, i) => (
            <div key={i} style={{position:'relative', margin:'18px 0', color:'black'}}>
              {/* {console.log(post, "POSTS")} */}
              <Link to={`/profile/${post.User.username}`}>
                <div className='username-stripe'  style={{margin:'8px',display:'flex', flexDirection:'row',alignItems:'center', position:'absolute'}}>
                  <img src={post.User.profileImg} alt='profile thumbnail' style={{height:'48px', width:'48px', borderRadius:'50%'}} /> 
                  {post.User.username}
                </div>
              </Link>
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
