import {
    FETCH_REST_LOADING,
    FETCH_REST_SUCCESS,
    FETCH_REST_FAILURE,
    CREATE_REST_START,
    CREATE_REST_SUCCESS,
    CREATE_REST_FAILURE,
    DELETE_REST_START,
    DELETE_REST_SUCCESS,
    DELETE_REST_FAILURE,
    UPDATE_REST_START,
    UPDATE_REST_SUCCESS,
    UPDATE_REST_FAILURE
} from '../actions/actions';

const initialState = {
    restData: [],
    error: null,
    isFetching: false
}

function reducer(state = initialState, action) {
    console.log('Reducer Firing', action)
    switch(action.type) {
        case FETCH_REST_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case FETCH_REST_SUCCESS:
            return {
                ...state,
                restData: action.payload,
                error: null
            }
        case FETCH_REST_FAILURE:
            return {
                ...state,
                restData: [],
                isFetching: false,
                error: action.payload
            }
        case CREATE_REST_START:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case CREATE_REST_SUCCESS: 
            return {
                ...state,
                restData: [...state, action.payload],
                error: null
            }
        case CREATE_REST_FAILURE:
            return {
                ...state,
                restData: [],
                error: action.payload
            }
        case DELETE_REST_START:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case DELETE_REST_SUCCESS:
            return {
                ...state,
                restData: [...state, action.payload],
                error: null
            }
        case DELETE_REST_FAILURE:
            return {
                ...state,
                restData: [],
                error: action.payload
            }
        case UPDATE_REST_START:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case UPDATE_REST_SUCCESS:
            return {
                ...state,
                restData: [...state, action.payload],
                error: null
            }
        case UPDATE_REST_FAILURE:
            return {
                ...state,
                restData: [],
                error: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;