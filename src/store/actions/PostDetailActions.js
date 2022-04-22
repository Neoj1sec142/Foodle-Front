import * as services from '../../services/PostServices'
import * as types from '../types'

export const LoadPostDetail = (id) => {
    return async (dispatch) => {
        try {
            const postDetail = await services.GetPosts(id)
            dispatch({
                type: types.GET_POST_DETAIL,
                payload: postDetail
            })            
        } catch (error) {
            throw error
        }
    }
}

export const LoadOnePostDetail = (id) => {
    return async (dispatch) => {
        try {
            const detail = await services.GetPostDetail(id)
            dispatch({
                type: types.GET_POST_DETAIL,
                payload: detail
            })            
        } catch (error) {
            throw error
        }
    }
}

export const UploadComment = (user_id, post_id, newComment) => {
    return async (dispatch) => {
        try {
            await services.AddComment(user_id, post_id, newComment)
            dispatch({
                type: types.POST_COMMENT,
                payload: newComment
            }) 
        } catch (error) {
            throw error
        }
    }
}

export const UpdateComment = (comment) => ({
        type: types.UPDATE_NEW_COMMENT,
        payload: comment
})

export const ToggleMoreComment = (value) => ({
    type: types.TOGGLE_MORE_COMMENT,
    payload: value
})