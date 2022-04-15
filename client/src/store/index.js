import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostReducer from "./reducers/PostReducer";
import PostDetailReducer from "./reducers/PostDetailReducer";
import UserReducer from "./reducers/UserReducer";

const store = createStore(
    combineReducers({
        userState: UserReducer,
        postState: PostReducer,
        postDetailState: PostDetailReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store