import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
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
  flex: 1 1 ${({ size }) => (size ? "100%" : "0%")};
  max-width: ${({ size }) => (size ? size + "%" : "unset")};
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
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  padding: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.onBackground};
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
  flex: 1 1 ${({ size }) => (size ? "100%" : "0%")};
  max-width: ${({ size }) => (size ? size + "%" : "unset")};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.fontSizeXS};
  color: ${({ theme }) => theme.palette.onBackground};
`;
