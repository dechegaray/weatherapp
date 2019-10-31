import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import DailyForecast from '../../../components/Home/subcomponents/DailyForecast'
import {forecast5daysData} from '../../../utils/mockData'

describe('Daily Forecast List', () => {
  test('renders a <DailyForecast> component and displays proper data', () => {
    const forecastList = forecast5daysData.DailyForecasts
    const {container} = render(<DailyForecast forecastList={forecastList} />)
    const ulElement = container.childNodes[0]
    expect(ulElement.childNodes.length).toBe(5)
  })

  test('renders an error when the prop Array does not have the right body', () => {
    const forecastList = [
      {prop1: 'Something wrong', prop2: 'Not even three props'},
    ]
    const {container} = render(<DailyForecast forecastList={forecastList} />)
    expect(container).toHaveTextContent(
      /some data fetched from the api is missing to create the daily forecast/i,
    )
  })
})
