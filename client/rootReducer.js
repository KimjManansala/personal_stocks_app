import { combineReducers } from 'redux';

const placeHolderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLACEHOLDER':
            return {
                ...state,
            };
        default:
            return state;
    }
}

const reducer = combineReducers({
    placeHolderReducer
});

export default reducer;
