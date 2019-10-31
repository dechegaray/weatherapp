import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import WeatherStatsItem from '../../../components/Home/subcomponents/WeatherStatsItem'

describe('Weather Stat Item component', () => {
  test('renders a <WeatherStatItem> component and displays proper data', () => {
    const myProps = {
      text: 'Real feel',
      color: '#999',
      value: 15,
      maxValue: 60,
      unit: 'C',
    }

    const {getByText} = render(<WeatherStatsItem {...myProps} />)
    const barDiv = document.querySelector('div.weather-stats-bar >div')

    expect(getByText(/real feel/i)).toBeTruthy()
    expect(getByText(/15 c/i)).toBeTruthy()
    expect(barDiv).toBeTruthy()
    expect(barDiv).toHaveAttribute(
      'style',
      'height: 25px; background-color: rgb(153, 153, 153);',
    )
  })

  test('renders an error if the "value" of the props provided is greater than the maxValue', () => {
    const myProps = {
      text: 'Real feel',
      color: '#999',
      value: 80,
      maxValue: 60,
      unit: 'C',
    }
    const errorMsg =
      'The value: 80 cannot be greater than the maxValue: 60, provide valid props'
    const {container} = render(<WeatherStatsItem {...myProps} />)
    expect(container).toHaveTextContent(errorMsg)
  })
})
