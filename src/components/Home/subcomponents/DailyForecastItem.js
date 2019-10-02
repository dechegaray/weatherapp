import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getIconClassByIconWeatherId} from '../../../utils/iconUtils'

const dailyForecastItem = props => {
  const {
    day,
    date,
    icon,
    iconPhrase,
    minTemperature,
    maxTemperature,
    precipitation,
  } = props

  const weatherIcon = getIconClassByIconWeatherId(icon)

  return (
    <li>
      <div title={iconPhrase}>
        <FontAwesomeIcon icon={weatherIcon} />
      </div>
      <div>
        <p>{day}</p>
        <span>{date}</span>
      </div>
      <div>
        <p>{minTemperature}</p>
      </div>
      <div>
        <p>{maxTemperature}</p>
      </div>
      <div>
        <p>Rain</p>
        <span>{precipitation}</span>
      </div>
    </li>
  )
}

export default dailyForecastItem

dailyForecastItem.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  iconPhrase: PropTypes.string.isRequired,
  minTemperature: PropTypes.string.isRequired,
  maxTemperature: PropTypes.string.isRequired,
  precipitation: PropTypes.string.isRequired,
}