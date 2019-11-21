import React from 'react';
import { Link } from 'react-router-dom';

const activeStyle = {
  backgroundColor: 'gainsboro',
};

const SearchMentionItem = (props) => {
  const { suggestion, isActive, index } = props;
  return (
    <li title="Asset là gì?" style={isActive ? activeStyle : null} className="row-item-suggestion-popup pointer">
      <Link
        onClick={() => props.selectSuggestion(suggestion.title)}
        onMouseOver={() => {
          props.setIndexIsSelected(index)
        }}
        to={`/result/news?page=1&keyword=${suggestion.title}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}>{suggestion.title}</div>
      </Link>
    </li>
  );
};

export default SearchMentionItem;
