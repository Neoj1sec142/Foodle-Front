const { GET_POST_DETAIL,POST_COMMENT, TOGGLE_MORE_COMMENT, UPDATE_NEW_COMMENT } = require('../types')

const initialState = {
    postDetail: {},
    comments: [],
    newComment: {
        comment: '',
        rating: 0
    },
    moreComment: false
}

const PostDetailReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_POST_DETAIL:
            return {...state, postDetail: action.payload, comments: action.payload.comments }
        case UPDATE_NEW_COMMENT:
            return {...state, newComment: action.payload }
        case POST_COMMENT:
            return {...state, newComment: action.payload }
        case TOGGLE_MORE_COMMENT:
            return {...state, moreComment: action.payload}
        default:
            return {...state}
    }
}

export default PostDetailReducer