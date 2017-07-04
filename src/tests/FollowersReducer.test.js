import FollowersReducer from '../reducers/reducer_followers';
import * as types from '../actions/types';

describe('Followers Reducer', ()=>{

  it('should create the initial state', ()=>{
    
    expect(FollowersReducer(undefined, {}))
    .toEqual({
      list: [],
      loaded: false
    });
  });

  it('should create a new list of followers', ()=>{
    const actionObject = {
      type: types.FETCH_NEW_FOLLOWERS,
      paylaod: [1,2,3]
    }

    expect(FollowersReducer(undefined, actionObject))
    .toEqual({
      loaded: true,
      list: actionObject.payload
    });
  });

  it('should add to the list of followers', ()=>{
    const actionObject = {
      type: types.FETCH_MORE_FOLLOWERS,
      payload: [4,5,6]
    }
    const oldList = [1,2,3];

    expect(FollowersReducer({list:oldList}, actionObject))
    .toEqual({
      loaded: true,
      list: [...oldList, ...actionObject.payload]
    });
  });
});