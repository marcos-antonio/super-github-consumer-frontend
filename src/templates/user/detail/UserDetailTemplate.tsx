import React from 'react';

import * as M from './mock';
import * as S from './styled';

export const UserDetailTemplate = () => {
  const { login, id, url, created_at } = M.user;

  return (
    <S.Container>
      <S.FieldVisualizer>
        <S.FieldLabel>Login:</S.FieldLabel>
        <span>{login}</span>
      </S.FieldVisualizer>
      <S.FieldVisualizer>
        <S.FieldLabel>Id:</S.FieldLabel>
        <span>{id}</span>
      </S.FieldVisualizer>
      <S.FieldVisualizer>
        <S.FieldLabel>URL:</S.FieldLabel>
        <span>{url}</span>
      </S.FieldVisualizer>
      <S.FieldVisualizer>
        <S.FieldLabel>created_at:</S.FieldLabel>
        <span>{created_at}</span>
      </S.FieldVisualizer>
    </S.Container>
  );
};
