const { GET_POSTS, NEW_POST, UPDATE_POST } = require('../types')

const initialState = {
    posts: []
}

const PostReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: action.payload}
        case NEW_POST:
            return {...state, newPost: action.payload}
        case UPDATE_POST:
            return {...state, newPost: action.payload}
        default:
            return {...state}
    }
}

export default PostReducer