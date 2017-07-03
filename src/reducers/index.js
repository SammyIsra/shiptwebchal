import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import FollowersReducer from './reducer_followers';

const rootReducer = combineReducers({
  user: UserReducer,
  followers: FollowersReducer
});

export default rootReducer;
