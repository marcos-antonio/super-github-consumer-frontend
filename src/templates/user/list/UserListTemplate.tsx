import React, { useState } from 'react';

import { Table, HeaderCell } from 'components/table';

import * as M from './mock';
import * as S from './styled';

export const UserListTemplate = () => {
  const header: HeaderCell[] = [{ child: 'Login' }, { child: 'ID' }];
  const [rows, setRows] = useState(
    M.firstPage.map(data => ({ columns: Object.values(data) }))
  );

  const [paginationProps, setPaginationProps] = useState({
    firstItemIndex: 1,
    lastItemIndex: 10,
    previousPageDisabled: true,
    nextPageDisabled: false,
    previousPageClickHandler: () => {
      setPaginationProps({
        ...paginationProps,
        firstItemIndex: paginationProps.firstItemIndex -= 10,
        lastItemIndex: paginationProps.lastItemIndex -= 10,
        previousPageDisabled: paginationProps.previousPageDisabled = true,
        nextPageDisabled: paginationProps.nextPageDisabled = false,
      });
      setRows(M.firstPage.map(data => ({ columns: Object.values(data) })));
    },
    nextPageClickHandler: () => {
      setPaginationProps({
        ...paginationProps,
        firstItemIndex: paginationProps.firstItemIndex += 10,
        lastItemIndex: paginationProps.lastItemIndex += 10,
        previousPageDisabled: paginationProps.previousPageDisabled = false,
        nextPageDisabled: paginationProps.nextPageDisabled = true,
      });
      setRows(M.secondPage.map(data => ({ columns: Object.values(data) })));
    },
  });

  return (
    <S.Container>
      <S.TableContainer>
        <Table
          header={header}
          rows={rows}
          rowClickHandler={console.log}
          paginationProps={paginationProps}
        />
      </S.TableContainer>
    </S.Container>
  );
};
