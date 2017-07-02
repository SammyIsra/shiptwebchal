import {FETCH_USER} from '../actions';

export default function(state = {userData: {}, loaded:false}, action){

    console.log("Got the user:", action.payload);

    if(action.type === FETCH_USER){
        return {
            ...state,
            loaded: true,
            data: action.payload
        }
    }else{
        return state;
    }
}