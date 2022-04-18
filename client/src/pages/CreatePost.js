import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {UploadPost} from '../store/actions/PostActions'
import { useParams } from 'react-router-dom'
import ReactStars from 'react-stars'
import AddPost from '../components/AddPost'


const mapStateToProps = ({ postState }) => {
    return { postState }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      fetchPostDetail: (id, newPost) => dispatch(UploadPost(id, newPost))
    }
}

const CreatePost = (props) => {
    const { id } = useParams()


    const [newPost, setNewPost] = useState({
        image: '',
        url: '',
        rating: 0
    })


    useEffect((props) => {
    props.fetchPostDetail(id)
    }, [id])

    const handleChange =  (e) => {
        setNewPost(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.uploadpost(id, props.postState.newPost)
        
    }

    return(
        <div className="create-post">
             {/* {props.postState.newPost && (  */}
            <div>
                {props.postState.posts.map((post) => (
                    <AddPost 
                        setNewPost={setNewPost}
                        newPost={newPost}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        />
                ))}
            <ReactStars
                onChange={''}
                size={24}
                color2={'#ffd700'}
                className={'stars'}
                value={newPost.rating}
                half={false}
            />
            <textarea
                onChange={handleChange}
                value={props.postState.newPost.image}
                placeholder="Add a Picture"
            />
            <textarea
                onChange={handleChange}
                value={props.postState.newPost.url}
                placeholder="Include a Link"
            /> 
            </div>
            
            
            <button onClick={handleSubmit}>
                {props.postState.newPost ? `Send` : `Create a Post`}
            </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)