import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import FriendsReducer from './reducer_friends';

const rootReducer = combineReducers({
  user: UserReducer,
  friends: FriendsReducer
});

export default rootReducer;
