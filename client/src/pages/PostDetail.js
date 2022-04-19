import { connect } from 'react-redux'
import { LoadPostDetail } from '../store/actions/PostActions'
import { useEffect } from 'react'
import Post from '../components/Post'
import { useParams } from 'react-router-dom'


const mapStateToProps = ({ postState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (id) => dispatch(LoadPostDetail(id))
    }
}

const PostDetail = (props) => {
    let {id} = useParams()
    useEffect(() => {
        props.fetchPosts(id)
    }, [id])

    return(
        <div className='post-detail' >
            {/* {props.postState.posts.map((post) => (
                <Post post={post} />
            ))} */}
            <h3> {props.postState.post.title}</h3>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)