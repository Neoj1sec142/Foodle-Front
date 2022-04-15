const { GET_POSTS } = require('../types')

const initialState = {
    posts: []
}

const PostReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: action.payload}
        default:
            return {...state}
    }
}

export default PostReducer