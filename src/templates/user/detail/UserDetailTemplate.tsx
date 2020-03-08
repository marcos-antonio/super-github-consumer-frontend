import React, { FunctionComponent } from 'react';

import { DateFormatter } from 'utils/DateTransformer';
import { User } from 'model/user';
import { Repo } from 'model/repo';

import * as S from './styled';
import { Table, HeaderCell, Row } from 'components/table';

export interface UserDetailTemplateProps {
  user: User;
  userRepos: Repo[];
}

export const UserDetailTemplate: FunctionComponent<UserDetailTemplateProps> = ({
  user,
  userRepos,
}) => {
  const { id, login, htmlUrl, avatarUrl, createdAt } = user;

  const reposTableHeader: HeaderCell[] = [
    { child: 'ID' },
    { child: 'Name' },
    { child: 'URL' },
  ];
  const reposTableRows: Row[] = userRepos?.map(r => ({
    columns: Object.values(r),
  }));

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
            <a href={htmlUrl} target="_blank" rel="noreferrer noopener">
              {htmlUrl}
            </a>
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.FieldVisualizerContainer>
          <S.FieldVisualizer>
            <S.FieldLabel>Created:</S.FieldLabel>
            {DateFormatter.formatStringToBrPattern(createdAt)}
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.ReposTableContainer>
          {userRepos && (
            <Table header={reposTableHeader} rows={reposTableRows} />
          )}
        </S.ReposTableContainer>
      </S.PaddedCard>
    </S.Container>
  );
};
