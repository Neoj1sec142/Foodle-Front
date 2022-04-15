const { GET_USERS, UPDATE_USER, GET_USER_DETAIL } = require('../types')

const initialState = {
    users: []
}

const UserReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case UPDATE_USER:
            return {...state, update: action.payload}
        case GET_USER_DETAIL:
            return {...state, user: action.payload}
        default:
            return {...state}
    }
}

export default UserReducer