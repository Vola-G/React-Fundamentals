import { 
    createStore, 
    combineReducers, 
    applyMiddleware, 
    compose 
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import { coursesReducer } from "./courses/reducer";
import { userReducer } from "./user/reducer";
import { authorsReducer } from "./author/reducer";

const rootReducer = combineReducers({
    coursesReducer,
    userReducer,
    authorsReducer
});

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, composedEnhancer);

export default store
