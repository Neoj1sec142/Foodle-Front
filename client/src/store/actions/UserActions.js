import * as services from '../../services/UserServices'
import * as types from '../types'


//Load post from server to state
// export const LoadUsers = () => {
//     return async (dispatch) => {
//         try {
//             console.log("Before GET");
            
//             const users = await services.GetUsers()
//             console.log(users, "After GET");
//             dispatch({
//                 type: types.GET_USERS,
//                 payload: users
//             })            
//         } catch (error) {
//             throw error
//         }
//     }
// }

// export const LoadUserDetails = (id) => {
//     return async (dispatch) => {
//         try {
//             console.log('before GET');
//             const user = await services.GetUserDetail(id)
//             console.log(user, "after GET")
//             dispatch({
//                 type: types.GET_USER_DETAIL,
//                 payload: user
//             })
//         } catch (err) {
//             throw err
//         }
//     }
// }


