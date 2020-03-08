import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import theme from 'components/Theme';
import { User } from 'model/user';

import { UserListTemplate } from '../UserListTemplate';

describe('Component: UserListTemplate', () => {
  let wrapper: RenderResult;

  const userList = [
    new User({
      id: 2,
      login: 'defunkt',
      htmlUrl: 'https://github.com/defunkt',
      createdAt: '2011-01-25T18:44:36Z',
    }),
  ];

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <UserListTemplate userList={userList} />
      </ThemeProvider>
    );
  });

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
