import {combineReducers} from 'redux';
import * as type from '../action/type';

/*
const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};
const httpData = (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state, obj: {name: 'sss'}};
    }
};
*/

const navStatus = (state = {}, action) => {
    switch (action.type) {
        case type.CHANGE_COLLAPSE:
            // console.log(state);
            return {...state};
        case '':
            break;
        default:
            // console.log(state);
            return {...state, isCollapsed: false}
    }
};
export default combineReducers({
    // httpData
    nav: navStatus
});
