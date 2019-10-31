import * as apiUtils from '../../utils/api'
import axiosMock from 'axios'
import {promised} from 'q'

jest.mock('axios')

describe('testing the different function that fetches data', () => {
  test('fetches current weather conditions returns data on 200', async () => {
    axiosMock.get.mockResolvedValueOnce({data: [{prop1: 'something'}]})
    const data = await apiUtils.fetchCurrentWeatherByLocation('location')
    expect(data).toBeDefined()
  })

  test('throws an error when current weather conditions cannot be retrieved', async () => {
    axiosMock.get.mockRejectedValueOnce(new Error('Something did not go well'))

    try {
      await apiUtils.fetchCurrentWeatherByLocation('location')
    } catch (error) {
      expect(error).toBeDefined()
    }
  })

  test('fetches hourly forecast returns data on 200', async () => {
    axiosMock.get.mockResolvedValueOnce({data: [{prop1: 'something'}]})
    const data = await apiUtils.fetch12HourForecastByLocation('location')
    expect(data).toBeDefined()
  })

  test('throws an error when hourly forecast cannot be retrieved', async () => {
    axiosMock.get.mockRejectedValueOnce(new Error('Something did not go well'))

    try {
      await apiUtils.fetch12HourForecastByLocation('location')
    } catch (error) {
      expect(error.message).toEqual('Something did not go well')
    }
  })

  test('fetches daily forecast returns data on 200', async () => {
    axiosMock.get.mockResolvedValueOnce({data: {DailyForecasts: 'something'}})
    const data = await apiUtils.fetch5DaysForecastByLocation('location')
    expect(data).toBeDefined()
  })

  test('throws an error when daily forecast cannot be retrieved', async () => {
    axiosMock.get.mockRejectedValueOnce(new Error('Something did not go well'))

    try {
      await apiUtils.fetch5DaysForecastByLocation('location')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toEqual('Something did not go well')
    }
  })

  test('fetches all the required data at once', async () => {
    axiosMock.get.mockResolvedValueOnce({data: ['current']})
    axiosMock.get.mockResolvedValueOnce({data: 'hourly'})
    axiosMock.get.mockResolvedValueOnce({data: {DailyForecasts: 'daily'}})

    const data = await apiUtils.fetchCurrentAndForecastWeatherByLocation(
      'location',
    )

    const exampleData = {
      currentWeather: 'current',
      hourlyForecast: 'hourly',
      dailyForecast: 'daily',
    }

    expect(data).toEqual(exampleData)
  })

  test('throws an error if one of the inner functions fails', async () => {
    axiosMock.get.mockRejectedValueOnce(new Error('Something did not go well'))

    try {
      await apiUtils.fetchCurrentAndForecastWeatherByLocation('location')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toEqual('Error: Something did not go well')
    }
  })
})

describe('testing the ParseAPIError function in multiple scenarios', () => {
  test('takes a VALID AXIOS error and throws it again', () => {
    const customMessage = 'A default message just in case'
    const customError = {
      response: {
        data: {Message: 'Here is the axios error'},
        status: 500,
      },
    }

    expect(() => {
      apiUtils.parseAPIErrors(customError, customMessage)
    }).toThrowError('Here is the axios error')
  })

  test('validates an INVALID axios error and throws generic', () => {
    const customMessage = 'A default message just in case'
    const customError = {
      response: {message: 'Here is the axios error'},
    }

    expect(() => {
      apiUtils.parseAPIErrors(customError, customMessage)
    }).toThrowError('A default message just in case')
  })

  test('takes a VALID error and throws it again', () => {
    const customError = new Error('This is my custom error')
    const customMessage = 'A default message just in case'

    expect(() => {
      apiUtils.parseAPIErrors(customError, customMessage)
    }).toThrowError('This is my custom error')
  })

  test('takes an INVALID error and throws it again', () => {
    const customError = {prop1: 'an invalid error object'}
    const customMessage = 'A default message just in case'

    expect(() => {
      apiUtils.parseAPIErrors(customError, customMessage)
    }).toThrowError('A default message just in case')
  })
})
