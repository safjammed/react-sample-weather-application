import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureLow, faTemperatureHigh, faWater, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const WeatherDetails = ({weatherData}) =>{
    console.info(weatherData);
    let w = weatherData;
    if (!weatherData){
        return "Loading...";
    }
    return (
        <div className={"weatherDetails mw-"}>
            <div className="card text-center">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className={"place-ico"} />
                            <p className="placename">{w.name}</p>
                            <h1>
                                <span>{w.main.temp}&deg;</span>
                                <img className="weather-image" src={`http://openweathermap.org/img/w/${w.weather[0].icon}.png`} />
                            </h1>

                            <h4 className="card-title"> {w.weather[0].main}</h4>
                            <p className="card-text">{w.weather[0].description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 weather-block">
                            <FontAwesomeIcon icon={faTemperatureHigh} className={"wb-icon"} />
                            <h3 className={'wb-value'}>{w.main.temp_max}&deg;</h3>
                            <p className={'wb-desc'}>Max Temperature</p>
                        </div>
                        <div className="col-6 weather-block">
                            <FontAwesomeIcon icon={faTemperatureLow} className={"wb-icon"} />
                            <h3 className={'wb-value'}>{w.main.temp_max}&deg;</h3>
                            <p className={'wb-desc'}>Min Temperature</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 weather-block">
                            <FontAwesomeIcon icon={faWater} className={"wb-icon"} />
                            <h3 className={'wb-value'}>{w.main.pressure} Pa</h3>
                            <p className={'wb-desc'}>Pressure</p>
                        </div>
                        <div className="col-6 weather-block">
                            <FontAwesomeIcon icon={faTemperatureLow} className={"wb-icon"} />
                            <h3 className={'wb-value'}>{w.main.humidity}%</h3>
                            <p className={'wb-desc'}>Humidity</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;