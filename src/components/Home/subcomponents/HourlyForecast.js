import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import HourlyForecastItem from './HourlyForecastItem'

import './HourlyForecast.css'

const hourlyForecast = props => {
  const {forecastList} = props

  return (
    <div className="weather-hourly-forecast">
      <ul>
        {forecastList.map(forecast => {
          const {EpochDateTime, DateTime, Temperature, WeatherIcon} = forecast

          const time = moment(DateTime).format('h:mm')

          return (
            <HourlyForecastItem
              key={EpochDateTime}
              time={time}
              status={false}
              weatherIcon={WeatherIcon}
              temperature={`${Temperature.Value}°`}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default hourlyForecast

hourlyForecast.propTypes = {
  forecastList: PropTypes.array.isRequired,
}
