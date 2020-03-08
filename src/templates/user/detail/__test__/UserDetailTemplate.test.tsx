import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import theme from 'components/Theme';
import { User } from 'model/user';
import { Repo } from 'model/repo';

import { UserDetailTemplate } from '../UserDetailTemplate';

describe('Component: UserDetailTemplate', () => {
  let wrapper: RenderResult;

  const user: User = {
    id: 583231,
    login: 'octocat',
    htmlUrl: 'https://github.com/octocaat',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/583231?v=4',
    createdAt: '2011-01-25T18:44:36Z',
  };
  const usersRepos: Repo[] = [
    new Repo({
      id: 132935648,
      name: 'boysenberry-repo-1',
      htmlUrl: 'https://github.com/octocat/boysenberry-repo-1',
      owner: new User({ id: 583231, login: 'octocat' }),
    }),
    new Repo({
      id: 18221276,
      name: 'git-consortium',
      htmlUrl: 'https://github.com/octocat/git-consortium',
      owner: new User({ id: 583231, login: 'octocat' }),
    }),
    new Repo({
      id: 20978623,
      name: 'hello-worId',
      htmlUrl: 'https://github.com/octocat/hello-worId',
      owner: new User({ id: 583231, login: 'octocat' }),
    }),
  ];

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <UserDetailTemplate user={user} userRepos={usersRepos} />
      </ThemeProvider>
    );
  });

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
