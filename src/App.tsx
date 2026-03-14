import React, { useState } from "react";
import { getWeather } from "./services/weather";

function App() {

  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {

    if (!city) return;

    try {
      setLoading(true);
      const data = await getWeather(city);
      setWeather(data);
    } catch {
      alert("City not found");
    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-500 via-blue-500 to-indigo-400 relative overflow-hidden">

      {/* CLOUDS */}

      <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" className="cloud cloud1" />
      <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" className="cloud cloud2" />
      <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" className="cloud cloud3" />
      <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" className="cloud cloud4" />
      <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" className="cloud cloud5" />
      <img src="https://cdn-icons-png.flaticon.com/512/414/414825.png" className="cloud cloud6" />

      {/* WEATHER CARD */}

      <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-8 w-96 text-center text-white relative z-10 transition duration-300 hover:scale-105">

        <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
          🌤 Weather App
        </h1>

        {/* SEARCH */}

        <div className="flex mb-6 rounded-full overflow-hidden shadow-lg">

          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-700 outline-none"
          />

          <button
            onClick={fetchWeather}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 font-semibold hover:opacity-90 transition"
          >
            Search
          </button>

        </div>

        {loading && (
          <p className="animate-pulse">Loading weather...</p>
        )}

        {weather && (

          <div className="mt-6">

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              className="mx-auto w-28"
            />

            <h2 className="text-3xl font-bold text-yellow-200 mt-2">
              {weather.name}
            </h2>

            <p className="text-6xl font-bold mt-2">
              {Math.round(weather.main.temp)}°C
            </p>

            <p className="capitalize text-blue-100 text-lg mb-6">
              {weather.weather[0].description}
            </p>

            {/* WEATHER INFO */}

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-blue-500/80 p-4 rounded-xl shadow-lg">
                <p className="text-sm">Humidity</p>
                <p className="text-xl font-bold">
                  {weather.main.humidity}%
                </p>
              </div>

              <div className="bg-purple-500/80 p-4 rounded-xl shadow-lg">
                <p className="text-sm">Wind</p>
                <p className="text-xl font-bold">
                  {weather.wind.speed} m/s
                </p>
              </div>

              <div className="bg-green-500/80 p-4 rounded-xl shadow-lg">
                <p className="text-sm">Feels Like</p>
                <p className="text-xl font-bold">
                  {Math.round(weather.main.feels_like)}°C
                </p>
              </div>

              <div className="bg-orange-500/80 p-4 rounded-xl shadow-lg">
                <p className="text-sm">Pressure</p>
                <p className="text-xl font-bold">
                  {weather.main.pressure} hPa
                </p>
              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );

}

export default App;