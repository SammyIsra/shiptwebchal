import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import {FollowersList} from '../components/FollowersList';

//This test needs to have MemoryRouter because
// since it contains a <Link /> is requires specific context
test('renders list of followers',()=>{
  const controlledProps = {
    followers: {
      list: [{
        id: 123,
        login: "SammyIsra",
        avatar_url: "http://i.imgur.com/KB4JPdv.png"
      }],
      loaded: true
    },
    followersCount: 1,
    followersUrl: 'https://api.github.com/users/SammyIsra/followers',
    fetchMoreFollowers: ()=>{}
  }

  const followerList = renderer.create(
    <MemoryRouter>
      <FollowersList {...controlledProps} />
    </MemoryRouter>
  );

  expect(followerList.toJSON()).toMatchSnapshot();
});