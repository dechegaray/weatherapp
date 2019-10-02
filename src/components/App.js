import React, {Component} from 'react'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'

import './App.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faBolt,
  faWind,
  faSmog,
  faCloud,
  faSun,
  faUmbrella,
  faCloudSunRain,
  faCloudSun,
  faCloudShowersHeavy,
  faCloudRain,
  faCloudMoonRain,
  faCloudMeatball,
  faTemperatureLow,
  faTemperatureHigh,
  faSnowflake,
  faCloudMoon,
  faMoon,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBolt,
  faWind,
  faSmog,
  faCloud,
  faSun,
  faUmbrella,
  faCloudSunRain,
  faCloudSun,
  faCloudShowersHeavy,
  faCloudRain,
  faCloudMoonRain,
  faCloudMeatball,
  faTemperatureLow,
  faTemperatureHigh,
  faSnowflake,
  faCloudMoon,
  faMoon,
  faMapMarkerAlt,
)

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: null,
      defaultLocation: '55071',
    }
  }

  componentDidMount() {}

  render() {
    const {location, defaultLocation} = this.state
    const currentLocation = location ? location : defaultLocation

    return (
      <div className="App">
        <Home location={currentLocation} />
        <Navbar />
      </div>
    )
  }
}

export default App
