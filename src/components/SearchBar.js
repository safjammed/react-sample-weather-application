import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term : ""
        }
    }
    
    render() {
        return (
            <div>
                <input
                    placeholder={"New York, US"}
                    className={"form-control"}
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