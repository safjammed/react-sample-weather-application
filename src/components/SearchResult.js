import React from 'react';
import SearchResultItem from './SearchResultItem';


const SearchResult = ({places, onPlaceSelect}) => {

  const searchResultItems = places.map((place) => {
      return (
          <SearchResultItem onPlaceSelect={ place => onPlaceSelect(place)} key={place.place_id} place={place} />
      );
  });
  return (
      <div className="searchResults">
          <ul className={"list-group animated fadeIn"}>
              {searchResultItems}
          </ul>
      </div>
  );
};

export default SearchResult;
