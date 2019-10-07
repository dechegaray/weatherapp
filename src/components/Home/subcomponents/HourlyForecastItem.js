import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getIconClassByIconWeatherId} from '../../../utils/iconUtils'

const hourlyForecastItem = props => {
  const {time, weatherIcon, status, temperature} = props

  const icon = getIconClassByIconWeatherId(weatherIcon)

  return (
    <li className={status ? 'active' : ''}>
      <div>
        <span>{time}</span>
        <p>{temperature}</p>
      </div>
      <FontAwesomeIcon icon={icon} />
    </li>
  )
}

export default hourlyForecastItem

hourlyForecastItem.propTypes = {
  time: PropTypes.string.isRequired,
  weatherIcon: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  temperature: PropTypes.string.isRequired,
}
