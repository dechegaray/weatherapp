import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import DailyForecastItem from './DailyForecastItem'

const dailyForecast = props => {
  const {forecastList} = props

  return (
    <ul className="weather-daily-forecast">
      {forecastList.map(forecast => {
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
            minTemperature={`${Temperature.Minimum.Value} °C`}
            maxTemperature={`${Temperature.Maximum.Value} °C`}
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
