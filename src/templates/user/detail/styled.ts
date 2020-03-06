import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  & > div {
    :nth-child(n + 2) {
      margin-left: 10px;
    }
  }
`;

export const FieldVisualizer = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
  font-size: ${({ theme }) => theme.typography.fontSizeS};
  color: ${({ theme }) => theme.palette.onBackground};
`;

export const FieldLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
  font-size: ${({ theme }) => theme.typography.fontSizeMS};
`;
