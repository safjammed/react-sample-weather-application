import React from 'react';

const SearchResultItem = ({place,onPlaceSelect}) => {
    return (
      <li className={"list-group-item"} onClick={() => {onPlaceSelect(place);}}>
        <div className="media">
            <div className="media-body">
                <div className="media-heading">{place.display_name}</div>
            </div>
        </div>
      </li>
    );
};

export default SearchResultItem;