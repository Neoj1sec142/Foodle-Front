import * as services from '../../services/UserServices'
import * as types from '../types'


//Load post from server to state
export const LoadUsers = () => {
    return async (dispatch) => {
        try {
            console.log("Before GET");
            
            const users = await services.GetUsers()
            console.log(users, "After GET");
            dispatch({
                type: types.GET_USERS,
                payload: users
            })            
        } catch (error) {
            throw error
        }
    }
}


