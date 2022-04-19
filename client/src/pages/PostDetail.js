import { connect } from 'react-redux'
import { LoadPosts } from '../store/actions/PostActions'
import { useEffect } from 'react'
import Post from '../components/Post'


const mapStateToProps = ({ postState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts())
    }
}

const PostDetail = (props) => {

    useEffect(() => {
        props.fetchPosts()
    }, [])

    return(
        <div className='post-detail'>
            {props.postState.posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)