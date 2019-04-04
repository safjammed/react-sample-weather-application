import React from 'react';
import SearchResultItem from './SearchResultItem';
const SearchResult = () => {
  return (
      <div>
          <ul className={"list-group"}>
            <SearchResultItem />
          </ul>
      </div>
  );
};

export default SearchResult;
