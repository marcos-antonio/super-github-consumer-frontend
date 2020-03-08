import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import { Table, HeaderCell, Row } from 'components/table';
import { User } from 'model/user';

import * as S from './styled';

export interface UserListTemplateProps {
  userList: User[];
  hasPagination?: boolean;
  nextPageClickHandler?: () => void;
  previousPageClickHandler?: () => void;
  previousPageDisabled?: boolean;
  nextPageDisabled?: boolean;
}

export const UserListTemplate: FunctionComponent<UserListTemplateProps> = ({
  userList,
  hasPagination,
  nextPageClickHandler,
  previousPageClickHandler,
  nextPageDisabled = false,
  previousPageDisabled = false,
}) => {
  const header: HeaderCell[] = [{ child: 'ID' }, { child: 'Login' }];

  const router = useRouter();
  const rows: Row[] = userList.map(data => ({
    columns: [data.id, data.login],
  }));
  const detailUser = (userLogin: string) => {
    router.push(`/users/${userLogin}`);
  };

  const paginationProps = {
    nextPageClickHandler,
    previousPageClickHandler,
    nextPageDisabled,
    previousPageDisabled,
  };

  return (
    <S.Container>
      <S.TableContainer data-testid="table-container">
        <Table
          header={header}
          rows={rows}
          rowClickHandler={row => {
            const userLogin = row.columns[1].toString();
            if (userLogin) detailUser(userLogin);
          }}
          paginationProps={hasPagination && paginationProps}
        />
      </S.TableContainer>
    </S.Container>
  );
};
