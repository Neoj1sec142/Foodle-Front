const { GET_POSTS, NEW_POST, UPDATE_POST, GET_POST_DETAIL } = require('../types')

const initialState = {
    posts: [],
    detail: {},
    post: {
        // image: '',
        // description: '',
        // recipeUrl: '',
        // rating: 0
    }
}

const PostReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: action.payload}
        case NEW_POST:
            return {...state, post: action.payload}
        case UPDATE_POST:
            return {...state, post: action.payload}
        case GET_POST_DETAIL:
            return {...state, detail: action.payload}
        default:
            return {...state}
    }
}

export default PostReducer