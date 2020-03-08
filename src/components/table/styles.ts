import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  border-radius: 2px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2),
    -2px 4px 5px 0px rgba(0, 0, 0, 0.1), 2px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;

  overflow-y: auto;
`;

export const HeaderContainer = styled.div`
  width: calc(100% - 16px);
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  padding: 0 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const HeaderCell = styled.div<{ size?: number }>`
  display: flex;
  flex: 1 1 ${({ size }) => (size ? '100%' : '0%')};
  max-width: ${({ size }) => (size ? size + '%' : 'unset')};
  padding-bottom: 8px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.fontSizeXS};
  color: ${({ theme }) => theme.palette.onBackground};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  width: calc(100% - 16px);
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const RowCell = styled.div<{ size?: number }>`
  display: flex;
  flex-direction: row;
  flex: 1 1 ${({ size }) => (size ? '100%' : '0%')};
  max-width: ${({ size }) => (size ? size + '%' : 'unset')};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.fontSizeXS};
  color: ${({ theme }) => theme.palette.onBackground};
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex: initial;

  border-top: solid 1px rgba(0, 0, 0, 0.2);
`;
