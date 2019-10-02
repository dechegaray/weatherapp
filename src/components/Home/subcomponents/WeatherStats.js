import React from 'react'
import PropTypes from 'prop-types'
import WeatherStatsItem from './WeatherStatsItem'

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
          color="blue"
          value={realFeel}
          maxValue={70}
          unit={realFeelUnit}
        />
        <WeatherStatsItem
          text="Wind Speed"
          color="yellow"
          value={windSpeed}
          maxValue={300}
          unit={windSpeedUnit}
        />
      </div>
      <hr />
      <div>
        <WeatherStatsItem
          text="Pressure"
          color="aqua"
          value={pressure}
          maxValue={100}
          unit={pressureUnit}
        />
        <WeatherStatsItem
          text="Humidity"
          color="purple"
          value={humidity}
          maxValue={100}
          unit={humidityUnit}
        />
      </div>
      <hr />
      <div>
        <WeatherStatsItem
          text="UV Index"
          color="aqua"
          value={uvIndex}
          maxValue={50}
          unit={uvIndexUnit}
        />
        <WeatherStatsItem
          text="Visibility"
          color="purple"
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
