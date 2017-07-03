import {FETCH_FRIENDS} from '../actions';

export default function(state = {list: [], loaded:false}, action){
  
  console.log("Got the followers:");
  console.log(action.payload);
  
  if(action.type === FETCH_FRIENDS){
    return {
      ...state,
      loaded: true,
      list: [...state.list, ...action.payload]
    }
  }else{
    return state;
  }
}