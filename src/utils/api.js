import axios from 'axios'
//import { currentWeatherData, forecast12hourData, forecast5daysData } from './mockData'

const API_KEY = '0yYC5QMuBLdpbe2XwmzCEEQCaPDhKs2p'
const API_URL = 'http://dataservice.accuweather.com'

export async function fetchCurrentWeatherByLocation(location) {
  const url = `${API_URL}/currentconditions/v1/${location}?details=true&apikey=${API_KEY}`

  try {
    const response = await axios.get(url)
    return response.data[0]
  } catch (error) {
    parseAPIErrors(error, 'There was an error fetching the current weather')
  }
}

export async function fetch12HourForecastByLocation(location) {
  const url = `${API_URL}/forecasts/v1/hourly/12hour/${location}?apikey=${API_KEY}`

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    parseAPIErrors(
      error,
      'There was an error fetching the weather forecast for the next 12 hours',
    )
  }
}

export async function fetch5DaysForecastByLocation(location) {
  const url = `${API_URL}/forecasts/v1/daily/5day/${location}?details=true&apikey=${API_KEY}`

  try {
    const response = await axios.get(url)
    return response.data.DailyForecasts
  } catch (error) {
    parseAPIErrors(
      error,
      'There was an error fetching the weather forecast for the next 5 days',
    )
  }
}

export async function fetchCurrentAndForecastWeatherByLocation(location) {
  try {
    const responseCurrent = await fetchCurrentWeatherByLocation(location)
    const responseHourly = await fetch12HourForecastByLocation(location)
    const responseDaily = await fetch5DaysForecastByLocation(location)

    return {
      currentWeather: responseCurrent,
      hourlyForecast: responseHourly,
      dailyForecast: responseDaily,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export function parseAPIErrors(error, customMessage) {
  if (error.response) {
    if (
      error.response.hasOwnProperty('data') &&
      error.response.hasOwnProperty('status')
    ) {
      const apiError = `${error.response.data.Message} (Code: ${error.response.status})`
      throw new Error(apiError)
    }
  }

  if (error.message) {
    throw new Error(error.message)
  }

  throw new Error(customMessage)
}

/*

let cachedCurrentWeather = null
let cachedForecast12hours = null
let cachedForecast5days = null

function mockFetchCurrentWeatherByLocation() {
  return new Promise((res) => {
    if (!cachedCurrentWeather) {
        cachedCurrentWeather = currentWeatherData[0];
        return setTimeout(() => res(cachedCurrentWeather), 800)
    }

    return res(cachedCurrentWeather)
  })
}

async function mockFetch12HourForecastByLocation() {
  return new Promise((res) => {
    if (!cachedForecast12hours) {
        cachedForecast12hours = forecast12hourData;
        return setTimeout(() => res(cachedForecast12hours), 800)
    }

    return res(cachedForecast12hours)
  })
}

async function mockFetch5DaysForecastByLocation() {
  return new Promise((res) => {
    if (!cachedForecast5days) {
      cachedForecast5days = forecast5daysData.DailyForecasts;
        return setTimeout(() => res(cachedForecast5days), 800)
    }

    return res(cachedForecast5days)
  })
}

export async function mockFetchCurrentAndForecastWeatherByLocation(location) {
  try {
    const responseCurrent = await mockFetchCurrentWeatherByLocation()
    const responseHourly = await mockFetch12HourForecastByLocation()
    const responseDaily = await mockFetch5DaysForecastByLocation()

    return {
      currentWeather: responseCurrent,
      hourlyForecast: responseHourly,
      dailyForecast: responseDaily,
    }
  } catch (error) {
    throw new Error(error)
  }
}
*/
