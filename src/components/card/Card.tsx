import React, { ReactNode, FunctionComponent } from 'react';

import * as S from './styled';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FunctionComponent<CardProps> = ({ children, className }) => (
  <S.OuterContainer className={className}>{children}</S.OuterContainer>
);
