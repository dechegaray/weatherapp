import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import HourlyForecast from '../../../components/Home/subcomponents/HourlyForecast'
import {forecast12hourData} from '../../../utils/mockData'

describe('Hourly Forecast List', () => {
  test('renders a <HourlyForecast> component and displays proper data', () => {
    const {container} = render(
      <HourlyForecast forecastList={forecast12hourData} />,
    )
    const list = container.querySelectorAll('li')
    expect(list.length).toBe(12)
  })

  test('renders an error when the prop Array does not have the right body', () => {
    const forecastList = [
      {prop1: 'Something wrong', prop2: 'Not even three props'},
    ]
    const {container} = render(<HourlyForecast forecastList={forecastList} />)
    const ulElement = container.querySelector('ul')
    const divErrorElement = ulElement.querySelector('.error-wrapper')
    expect(divErrorElement).toHaveTextContent(/missing data coming from api/i)
  })
})
