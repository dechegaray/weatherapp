import React from 'react'
import PropTypes from 'prop-types'
import WeatherStatsItem from './WeatherStatsItem'

import './WeatherStats.css'

const weatherStats = props => {
  const {
    realFeel,
    realFeelUnit,
    windSpeed,
    windSpeedUnit,
    pressure,
    pressureUnit,
    humidity,
    humidityUnit,
    uvIndex,
    uvIndexUnit,
    visibility,
    visibilityUnit,
  } = props

  return (
    <div className="weather-stats">
      <div>
        <WeatherStatsItem
          text="Real feel"
          color="#999"
          value={realFeel}
          maxValue={70}
          unit={realFeelUnit}
        />
        <WeatherStatsItem
          text="Wind Speed"
          color="#999"
          value={windSpeed}
          maxValue={300}
          unit={windSpeedUnit}
        />
        <WeatherStatsItem
          text="Pressure"
          color="#999"
          value={pressure}
          maxValue={100}
          unit={pressureUnit}
        />
      </div>
      <hr />
      <div>
        <WeatherStatsItem
          text="Humidity"
          color="#999"
          value={humidity}
          maxValue={100}
          unit={humidityUnit}
        />
        <WeatherStatsItem
          text="UV Index"
          color="#999"
          value={uvIndex}
          maxValue={50}
          unit={uvIndexUnit}
        />
        <WeatherStatsItem
          text="Visibility"
          color="#999"
          value={visibility}
          maxValue={100}
          unit={visibilityUnit}
        />
      </div>
    </div>
  )
}

export default weatherStats

weatherStats.propTypes = {
  realFeel: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  uvIndex: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired,
}
