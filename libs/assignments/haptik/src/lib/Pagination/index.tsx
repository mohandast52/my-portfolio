import React from 'react';
import { PaginationButton, Dots } from '../styles';

const DOTS = '...';

interface PaginationProps {
  friendsCount: number;
  activePage: number;
  updatePageNumber?: (page: number) => void;
}

const Pagination = ({
  friendsCount,
  activePage,
  updatePageNumber = () => {},
}: PaginationProps) => {
  const pages = Math.ceil(friendsCount / 4);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { page } = (event.target as HTMLButtonElement).dataset;
    updatePageNumber(parseInt(page as string, 10));
  };

  /* retruns button if number is passed, else <Dots /> */
  const getType = (valuePassed: number | string, _key?: string) => {
    if (typeof valuePassed === 'string') return <Dots>{DOTS}</Dots>;

    return (
      <PaginationButton
        data-page={valuePassed}
        className={activePage === valuePassed ? 'active' : ''}
        type="submit"
        onClick={onClick}
      >
        {valuePassed}
      </PaginationButton>
    );
  };

  /* if pages <= 5, printing <= 5 buttons */
  if (pages <= 5) {
    return [...Array(pages)]
      .map((_, i) => i + 1)
      .map(eachValue => getType(eachValue, `p-initial-${eachValue}`));
  }

  if (activePage < 3) {
    return (
      <>
        {[1, 2, 3, DOTS, pages].map(eachValue => getType(eachValue, `p-start-${eachValue}`))}
      </>
    );
  }

  if (activePage > pages - 2) {
    return (
      <>
        {[1, DOTS, pages - 2, pages - 1, pages].map(eachValue => getType(eachValue, `p-last-${eachValue}`))}
      </>
    );
  }

  return (
    <>
      {[
        1,
        DOTS,
        activePage - 1,
        activePage,
        activePage + 1,
        DOTS,
        pages,
      ].map(eachValue => getType(eachValue, `p-between-${eachValue}`))}
    </>
  );
};

export default Pagination;
