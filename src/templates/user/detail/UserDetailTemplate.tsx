import React from 'react';

import { DateFormatter } from 'utils/DateTransformer';

import * as M from './mock';
import * as S from './styled';

export const UserDetailTemplate = () => {
  const { login, id, html_url, created_at } = M.user;

  return (
    <S.Container>
      <S.PaddedCard>
        <S.FieldVisualizerContainer>
          <S.FieldVisualizer>
            <S.FieldLabel>Login:</S.FieldLabel>
            {login}
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.FieldVisualizerContainer>
          <S.FieldVisualizer>
            <S.FieldLabel>User ID:</S.FieldLabel>
            {id}
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.FieldVisualizerContainer>
          <S.FieldVisualizer>
            <S.FieldLabel>Profile URL:</S.FieldLabel>
            <a href={html_url} target="_blank" rel="noreferrer noopener">
              {html_url}
            </a>
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.FieldVisualizerContainer>
          <S.FieldVisualizer>
            <S.FieldLabel>Created:</S.FieldLabel>
            {DateFormatter.formatStringToBrPattern(created_at)}
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
      </S.PaddedCard>
    </S.Container>
  );
};
