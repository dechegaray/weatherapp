import React from 'react'
import PropTypes from 'prop-types'

import './WeatherStatsItem.css'

const weatherStatsItem = props => {
  const {text, color, value, maxValue, unit} = props
  const barHeight = (value / maxValue) * 100

  return (
    <div className="weather-stats-item">
      <div className="weather-stats-bar">
        <div style={{height: barHeight, backgroundColor: color}}></div>
      </div>
      <div className="weather-stats-text">
        <span>{text}</span>
        <p>
          {value} {unit}
        </p>
      </div>
    </div>
  )
}

export default weatherStatsItem

weatherStatsItem.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
}
