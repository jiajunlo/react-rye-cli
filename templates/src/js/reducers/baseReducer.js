import { fromJS } from 'immutable';

import { FETCH_BASE, FETCH_BASE_SUCCESS, FETCH_BASE_FAILURE } from '../actions/base';

const INITIAL_STATE = {
    info: null,
    loading: true,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_BASE:
            return {
                ...state,
                info: null,
                loading: true,
                error: null
            };
        case FETCH_BASE_SUCCESS:
            return {
                ...state,
                info: fromJS(action.payload),
                loading: false,
                error: null
            };
        case FETCH_BASE_FAILURE:
            let error = action.payload || {message: action.payload.message}
            return {
                ...state,
                info: null,
                loading: false,
                error: error
            };
        default:
            return state;
    }
}