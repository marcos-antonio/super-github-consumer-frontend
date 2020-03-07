import styled from 'styled-components';
import { Card } from '../../../components/card';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const PaddedCard = styled(Card)`
  padding: 16px;

  max-width: 50%;
`;

export const FieldVisualizerContainer = styled.div`
  display: flex;
  flex: 1;

  min-width: 50%;
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
