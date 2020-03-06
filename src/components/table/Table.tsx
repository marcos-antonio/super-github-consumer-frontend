import React, { FunctionComponent, ReactNode } from "react";

import * as S from "./styles";

export interface Row {
  /**
   * The elements to apply to each header, from left to right.
   * These elements will only be applied if there are a header for it.
   * e.g.: If there is only 2 headers and 3 columns, only 2 columns will be rendered.
   */
  columns: ReactNode[];
}

export interface HeaderCell {
  /**
   * The element that will compose the table header
   */
  child: ReactNode;

  /**
   * Size in % that whole column will to have.
   * e.g: If setted to 20, this header and all of its rowCells will have the same size.
   * If not setted, the colum will try to take the available space
   */
  size?: number;
}

export interface TableProps {
  header: HeaderCell[];
  rows: Row[];
  rowClickHandler?: (row: Row) => void;
}

export const Table: FunctionComponent<TableProps> = ({
  header,
  rows,
  rowClickHandler
}) => {
  const getMountedHeader = () => {
    return header.map((h, i) => {
      return (
        <S.HeaderCell key={i} size={h.size}>
          {h.child}
        </S.HeaderCell>
      );
    });
  };

  const getMountedRows = () => {
    return rows.map((row, rowIndex) => {
      return (
        <S.RowContainer key={`row-${rowIndex}`}>
          <S.Row onClick={() => rowClickHandler?.(row)}>
            {row.columns.slice(0, header.length).map((column, columnIndex) => {
              return (
                <S.RowCell
                  size={header[columnIndex].size}
                  key={`column-${columnIndex}-row-${rowIndex}`}
                >
                  {column}
                </S.RowCell>
              );
            })}
          </S.Row>
        </S.RowContainer>
      );
    });
  };

  return (
    <S.Table>
      <S.HeaderContainer>
        <S.Header>{getMountedHeader()}</S.Header>
      </S.HeaderContainer>
      <S.Body>{getMountedRows()}</S.Body>
    </S.Table>
  );
};
