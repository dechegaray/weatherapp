import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import DailyForecastItem from './DailyForecastItem'
import {validateObjectProperties} from '../../../utils/utitities'

import './DailyForecast.css'

const dailyForecast = props => {
  const {forecastList} = props

  const requiredProperties = ['Date', 'EpochDate', 'Temperature', 'Day']

  return (
    <ul className="weather-daily-forecast">
      {forecastList.map((forecast, index) => {
        if (!validateObjectProperties(requiredProperties, forecast)) {
          return (
            <div key={index} className="error-wrapper">
              Some data fetched from the API is missing to create the Daily
              Forecast
            </div>
          )
        }

        const {Date, EpochDate, Temperature, Day} = forecast

        const weekDay = moment(Date).format('dddd')
        const formattedDate = moment(Date).format('MMM Do')

        return (
          <DailyForecastItem
            key={EpochDate}
            day={weekDay}
            date={formattedDate}
            icon={Day.Icon}
            iconPhrase={Day.IconPhrase}
            minTemperature={`${Temperature.Minimum.Value}°`}
            maxTemperature={`${Temperature.Maximum.Value}°`}
            precipitation={`${Day.RainProbability}%`}
          />
        )
      })}
    </ul>
  )
}

export default dailyForecast

dailyForecast.propTypes = {
  forecastList: PropTypes.array.isRequired,
}
