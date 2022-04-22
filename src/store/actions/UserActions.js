import * as services from '../../services/UserServices'
import * as types from '../types'  

export const LoadUsers = () => {
    return async (dispatch) => {
        try {
            const users = await services.GetUsers()
            dispatch({
                type: types.GET_USERS,
                payload: users
            })            
        } catch (error) {
            throw error
        }
    }
}

export const LoadUserDetails = (id) => {
    return async (dispatch) => {
        try {
            const user = await services.GetUserDetail(id)
            dispatch({
                type: types.GET_USER_DETAIL,
                payload: user
            })
        } catch (err) {
            throw err
        }
    }
}


