import React, { FunctionComponent } from 'react';

import * as S from './styled';

export interface PaginationProps {
  /**
   * Number to be displayed indicating the index of the first item in this sublist of items.
   * E.g.: If the list has 100 items and those items are displayed 10 by 10 and we are on page 2,
   * this prop would be 21.
   */
  firstItemIndex: number;

  /**
   * Number to be displayed indicating the index of the first item in this sublist of items.
   * E.g.: If the list has 100 items and those items are displayed 10 by 10 and we are on page 2,
   * this prop would be 30.
   */
  lastItemIndex: number;

  /**
   * Indicates the total number of items in the list being displayed.
   */
  totalItems?: number;

  previousPageDisabled?: boolean;
  nextPageDisabled?: boolean;
  previousPageClickHandler: () => void;
  nextPageClickHandler: () => void;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  firstItemIndex,
  lastItemIndex,
  totalItems,
  previousPageDisabled = false,
  nextPageDisabled = false,
  previousPageClickHandler,
  nextPageClickHandler,
}) => {
  return (
    <S.Container>
      <S.ItemCounterContainer>
        {firstItemIndex} - {lastItemIndex} {totalItems && `of ${totalItems}`}
      </S.ItemCounterContainer>
      <S.ArrowLeftIcon
        disabled={previousPageDisabled}
        onClick={() => previousPageClickHandler()}
      />
      <S.ArrowRightIcon
        disabled={nextPageDisabled}
        onClick={() => nextPageClickHandler()}
      />
    </S.Container>
  );
};
