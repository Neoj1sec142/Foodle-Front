const { GET_USERS, UPDATE_USER } = require('../types')

const initialState = {
    users: []
}

const UserReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case UPDATE_USER:
            return {...state, update: action.payload}
        default:
            return {...state}
    }
}

export default UserReducer