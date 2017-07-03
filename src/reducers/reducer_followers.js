import * as types from '../actions/types';

export default function(state = {list: [], loaded:false}, action){

  switch(action.type){

    //New followers
    case types.FETCH_NEW_FOLLOWERS:
      return {
        ...state,
        loaded: true,
        list: action.payload
      }

    //Add followers to list
    case types.FETCH_MORE_FOLLOWERS:
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