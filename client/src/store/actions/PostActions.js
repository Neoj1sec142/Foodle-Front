import * as services from '../../services/PostServices'
import * as types from '../types'


//Load post from server to state
export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            console.log("Before GET");
            
            const posts = await services.GetPosts()
            console.log(posts, "After GET");
            dispatch({
                type: types.GET_POSTS,
                payload: posts
            })            
        } catch (error) {
            throw error
        }
    }
}
//Add a post to database
export const UploadPost = (id, newPost) => {
    return async (dispatch) => {
        try {
            await services.AddPost(id, newPost)
            dispatch({
                type: types.NEW_POST,
                payload: ''
            }) 
        } catch (error) {
            throw error
        }
    }
}


