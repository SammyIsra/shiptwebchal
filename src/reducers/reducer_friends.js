import {FETCH_FRIENDS} from '../actions';

export default function(state = {list: [], loaded:false}, action){
  
  console.log("Got the friends:", action.payload);
  
  if(action.type === FETCH_FRIENDS){
    return {
      ...state,
      loaded: true,
      list: action.payload
    }
  }else{
    return state;
  }
}