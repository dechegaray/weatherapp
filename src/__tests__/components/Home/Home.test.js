import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, wait} from '@testing-library/react'
import Home from '../../../components/Home/Home'
import * as apiUtils from '../../../utils/api'

import {
  currentWeatherData,
  forecast12hourData,
  forecast5daysData,
} from '../../../utils/mockData'

const location = '55071'

describe('Home component', () => {
  test('renders component without crashing', async () => {
    const fetchWeatherMock = jest.spyOn(
      apiUtils,
      'fetchCurrentAndForecastWeatherByLocation',
    )
    fetchWeatherMock.mockImplementation(() =>
      Promise.resolve({
        currentWeather: currentWeatherData[0],
        hourlyForecast: forecast12hourData,
        dailyForecast: forecast5daysData.DailyForecasts,
      }),
    )

    const {container} = render(<Home location={location} />)
    expect(container).toHaveTextContent(/current weather not loaded/i)

    await wait(() => {
      const hourlyList = container.querySelectorAll(
        '.weather-hourly-forecast > ul > li',
      )
      const dailyList = container.querySelectorAll(
        '.weather-daily-forecast > li',
      )

      expect(fetchWeatherMock).toHaveBeenCalledTimes(1)
      expect(fetchWeatherMock).toHaveBeenCalledWith(location)
      expect(container).not.toHaveTextContent(/current weather not loaded/i)
      expect(container.querySelector('.weather-illustration')).toBeTruthy()
      expect(container.querySelector('.weather-stats')).toBeTruthy()
      expect(hourlyList.length).toBeGreaterThan(1)
      expect(dailyList.length).toBeGreaterThan(1)
    })

    fetchWeatherMock.mockRestore()
  })

  test('renders error when fetching API fails', async () => {
    const fetchWeatherMock = jest.spyOn(
      apiUtils,
      'fetchCurrentAndForecastWeatherByLocation',
    )
    fetchWeatherMock.mockImplementation(() =>
      Promise.reject(new Error('testing a failing RESTful request')),
    )

    const {container} = render(<Home location={location} />)

    await wait(() => {
      expect(fetchWeatherMock).toHaveBeenCalledTimes(1)
      expect(fetchWeatherMock).toHaveBeenCalledWith(location)
      expect(container).toHaveTextContent(/testing a failing restful request/i)
    })

    fetchWeatherMock.mockRestore()
  })
})
