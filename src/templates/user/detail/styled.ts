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

export const AvatarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  margin-bottom: 20px;
`;

export const StyledAvatar = styled.img`
  max-width: 128px;
  max-height: 128px;

  border-radius: 10px;
`;

export const FieldVisualizerContainer = styled.div<{ alignToEnd?: boolean }>`
  display: flex;
  flex: 1;
  justify-content: ${({ alignToEnd }) =>
    alignToEnd ? 'flex-end' : 'flex-start'};

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

export const ReposTableContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;
