import styled from 'styled-components';

export const OuterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1;

  background: ${({ theme }) => theme.palette.surface};

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2),
    -2px 4px 5px 0px rgba(0, 0, 0, 0.1), 2px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;
