import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import weather from 'openweather-apis';

//Components
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import WeatherDetails from './components/WeatherDetails';

const APP_KEY = "aba1aa82597e5ab96cffc6bf167bc556";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            weatherData:null,
            placeData: [],
        };
        this.getWeatherOf({lat: 23.76, lon: 90.38}); //DHAKA
    }

    placeSearch(term){
        fetch(`https://nominatim.openstreetmap.org/search?q=${term}&format=json&limit=5`)
            .then(res => res.json())
            .then(resp => {
                this.setState({
                    placeData:resp
                });
            });
    }

    getWeatherOf(place){

        const lat = place.lat;
        const lon = place.lon;
        weather.setCoordinate(lat, lon);
        weather.setUnits('metric');
        weather.setAPPID(APP_KEY);
        weather.getAllWeather((error, weatherData) => {
            this.setState({weatherData,placeData: []});
        });
    }

    render() {
        const placeSearch = _.debounce(term => this.placeSearch(term), 500 );
        return (
            <div>
                <SearchBar onSearchInput={term => placeSearch(term)} />
                <SearchResult onPlaceSelect={place => this.getWeatherOf(place)} places={this.state.placeData} />
                <WeatherDetails weatherData={this.state.weatherData} />
            </div>
        );
    }


}

ReactDOM.render(
    <App />,
    document.querySelector(".app")
);
