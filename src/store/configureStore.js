import { createStore, combineReducers, compose } from 'redux';

import mainReducer from './reducers/mainReducer';

const rootReducer = combineReducers({
    main: mainReducer
});

const composeEnhancers = compose;

if (__DEV__)  {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
};

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;