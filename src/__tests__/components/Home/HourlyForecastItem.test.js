import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import HourlyForecastItem from '../../../components/Home/subcomponents/HourlyForecastItem'
import {getIconClassByIconWeatherId as mockedGetIconClass} from '../../../utils/iconUtils'

jest.mock('../../../utils/iconUtils', () => {
  return {
    getIconClassByIconWeatherId: jest.fn(iconId => 'sun'),
  }
})

describe('Hourly Forecast Item component', () => {
  test('renders a <DailyForecastItem> component and displays proper data', () => {
    let myProps = {
      time: '10:00',
      weatherIcon: 2,
      status: true,
      temperature: '18°',
    }

    const {container, rerender, getByText} = render(
      <HourlyForecastItem {...myProps} />,
    )
    const hourlyIcon = document.querySelector('li > i')

    expect(mockedGetIconClass).toHaveBeenCalledTimes(1)
    expect(mockedGetIconClass).toHaveBeenCalledWith(2)
    expect(mockedGetIconClass).toHaveReturnedWith('sun')
    expect(hourlyIcon).toHaveClass('sun')

    expect(getByText(/10:00/i)).toBeTruthy()
    expect(getByText(/18°/i)).toBeTruthy()
    expect(container.childNodes[0]).toHaveClass('active')

    myProps = {
      time: '10:00',
      weatherIcon: 2,
      status: false,
      temperature: '18°',
    }

    rerender(<HourlyForecastItem {...myProps} />)
    expect(container.childNodes[0]).not.toHaveClass('active')
  })
})
