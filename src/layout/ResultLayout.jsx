import React from 'react';

const ResultLayout = (props) => {
  console.log(props);
  return (
  <div>
    <h3>Result Page</h3>
    {props.children}
  </div>
  );
};

export default ResultLayout;
