import {
  FETCH_NEW_FOLLOWERS,
  FETCH_MORE_FOLLOWERS 
} from '../actions';

export default function(state = {list: [], loaded:false}, action){
  
  console.log("Got the followers:");
  console.log(action.payload);

  switch(action.type){

    //New followers
    case FETCH_NEW_FOLLOWERS:
      return {
        ...state,
        loaded: true,
        list: action.payload
      }

    //Add followers to list
    case FETCH_MORE_FOLLOWERS:
      return {
        ...state,
        loaded: true,
        list: [...state.list, ...action.payload]
      }

    //Not for this reducer
    default:
      return state
  }
}