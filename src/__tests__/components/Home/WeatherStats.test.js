import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import WeatherStats from '../../../components/Home/subcomponents/WeatherStats'

test('renders a <WeatherStats> component and displays proper data', () => {
  const myProps = {
    realFeel: 14,
    realFeelUnit: 'C',
    windSpeed: 12,
    windSpeedUnit: 'km/h',
    pressure: 1024,
    pressureUnit: 'mb',
    humidity: 79,
    humidityUnit: '%',
    uvIndex: 2,
    uvIndexUnit: '',
    visibility: 17.7,
    visibilityUnit: 'km',
  }

  const {container} = render(<WeatherStats {...myProps} />)
  const set1 = document.querySelector('.weather-stats > div:first-child')
  const set2 = document.querySelector('.weather-stats > div:last-child')
  expect(set1.childElementCount).toBe(3)
  expect(set2.childElementCount).toBe(3)
  expect(container).toHaveTextContent(/14 c/i)
  expect(container).toHaveTextContent(/12 km\/h/i)
  expect(container).toHaveTextContent(/1024 mb/i)
  expect(container).toHaveTextContent(/79 %/i)
  expect(container).toHaveTextContent(/17.7 km/i)
})
