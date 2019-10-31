import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render} from '@testing-library/react'
import Illustration from '../../../components/Home/subcomponents/Illustration'
import {getIconClassByIconWeatherId as mockedGetIconClass} from '../../../utils/iconUtils'

jest.mock('../../../utils/iconUtils', () => {
  return {
    getIconClassByIconWeatherId: jest.fn(iconId => 'sun'),
  }
})

describe('Illustration component', () => {
  test('renders an <Illustration> component successfully', () => {
    const {getByText} = render(
      <Illustration
        location="Mississauga"
        weatherIcon={2}
        weatherText="Sunny"
        temperature={14}
        temperatureUnit="C"
      />,
    )

    const locationIcon = document.querySelector('a.weather-location > i')
    const illustrationIcon = document.querySelector(
      'div.weather-illustration > i',
    )

    expect(getByText(/mississauga/i)).toBeTruthy()
    expect(getByText(/14 c/i)).toBeTruthy()
    expect(locationIcon).toHaveClass('map-marker-alt')
    expect(illustrationIcon).toHaveClass('sun')
    expect(illustrationIcon).toHaveAttribute('title', 'Sunny')
    expect(mockedGetIconClass).toHaveBeenCalledTimes(1)
    expect(mockedGetIconClass).toHaveBeenCalledWith(2)
  })
})
