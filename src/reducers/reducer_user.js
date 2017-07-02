import {FETCH_USER} from '../actions';

export default function(state = {data: {}, loaded:false, failed:false}, action){

    if(action.type === FETCH_USER){

        //User found, no issues
        if(action.payload.id){
            return {
                ...state,
                loaded: true,
                failed: false,
                data: action.payload
            };
        } 
        
        //User not found, issue
        else {
            return {
                ...state,
                loaded: false,
                failed: true,
                data: {}
            };
        }
    }else{
        return state;
    }
}