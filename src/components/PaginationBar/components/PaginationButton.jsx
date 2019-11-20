import React from 'react';
import { Link } from 'react-router-dom';

const PaginationButton = (props) => {
  const { pageNum, isActive, location } = props;
  return (
  <Link
    className={`sr-pagination--item ${isActive ? 'is-actived' : ''} _custom_pagination__page__3DmOj`}
    to={`${location.pathname}?page=${pageNum}`}
    onClick={() => props.setPageSelected(pageNum)}
  >{pageNum}</Link>
  );
};

export default PaginationButton;
