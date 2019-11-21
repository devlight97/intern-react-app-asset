import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const PaginationButton = (props) => {
  const { pageNum, isActive, location } = props;
  const { keyword } = queryString.parse(location.search);
  return (
  <Link
    className={`sr-pagination--item ${isActive ? 'is-actived' : ''} _custom_pagination__page__3DmOj`}
    to={`${location.pathname}?page=${pageNum}&keyword=${keyword || ''}`}
    onClick={() => props.setPageSelected(pageNum)}
  >{pageNum}</Link>
  );
};

export default PaginationButton;
