import * as services from '../../services/PostServices'
import * as types from '../types'

//Load detail of a post from server to state
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
            //console.log(detail, "POST DETAIL")
            dispatch({
                type: types.GET_POST_DETAIL,
                payload: detail
            })            
        } catch (error) {
            throw error
        }
    }
}

//Add a comment to database
export const UploadComment = (id, newComment) => {
    return async (dispatch) => {
        try {
            await services.AddComment(id, newComment)
            dispatch({
                type: types.POST_COMMENT,
                payload: ''
            }) 
        } catch (error) {
            throw error
        }
    }
}

// Update the comment state
export const UpdateComment = (comment) => ({
        type: types.UPDATE_NEW_COMMENT,
        payload: comment
})

// Update the moreComment state
export const ToggleMoreComment = (value) => ({
    type: types.TOGGLE_MORE_COMMENT,
    payload: value
})