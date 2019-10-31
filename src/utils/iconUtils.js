const iconsTemplate = [
  {id: 1, weatherState: 'Sunny', weatherIcon: 'sun'},
  {id: 2, weatherState: 'Mostly Sunny', weatherIcon: 'sun'},
  {id: 3, weatherState: 'Partly Sunny', weatherIcon: 'cloud-sun'},
  {id: 4, weatherState: 'Intermittent Clouds', weatherIcon: 'cloud-sun'},
  {id: 5, weatherState: 'Hazy Sunshine', weatherIcon: 'sun'},
  {id: 6, weatherState: 'Mostly Cloudy', weatherIcon: 'cloud'},
  {id: 7, weatherState: 'Cloudy', weatherIcon: 'cloud'},
  {id: 8, weatherState: 'Dreary', weatherIcon: 'cloud-rain'},
  {id: 11, weatherState: 'Fog', weatherIcon: 'water'},
  {id: 12, weatherState: 'Showers', weatherIcon: 'cloud-rain'},
  {id: 13, weatherState: 'Mostly Cloudy w/ Showers', weatherIcon: 'cloud-rain'},
  {
    id: 14,
    weatherState: 'Partly Sunny w/ Showers',
    weatherIcon: 'cloud-sun-rain',
  },
  {id: 15, weatherState: 'T-Storms', weatherIcon: 'bolt'},
  {id: 16, weatherState: 'Mostly Cloudy w/ T-Storms', weatherIcon: 'poo-storm'},
  {id: 17, weatherState: 'Partly Sunny w/ T-Storms', weatherIcon: 'bolt'},
  {id: 18, weatherState: 'Rain', weatherIcon: 'cloud-showers-heavy'},
  {id: 19, weatherState: 'Flurries', weatherIcon: 'cloud-meatball'},
  {
    id: 20,
    weatherState: 'Mostly Cloudy w/ Flurries',
    weatherIcon: 'cloud-meatball',
  },
  {
    id: 21,
    weatherState: 'Partly Sunny w/ Flurries',
    weatherIcon: 'cloud-meatball',
  },
  {id: 22, weatherState: 'Snow', weatherIcon: 'snowflake'},
  {id: 23, weatherState: 'Mostly Cloudy w/ Snow', weatherIcon: 'snowflake'},
  {id: 24, weatherState: 'Ice', weatherIcon: 'temperature-low'},
  {id: 25, weatherState: 'Sleet', weatherIcon: 'snowflake'},
  {id: 26, weatherState: 'Freezing Rain', weatherIcon: 'temperature-low'},
  {id: 29, weatherState: 'Rain and Snow', weatherIcon: 'cloud-moon-rain'},
  {id: 30, weatherState: 'Hot', weatherIcon: 'temperature-high'},
  {id: 31, weatherState: 'Cold', weatherIcon: 'temperature-low'},
  {id: 32, weatherState: 'Windy', weatherIcon: 'wind'},
  {id: 33, weatherState: 'Clear', weatherIcon: 'sun'},
  {id: 34, weatherState: 'Mostly Clear', weatherIcon: 'sun'},
  {id: 35, weatherState: 'Partly Cloudy', weatherIcon: 'cloud-sun'},
  {id: 36, weatherState: 'Intermittent Clouds', weatherIcon: 'cloud-sun'},
  {id: 37, weatherState: 'Hazy Moonlight', weatherIcon: 'cloud-moon'},
  {id: 38, weatherState: 'Mostly Cloudy', weatherIcon: 'cloud'},
  {
    id: 39,
    weatherState: 'Partly Cloudy w/ Showers',
    weatherIcon: 'cloud-showers-heavy',
  },
  {
    id: 40,
    weatherState: 'Mostly Cloudy w/ Showers',
    weatherIcon: 'cloud-showers-heavy',
  },
  {id: 41, weatherState: 'Partly Cloudy w/ T-Storms', weatherIcon: 'bolt'},
  {id: 42, weatherState: 'Mostly Cloudy w/ T-Storms', weatherIcon: 'bolt'},
  {id: 43, weatherState: 'Mostly Cloudy w/ Flurries', weatherIcon: 'poo-storm'},
  {id: 44, weatherState: 'Mostly Cloudy w/ Snow', weatherIcon: 'snowflake'},
]

export function getIconClassByIconWeatherId(iconId) {
  const templates = iconsTemplate.filter(({id}) => {
    return id === iconId
  })

  if (templates.length === 0) {
    throw new Error('The icon class was not found for the queried icon ID')
  }

  return templates[0].weatherIcon
}
