import React from 'react';
import renderer from 'react-test-renderer';

import FollowerCard from '../components/FollowerCard';

test('renders a user card given valid user data', ()=>{

  const followerCard = renderer.create(
    <FollowerCard login="SammyIsra" avatar_url="http://i.imgur.com/KB4JPdv.png" />
  );

  expect(followerCard.toJSON()).toMatchSnapshot();
});