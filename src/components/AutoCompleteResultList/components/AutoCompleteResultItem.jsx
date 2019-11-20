import React from 'react';

const AutoCompleteResultItem = () => {
  return (
    <li title="Asset là gì?" className="row-item-suggestion-popup pointer">
      <div style={{
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}>Asset là gì? </div>
    </li>
  );
};

export default AutoCompleteResultItem;
