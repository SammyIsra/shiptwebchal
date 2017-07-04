import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import SearchBar from '../components/SearchBar';

test('updates searchbar when typing', ()=>{

  const searchBar = renderer.create(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );

  expect(searchBar.toJSON()).toMatchSnapshot();
})