import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      const data = await response.json()
      setWeather({
        temperature: `${data.main.temp}°C`,
        condition: data.weather[0].description,
        humidity: `${data.main.humidity}%`,
        windSpeed: `${data.wind.speed} km/h`
      })
      setError('')
    } catch (error) {
      setError('Failed to fetch weather data. Please try again.')
      setWeather(null)
    }
  }

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeatherData(city)
    } else {
      setError('Please enter a city name.')
      setWeather(null)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Weather App</h1>
      </header>
      <div className="my-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="border p-2 mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="border p-4">
          <h2 className="text-xl">Weather Information</h2>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind Speed: {weather.windSpeed}</p>
        </div>
      )}
    </div>
  )
}

export default App
