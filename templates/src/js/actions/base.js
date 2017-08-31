//import Request from '../utils/request';

export const FETCH_BASE = 'FETCH_BASE';
export const FETCH_BASE_SUCCESS = 'FETCH_BASE_SUCCESS';
export const FETCH_BASE_FAILURE = 'FETCH_BASE_FAILURE';

export function fetchBase() {

    return (dispatch) => {
        dispatch({
            type: FETCH_BASE_SUCCESS,
            payload: "load success"
        })
    };
    /*
    const req = Request.get('/api/admin/base');
    return (dispatch) => {
        dispatch({ type: FETCH_BASE });
        return (
            req
            .then(response => dispatch({
                type: FETCH_BASE_SUCCESS,
                payload: response.data
            }))
            .catch(error => dispatch({
                type: FETCH_BASE_FAILURE,
                payload: error
            }))
        );
    };
    */
}