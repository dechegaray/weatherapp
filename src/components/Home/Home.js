import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Illustration from './subcomponents/Illustration'
import WeatherStats from './subcomponents/WeatherStats'
import HourlyForecast from './subcomponents/HourlyForecast'
import DailyForecast from './subcomponents/DailyForecast'

import {mockFetchCurrentAndForecastWeatherByLocation} from '../../utils/api'

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
    console.log('[COMPONENT DID MOUNT]')
    const {location} = this.state

    //fetchCurrentAndForecastWeatherByLocation(location)
    mockFetchCurrentAndForecastWeatherByLocation(location)
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
    console.log('[RENDER METHOD]')
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
              temperature={currentWeather.temperature}
              temperatureUnit={currentWeather.temperatureUnit}
              weatherIcon={currentWeather.weatherIcon}
              weatherText={currentWeather.weatherText}
            />
            <WeatherStats
              realFeel={currentWeather.realFeel}
              realFeelUnit={currentWeather.realFeelUnit}
              humidity={currentWeather.humidity}
              humidityUnit={currentWeather.humidityUnit}
              windSpeed={currentWeather.windSpeed}
              windSpeedUnit={currentWeather.windSpeedUnit}
              uvIndex={currentWeather.uvIndex}
              uvIndexUnit={currentWeather.uvIndexUnit}
              pressure={currentWeather.pressure}
              pressureUnit={currentWeather.pressureUnit}
              visibility={currentWeather.visibility}
              visibilityUnit={currentWeather.visibilityUnit}
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
