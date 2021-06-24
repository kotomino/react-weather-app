import React from 'react'
import temp from '../assets/temp.png';
import wind from '../assets/wind.png';

const WeatherInfo = ({data}) => {

  const imageUrl = "http://openweathermap.org/img/wn/" + data.weather.summary.icon + "@2x.png";
 
  return (
    <div className="weatherBox">
      {/* <p>{data.name}, {data.country}</p> */}
      <h3>{data.weather.summary.description}</h3>
      <p><img src={imageUrl} alt="icon"/></p>
      <p>
        <img src={temp} alt="temp" />
        Actual: {Math.ceil((data.weather.temperature.actual - 273.15) * (9/5) + 32)}
      </p>
      <p>
        <img src={temp} alt="temp" />
        Feels like: {Math.ceil((data.weather.temperature.feelsLike - 273.15) * (9/5) + 32)}
      </p>
      <p>
        <img src={wind} alt="wind" />
        {" "}Wind: {data.weather.wind.speed}
      </p>
    </div>
  )
}

export default WeatherInfo
