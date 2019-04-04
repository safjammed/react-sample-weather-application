import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term : ""
        }
    }
    
    render() {
        return (
            <div className='searchbar'>
                <FontAwesomeIcon icon={faSearch} className={'searchbar-ico animated fadeIn'} />
                <input
                    placeholder={"New York, US"}
                    className={"searchbar-input animated fadeIn"}
                    value={this.state.term}
                    onChange={event => this.onChangeInput(event.target.value)}
                />
            </div>
        );
    }
    onChangeInput(term){
        this.setState({term:term});
        this.props.onSearchInput(term);
    }
}
export default SearchBar;