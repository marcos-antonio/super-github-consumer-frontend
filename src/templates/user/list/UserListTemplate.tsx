import React from 'react';

import { Table, HeaderCell } from 'components/table';

import * as M from './mock';
import * as S from './styled';

export const UserListTemplate = () => {
  const header: HeaderCell[] = [{ child: 'Login' }, { child: 'ID' }];
  const rows = M.firstPage.map(data => ({ columns: Object.values(data) }));

  return (
    <S.Container>
      <S.TableContainer>
        <Table header={header} rows={rows} rowClickHandler={console.log} />
      </S.TableContainer>
    </S.Container>
  );
};
