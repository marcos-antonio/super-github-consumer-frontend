import React from 'react';

import { render, RenderResult, wait, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'components/Theme';
import { HeaderCell, Row, Table } from '../Table';
import { PaginationProps } from '../../pagination';

describe('Component: Table with elements defining their sizes', () => {
  const clickMockFunction = jest.fn();
  const headers: HeaderCell[] = [
    {
      child: <>ID</>,
      size: 20,
    },
    {
      child: 'Login',
      size: 40,
    },
    {
      child: 'Profile URL',
      size: 40,
    },
  ];
  const rows: Row[] = [
    {
      columns: ['1', <>{'Octocat 1'}</>, 'github.com/octocat1'],
    },
    {
      columns: ['2', <>{'Octocat 2'}</>, 'github.com/octocat2'],
    },
    {
      columns: ['3', <>{'Octocat 3'}</>, 'github.com/octocat3'],
    },
  ];

  const paginationProps: PaginationProps = {
    nextPageDisabled: false,
    previousPageDisabled: false,
  };

  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <div style={{ width: '500px' }}>
          <Table
            header={headers}
            rows={rows}
            rowClickHandler={clickMockFunction}
            paginationProps={paginationProps}
          ></Table>
        </div>
      </ThemeProvider>
    );
  });

  it('render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click on  a row', async () => {
    const { getByText } = wrapper;

    const firstRow = getByText(/octocat 1/i).parentNode;

    await wait(() => fireEvent.click(firstRow));

    expect(clickMockFunction).toHaveBeenCalled();
  });
});

describe('Component: Table with elements not defining their sizes', () => {
  const headers: HeaderCell[] = [
    {
      child: <>ID</>,
      size: 20,
    },
    {
      child: 'Login',
      size: 40,
    },
    {
      child: 'Profile URL',
      size: 40,
    },
  ];
  const rows: Row[] = [
    {
      columns: ['1', <>{'Octocat 1'}</>, 'github.com/octocat1'],
    },
    {
      columns: ['2', <>{'Octocat 2'}</>, 'github.com/octocat2'],
    },
    {
      columns: ['3', <>{'Octocat 3'}</>, 'github.com/octocat3'],
    },
  ];
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <div style={{ width: '500px' }}>
          <Table header={headers} rows={rows}></Table>
        </div>
      </ThemeProvider>
    );
  });

  it('render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
