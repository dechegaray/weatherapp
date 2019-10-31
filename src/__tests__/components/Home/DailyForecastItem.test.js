import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import DailyForecastItem from '../../../components/Home/subcomponents/DailyForecastItem'
import {getIconClassByIconWeatherId as mockedGetIconClass} from '../../../utils/iconUtils'

jest.mock('../../../utils/iconUtils', () => {
  return {
    getIconClassByIconWeatherId: jest.fn(iconId => 'temperature-low'),
  }
})

let myProps

beforeAll(() => {
  myProps = {
    day: 'Tuesday',
    date: 'Oct 12th',
    icon: 26,
    iconPhrase: 'Freezing Rain',
    minTemperature: '10°',
    maxTemperature: '15°',
    precipitation: '45%',
  }
})

afterAll(() => {
  myProps = null
})

describe('Daily Forecast Item component', () => {
  test('renders a <DailyForecastItem> component and displays proper data', () => {
    const {container, getByText} = render(<DailyForecastItem {...myProps} />)
    const dailyIcon = document.querySelector('li > div:first-child > i')

    expect(mockedGetIconClass).toHaveBeenCalledTimes(1)
    expect(mockedGetIconClass).toHaveBeenCalledWith(26)
    expect(mockedGetIconClass).toHaveReturnedWith('temperature-low')
    expect(getByText(/10°/i)).toBeTruthy()
    expect(getByText(/15°/i)).toBeTruthy()
    expect(getByText(/45%/i)).toBeTruthy()
    expect(container).toHaveTextContent(/Tuesday/i)
    expect(container).toHaveTextContent(/Oct 12th/i)

    expect(dailyIcon).toHaveClass('temperature-low')
  })
})
