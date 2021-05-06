import { 
    createStore, 
    combineReducers, 
    applyMiddleware, 
    compose 
} from "redux";
import thunk from "redux-thunk";

import { coursesReducer } from "./courses/reducer";
import { userReducer } from "./user/reducer";
import { authorsReducer } from "./author/reducer";

const rootReducer = combineReducers({
    coursesReducer,
    userReducer,
    authorsReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, compose(
    applyMiddleware(
        ...middleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store
