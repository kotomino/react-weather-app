import React, {useState} from 'react'
import {useLazyQuery} from '@apollo/client';
import { FETCH_WEATHER_QUERY } from './../graphql/Queries';

const Search = () => {

  const [city, setCity] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    fetchWeather();

    if(error) return <p>Error</p>
    if(data) {
      console.log(data);
    }
  }

  const handleChange = e => {
    // console.log(e.target.name, e.target.value);
    setCity(e.target.value)
  }

  const [fetchWeather, {loading, data, error}] = useLazyQuery(FETCH_WEATHER_QUERY, {
    variables: { name: city }
  });

  

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        id="search-bar"
        placeholder="City Name"
        name="city"
        onInput={handleChange}
        value={city}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search

