import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import theme from 'components/Theme';

import { Card } from '../Card';

describe('Component: Card', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <Card>asdajio</Card>
      </ThemeProvider>
    );
  });

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
