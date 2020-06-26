import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';

const configureStore = (initState = {}) => {
    const store = createStore(
        reducer,
        initState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f,
        ),
    );
    return store;
};

export default configureStore;
