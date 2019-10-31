import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import HourlyForecastItem from './HourlyForecastItem'
import {validateObjectProperties} from '../../../utils/utitities'

import './HourlyForecast.css'

const hourlyForecast = props => {
  const {forecastList} = props

  const requiredProperties = [
    'EpochDateTime',
    'DateTime',
    'Temperature',
    'WeatherIcon',
  ]

  return (
    <div className="weather-hourly-forecast">
      <ul>
        {forecastList.map((forecast, index) => {
          if (!validateObjectProperties(requiredProperties, forecast)) {
            return (
              <div key={index} className="error-wrapper">
                Missing data coming from API (hourly forecast)
              </div>
            )
          }

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
