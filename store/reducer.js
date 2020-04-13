import {SET_TOKEN} from "./actions";

export default function (state = {token: ""}, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.payload};
        default:
            return {...state};
    }
}