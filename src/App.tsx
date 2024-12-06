import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const handleSearch = () => {
    // Fetch weather data from API
    // This is a placeholder, replace with actual API call
    setWeather({
      temperature: '25°C',
      condition: 'Sunny',
      humidity: '60%',
      windSpeed: '10 km/h'
    })
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
