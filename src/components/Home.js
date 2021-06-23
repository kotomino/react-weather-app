import React, {useState} from 'react'
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
      <h2>Weather App</h2>
      <input
        type="text"
        id="search-bar"
        placeholder="City Name"
        name="city"
        onChange={handleChange}
        value={city}
      />
      <button onClick={handleSearch}>Search</button>
      {data && (
        <WeatherInfo data={data.getCityByName} />
      )}
    </div>
  )
}

export default Home
