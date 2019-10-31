import {getIconClassByIconWeatherId} from '../../utils/iconUtils'

describe('Testing icons utils', () => {
  it('should get an icon class name based on a WeatherIcon ID', () => {
    const iconClass = getIconClassByIconWeatherId(1)
    expect(iconClass).toBeDefined()
    expect(iconClass).toBe('sun')
  })

  it('should throw an Error if the icon is not found', () => {
    expect(() => {
      getIconClassByIconWeatherId(999)
    }).toThrowError('The icon class was not found for the queried icon ID')
  })
})
