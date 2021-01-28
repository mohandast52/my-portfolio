import React from 'react';
import PropTypes from 'prop-types';
import { PaginationButton, Dots } from '../styles';

const DOTS = '...';

const Pagination = ({ friendsCount, activePage, updatePageNumber }) => {
  const pages = Math.ceil(friendsCount / 4, 10);

  const onClick = event => {
    const { page } = event.target.dataset;
    updatePageNumber(parseInt(page, 10));
  };

  /* retruns button if number is passed, else <Dots /> */
  const getType = valuePassed => {
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

Pagination.propTypes = {
  friendsCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  updatePageNumber: PropTypes.func,
};

Pagination.defaultProps = {
  updatePageNumber: () => {},
};

export default Pagination;
