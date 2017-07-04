import UserReducer from '../reducers/reducer_user';
import * as types from '../actions/types';

describe('User reducer', () => {

  it('should add the user SammyIsra', () => {
    const actionObject = {
      type: types.FETCH_USER,
      payload: {login: 'SammyIsra', id:123}
    }
    expect(UserReducer({}, actionObject))
    .toEqual({
      loaded: true,
      failed: false,
      data: actionObject.payload
    });
  });

  it('should render the initial state', ()=>{
    expect(UserReducer(undefined, {}))
    .toEqual({
      loaded:false,
      failed:false,
      data: {}
    })
  })

  it('should error when payload does not contain id', ()=>{
    const actionObject = {
      type: types.FETCH_USER,
      payload: {login: 'SammyIsra'}
    }
    expect(UserReducer({}, actionObject))
    .toEqual({
      loaded: true,
      failed: true,
      data: {}
    })
  })
});
