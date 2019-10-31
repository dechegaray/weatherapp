import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Illustration from './subcomponents/Illustration'
import WeatherStats from './subcomponents/WeatherStats'
import HourlyForecast from './subcomponents/HourlyForecast'
import DailyForecast from './subcomponents/DailyForecast'

import {fetchCurrentAndForecastWeatherByLocation} from '../../utils/api'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: this.props.location,
      currentWeather: null,
      hourlyForecast: [],
      dailyForecast: [],
      error: null,
    }
  }

  componentDidMount() {
    //console.log('[COMPONENT DID MOUNT]')
    const {location} = this.state

    //mockFetchCurrentAndForecastWeatherByLocation(location)
    fetchCurrentAndForecastWeatherByLocation(location)
      .then(data => {
        const {currentWeather, hourlyForecast, dailyForecast} = data

        this.setState({
          currentWeather,
          hourlyForecast,
          dailyForecast,
        })
      })
      .catch(error => {
        this.setState({error: error.message})
      })
  }

  render() {
    //console.log('[RENDER METHOD]')
    const {
      location,
      currentWeather,
      hourlyForecast,
      dailyForecast,
      error,
    } = this.state

    if (error) {
      return <div>{error}</div>
    }

    return (
      <div className="home-wrapper">
        {currentWeather ? (
          <div>
            <Illustration
              location={location}
              temperature={currentWeather.Temperature.Metric.Value}
              temperatureUnit="°C"
              weatherIcon={currentWeather.WeatherIcon}
              weatherText={currentWeather.WeatherText}
            />
            <WeatherStats
              realFeel={currentWeather.RealFeelTemperature.Metric.Value}
              realFeelUnit="°C"
              humidity={currentWeather.RelativeHumidity}
              humidityUnit="%"
              windSpeed={currentWeather.Wind.Speed.Metric.Value}
              windSpeedUnit="km/h"
              uvIndex={currentWeather.UVIndex}
              uvIndexUnit=""
              pressure={currentWeather.Pressure.Metric.Value}
              pressureUnit="mb"
              visibility={currentWeather.Visibility.Metric.Value}
              visibilityUnit="km"
            />
          </div>
        ) : (
          <div>Current weather not loaded</div>
        )}

        <HourlyForecast forecastList={hourlyForecast} />
        <DailyForecast forecastList={dailyForecast} />
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  location: PropTypes.string.isRequired,
}
