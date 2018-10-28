import { FETCH_WEATHER } from '../actions/index';
export function weatherReducer(state, action) {

    if (!state) { // if state object is undefined
        state = [];
    }
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        //  return state.concat([action.payload.data]);
    }
    return state;
} 