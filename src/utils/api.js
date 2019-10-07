import axios from 'axios'

const API_KEY = '0yYC5QMuBLdpbe2XwmzCEEQCaPDhKs2p'
const API_URL = 'http://dataservice.accuweather.com'

async function fetchCurrentWeatherByLocation(location) {
  const url = `${API_URL}/currentconditions/v1/${location}?details=true&apikey=${API_KEY}`

  try {
    const response = await axios.get(url)

    const data = response.data[0]

    return {
      realFeel: data.RealFeelTemperature.Metric.Value,
      realFeelUnit: '°C',
      humidity: data.RelativeHumidity,
      humidityUnit: '%',
      windSpeed: data.Wind.Speed.Metric.Value,
      windSpeedUnit: 'km/h',
      temperature: data.Temperature.Metric.Value,
      temperatureUnit: '°C',
      pressure: data.Pressure.Metric.Value,
      pressureUnit: 'mb',
      uvIndex: data.UVIndex,
      uvIndexUnit: '',
      visibility: data.Visibility.Metric.Value,
      visibilityUnit: 'km',
      weatherIcon: data.WeatherIcon,
      weatherText: data.WeatherText,
    }
  } catch (error) {
    parseAPIErrors(error, 'There was an error fetching the current weather')
  }
}

async function fetch12HourForecastByLocation(location) {
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

async function fetch5DaysForecastByLocation(location) {
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

async function mockFetchCurrentWeatherByLocation(location) {
  return {
    realFeel: 18,
    realFeelUnit: '°C',
    humidity: 80,
    humidityUnit: '%',
    windSpeed: 20,
    windSpeedUnit: 'km/h',
    temperature: 18,
    temperatureUnit: '°C',
    pressure: 1080,
    pressureUnit: 'mb',
    uvIndex: 0,
    uvIndexUnit: '',
    visibility: 20,
    visibilityUnit: 'km',
    weatherIcon: 5,
    weatherText: 'Random message',
  }
}

async function mockFetch12HourForecastByLocation(location) {
  return [
    {
      EpochDateTime: 1570414750,
      DateTime: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      Temperature: {
        Value: 18,
      },
      WeatherIcon: 5,
    },
    {
      EpochDateTime: 1570414751,
      DateTime: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      Temperature: {
        Value: 18,
      },
      WeatherIcon: 5,
    },
    {
      EpochDateTime: 1570414752,
      DateTime: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      Temperature: {
        Value: 18,
      },
      WeatherIcon: 5,
    },
    {
      EpochDateTime: 1570414753,
      DateTime: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      Temperature: {
        Value: 18,
      },
      WeatherIcon: 5,
    },
    {
      EpochDateTime: 1570414754,
      DateTime: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      Temperature: {
        Value: 18,
      },
      WeatherIcon: 5,
    },
  ]
}

async function mockFetch5DaysForecastByLocation(location) {
  return [
    {
      Date: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      EpochDate: 1570414750,
      Temperature: {
        Minimum: {
          Value: 15,
        },
        Maximum: {
          Value: 19,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Showers',
        RainProbability: 30,
      },
    },
    {
      Date: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      EpochDate: 1570414751,
      Temperature: {
        Minimum: {
          Value: 15,
        },
        Maximum: {
          Value: 19,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Showers',
        RainProbability: 30,
      },
    },
    {
      Date: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      EpochDate: 1570414752,
      Temperature: {
        Minimum: {
          Value: 15,
        },
        Maximum: {
          Value: 19,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Showers',
        RainProbability: 30,
      },
    },
    {
      Date: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      EpochDate: 1570414753,
      Temperature: {
        Minimum: {
          Value: 15,
        },
        Maximum: {
          Value: 19,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Showers',
        RainProbability: 30,
      },
    },
    {
      Date: 'Sun Oct 06 2019 22:20:01 GMT-0400',
      EpochDate: 1570414754,
      Temperature: {
        Minimum: {
          Value: 15,
        },
        Maximum: {
          Value: 19,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: 'Showers',
        RainProbability: 30,
      },
    },
  ]
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

export async function mockFetchCurrentAndForecastWeatherByLocation(location) {
  try {
    const responseCurrent = await mockFetchCurrentWeatherByLocation(location)
    const responseHourly = await mockFetch12HourForecastByLocation(location)
    const responseDaily = await mockFetch5DaysForecastByLocation(location)

    return {
      currentWeather: responseCurrent,
      hourlyForecast: responseHourly,
      dailyForecast: responseDaily,
    }
  } catch (error) {
    throw new Error(error)
  }
}

function parseAPIErrors(error, customMessage) {
  if (error.response) {
    const apiError = `${error.response.data.Message} (Code: ${error.response.status})`
    throw new Error(apiError)
  }

  throw new Error(customMessage)
}
