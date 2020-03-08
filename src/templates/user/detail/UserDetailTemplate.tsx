import React, { FunctionComponent } from 'react';

import { DateFormatter } from 'utils/dateFormatter/DateFormatter';
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
    columns: [r.id, r.name, r.htmlUrl],
  }));

  return (
    <S.Container>
      <S.PaddedCard>
        <S.AvatarContainer>
          <S.StyledAvatar src={avatarUrl} />
        </S.AvatarContainer>
        <S.FieldVisualizerContainer>
          <S.FieldVisualizer>
            <S.FieldLabel>Login</S.FieldLabel>
            <S.FieldValue>{login}</S.FieldValue>
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.FieldVisualizerContainer alignToEnd={true}>
          <S.FieldVisualizer>
            <S.FieldLabel alignToEnd={true}>User ID</S.FieldLabel>
            <S.FieldValue alignToEnd={true}>{id}</S.FieldValue>
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.FieldVisualizerContainer>
          <S.FieldVisualizer>
            <S.FieldLabel>Profile URL</S.FieldLabel>
            <S.FieldValue>
              <a href={htmlUrl} target="_blank" rel="noreferrer noopener">
                {htmlUrl}
              </a>
            </S.FieldValue>
          </S.FieldVisualizer>
        </S.FieldVisualizerContainer>
        <S.FieldVisualizerContainer alignToEnd={true}>
          <S.FieldVisualizer>
            <S.FieldLabel alignToEnd={true}>Created</S.FieldLabel>
            <S.FieldValue alignToEnd={true}>
              {DateFormatter.formatStringToBrPattern(createdAt)}
            </S.FieldValue>
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
