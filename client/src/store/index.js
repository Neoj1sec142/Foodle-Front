import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import PostReducer from "./reducers/PostReducer";
import PostDetailReducer from "./reducers/PostDetailReducer";

const store = createStore(
    combineReducers({
        postState: PostReducer,
        postDetailState: PostDetailReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store