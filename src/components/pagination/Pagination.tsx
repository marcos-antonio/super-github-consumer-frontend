import React, { FunctionComponent } from 'react';

import * as S from './styled';

export interface PaginationProps {
  previousPageDisabled?: boolean;
  nextPageDisabled?: boolean;
  previousPageClickHandler?: () => void;
  nextPageClickHandler?: () => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  previousPageDisabled = false,
  nextPageDisabled = false,
  previousPageClickHandler,
  nextPageClickHandler,
}) => {
  return (
    <S.Container>
      <S.ArrowLeftIcon
        disabled={previousPageDisabled}
        onClick={() => !previousPageDisabled && previousPageClickHandler()}
      />
      <S.ArrowRightIcon
        disabled={nextPageDisabled}
        onClick={() => !nextPageDisabled && nextPageClickHandler()}
      />
    </S.Container>
  );
};
