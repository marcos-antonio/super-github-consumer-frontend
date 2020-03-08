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
        data-testid={'arrow-left-icon'}
        disabled={previousPageDisabled}
        onClick={() => !previousPageDisabled && previousPageClickHandler()}
      />
      <S.ArrowRightIcon
        data-testid={'arrow-right-icon'}
        disabled={nextPageDisabled}
        onClick={() => !nextPageDisabled && nextPageClickHandler()}
      />
    </S.Container>
  );
};
