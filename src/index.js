import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import weather from 'openweather-apis';

//Components
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

const APP_KEY = "aba1aa82597e5ab96cffc6bf167bc556";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            weatherData:null,
            placeData: null,
            currentPlace:{
                name:null,
                lat: null,
                lon: null,
                country: null
            }

        };
        this.placeSearch("dhaka");
    }

    placeSearch(term){
        fetch(`https://nominatim.openstreetmap.org/search?q=${term}&format=json&addressdetails=1`)
            .then(res => res.json())
            .then(resp => {
                console.log(resp);
                this.setState({
                    placeData:resp
                });
            })
        // nominatim.search({ q: 'Adela'}, function(err, opts, results) {
        //     console.log(results);
        // });
    }

    getWeatherOf(lat, lon){
        weather.setCoordinate(lat, lon);
        weather.setUnits('metric');
        weather.setAPPID(APP_KEY);
        weather.getAllWeather((error, data) => {
            console.log(data);
            this.setState({weatherData})
        });
    }

    render() {
        return (
            <div>
            <SearchBar />
            <SearchResult />
            </div>
        );
    }


}

ReactDOM.render(
    <App />,
    document.querySelector(".app")
)
