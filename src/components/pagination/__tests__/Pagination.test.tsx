import React from 'react';
import { render, RenderResult, fireEvent, wait } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import theme from 'components/Theme';

import { Pagination } from '../Pagination';

describe('Component: Pagination', () => {
  let wrapper: RenderResult;
  const nextPageClickMockFunction = jest.fn();
  const previousPageClickMockFunction = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <Pagination
          nextPageClickHandler={nextPageClickMockFunction}
          previousPageClickHandler={previousPageClickMockFunction}
        />
      </ThemeProvider>
    );
  });

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should click on next page', async () => {
    const { getByTestId } = wrapper;
    const nextPageIcon = getByTestId('arrow-right-icon');

    await wait(() => fireEvent.click(nextPageIcon));

    expect(nextPageClickMockFunction).toHaveBeenCalled();
  });

  it('should click on previous page', async () => {
    const { getByTestId } = wrapper;
    const nextPageIcon = getByTestId('arrow-left-icon');

    await wait(() => fireEvent.click(nextPageIcon));

    expect(previousPageClickMockFunction).toHaveBeenCalled();
  });
});

describe('Component: Pagination with disabled icons', () => {
  let wrapper: RenderResult;
  const nextPageClickMockFunction = jest.fn();
  const previousPageClickMockFunction = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <Pagination
          nextPageDisabled={true}
          previousPageDisabled={true}
          nextPageClickHandler={nextPageClickMockFunction}
          previousPageClickHandler={previousPageClickMockFunction}
        />
      </ThemeProvider>
    );
  });

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should click on next page', async () => {
    const { getByTestId } = wrapper;
    const nextPageIcon = getByTestId('arrow-right-icon');

    await wait(() => fireEvent.click(nextPageIcon));

    expect(nextPageClickMockFunction).not.toHaveBeenCalled();
  });

  it('should click on previous page', async () => {
    const { getByTestId } = wrapper;
    const nextPageIcon = getByTestId('arrow-left-icon');

    await wait(() => fireEvent.click(nextPageIcon));

    expect(previousPageClickMockFunction).not.toHaveBeenCalled();
  });
});
