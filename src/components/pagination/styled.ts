import styled from 'styled-components';

import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  height: 56px;
  padding: 5px 0;
`;

export const ItemCounterContainer = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.fontSizeXS};
  color: ${({ theme }) => theme.palette.onBackground};

  margin-right: 40px;
`;

export const ArrowLeftIcon = styled(KeyboardArrowLeft)<{ disabled: boolean }>`
  width: 24px;
  height: 24px;

  margin-right: 20px;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#bbbbbb' : '#000000')};
`;

export const ArrowRightIcon = styled(KeyboardArrowRight)<{ disabled: boolean }>`
  width: 24px;
  height: 24px;

  margin-right: 20px;
  margin-right: 5px;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#bbbbbb' : '#000000')};
`;
