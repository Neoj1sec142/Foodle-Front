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

export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await services.GetPosts()
            dispatch({
                type: types.GET_POSTS,
                payload: posts
            })            
        } catch (error) {
            throw error
        }
    }
}
