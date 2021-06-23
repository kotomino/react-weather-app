import React from 'react'

const WeatherInfo = ({data}) => {
  return (
    <div>
      <p>{data.name}, {data.country}</p>
      <p>{data.weather.summary.description}</p>
      <p>Actual: {Math.ceil((data.weather.temperature.actual - 273.15) * (9/5) + 32)}</p>
      <p>Feels like: {Math.ceil((data.weather.temperature.feelsLike - 273.15) * (9/5) + 32)}</p>
      <p>Wind: {data.weather.wind.speed}</p>
    </div>
  )
}

export default WeatherInfo
