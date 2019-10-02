import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import HourlyForecastItem from './HourlyForecastItem'

const hourlyForecast = props => {
  const {forecastList} = props

  return (
    <ul className="weather-hourly-forecast">
      {forecastList.map(forecast => {
        const {EpochDateTime, DateTime, Temperature, WeatherIcon} = forecast

        const time = moment(DateTime).format('hh a')

        return (
          <HourlyForecastItem
            key={EpochDateTime}
            time={time}
            status={false}
            weatherIcon={WeatherIcon}
            temperature={`${Temperature.Value} °C`}
          />
        )
      })}
    </ul>
  )
}

export default hourlyForecast

hourlyForecast.propTypes = {
  forecastList: PropTypes.array.isRequired,
}
