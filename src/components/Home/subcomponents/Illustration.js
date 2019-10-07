import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {getIconClassByIconWeatherId} from '../../../utils/iconUtils'

import './Illustration.css'

const illustration = props => {
  const {
    location,
    weatherIcon,
    weatherText,
    temperature,
    temperatureUnit,
  } = props

  const icon = getIconClassByIconWeatherId(weatherIcon)

  return (
    <div className="weather-illustration">
      <a className="weather-location" href="./">
        <FontAwesomeIcon icon="map-marker-alt" />
        <p>{location}</p>
      </a>
      <h1>
        {temperature} {temperatureUnit}
      </h1>
      <FontAwesomeIcon icon={icon} title={weatherText} />
    </div>
  )
}

export default illustration

illustration.propTypes = {
  location: PropTypes.string.isRequired,
  weatherIcon: PropTypes.number.isRequired,
  weatherText: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  temperatureUnit: PropTypes.string.isRequired,
}
