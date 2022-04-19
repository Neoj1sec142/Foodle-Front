import * as services from '../../services/PostServices'
import * as types from '../types'

export const LoadPostDetail = (post_id) => {
    return async (dispatch) => {
        try {
            const postDetail = await services.GetPosts(post_id)
            dispatch({
                type: types.GET_POST_DETAIL,
                payload: postDetail
            })            
        } catch (error) {
            throw error
        }
    }
}
//Load post from server to state
export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            // console.log("Before GET");
            
            const posts = await services.GetPosts()
            //console.log(posts, "After GET");
            dispatch({
                type: types.GET_POSTS,
                payload: posts
            })            
        } catch (error) {
            throw error
        }
    }
}
// //Add a post to database
// export const UploadPost = (id, post) => {
//     return async (dispatch) => {
//         try {
//             await services.AddPost(id, post)
//             dispatch({
//                 type: types.NEW_POST,
//                 payload: post
//             }) 
//         } catch (error) {
//             throw error
//         }
//     }
// }
// export const UpdatePost = (post) => ({
//     type: types.UPDATE_POST,
//     payload: post
// })


