import React, {useState} from 'react';
import WeatherInfo from './WeatherInfo';
import {useLazyQuery} from '@apollo/client';
import { FETCH_WEATHER_QUERY } from '../graphql/Queries';

const Home = () => {
  const [city, setCity] = useState("");

  const [fetchWeather, { data, error }] = useLazyQuery(FETCH_WEATHER_QUERY, {
      variables: { name: city }
    });

  const handleChange = e => {
    setCity(e.target.value);
  }

  const handleSearch = () => {
    console.log(city)
    fetchWeather();
  
    if(error) return <p>Error</p>
    if(data) {
      console.log(data.getCityByName);
    }

  }

  return (
    <div>
      <div className="topbox">
        <h2 className="title">Weather in {city ? city: '...'}</h2>
        <div className="search">
          <input
            type="text"
            id="search-bar"
            placeholder="Enter City.."
            name="city"
            onChange={handleChange}
            value={city}
            className="searchbar"
          />
          <button 
            onClick={handleSearch}
            className="button"
          >Search
          </button>
        </div>
      </div>
      {data && (
        <WeatherInfo data={data.getCityByName} />
      )}
    </div>
  )
}

export default Home
