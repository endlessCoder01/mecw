import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import {
  Loader2,
  Droplets,
  Wind,
  Thermometer,
  CalendarDays,
  Gauge,
  Sun,
  CloudRain,
  Sunrise,
  Sunset,
  Cloud,
  CloudLightning,
  Snowflake,
  ArrowLeft,
} from 'lucide-react';

const WeatherHistory = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const today = new Date();
      const lastWeek = new Date();
      lastWeek.setDate(today.getDate() - 6);

      const formatDate = (date) => date.toISOString().split('T')[0];

      const response = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=-17.8252&longitude=31.0335&start_date=${formatDate(lastWeek)}&end_date=${formatDate(today)}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,temperature_2m_mean,sunrise,sunset,weathercode&timezone=Africa%2FHarare`
      );

      const data = await response.json();
      const formattedData = data.daily.time.map((date, index) => ({
        date,
        tempMax: data.daily.temperature_2m_max[index],
        tempMin: data.daily.temperature_2m_min[index],
        tempMean: data.daily.temperature_2m_mean[index],
        precipitation: data.daily.precipitation_sum[index],
        windSpeed: data.daily.windspeed_10m_max[index],
        sunrise: data.daily.sunrise[index],
        sunset: data.daily.sunset[index],
        weatherCode: data.daily.weathercode[index],
      }));
      setWeatherData(formattedData);
      setLoading(false);
    };

    fetchWeatherData();
  }, []);

  const weatherDescriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    95: 'Thunderstorm',
    99: 'Severe thunderstorm'
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      
      {/* Back arrow button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-green-700 dark:text-green-300 mb-6 hover:text-green-500 transition-colors"
        aria-label="Go Back"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back
      </button>

      <h1 className="text-4xl font-bold mb-10 text-center text-green-800 dark:text-green-300 animate-bounce">
        🌍 Harare Weather Overview (Past Week)
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin w-10 h-10 text-green-600" />
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {weatherData.map((day, index) => (
            <Card
              key={index}
              className="shadow-2xl hover:shadow-green-400 transition-all duration-300 bg-white dark:bg-gray-800 border border-green-300 dark:border-green-600 rounded-2xl"
            >
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold flex items-center text-green-700 dark:text-green-300">
                  <CalendarDays className="w-5 h-5 mr-2" />
                  {new Date(day.date).toDateString()}
                </h2>

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Thermometer className="w-5 h-5 mr-2 text-red-500" />
                  <span><strong>Max:</strong> {day.tempMax}°C | <strong>Min:</strong> {day.tempMin}°C</span>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Gauge className="w-5 h-5 mr-2 text-yellow-500" />
                  <span><strong>Mean Temp:</strong> {day.tempMean}°C</span>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Droplets className="w-5 h-5 mr-2 text-blue-500" />
                  <span><strong>Rainfall:</strong> {day.precipitation} mm</span>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Wind className="w-5 h-5 mr-2 text-cyan-600" />
                  <span><strong>Wind Speed:</strong> {day.windSpeed} km/h</span>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  {day.weatherCode >= 95 ? (
                    <CloudLightning className="w-5 h-5 mr-2 text-yellow-700" />
                  ) : day.weatherCode >= 71 ? (
                    <Snowflake className="w-5 h-5 mr-2 text-blue-300" />
                  ) : day.weatherCode >= 61 ? (
                    <CloudRain className="w-5 h-5 mr-2 text-blue-600" />
                  ) : day.weatherCode >= 45 ? (
                    <Cloud className="w-5 h-5 mr-2 text-gray-500" />
                  ) : (
                    <Sun className="w-5 h-5 mr-2 text-yellow-400" />
                  )}
                  <span><strong>Conditions:</strong> {weatherDescriptions[day.weatherCode] || 'Unknown'}</span>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Sunrise className="w-5 h-5 mr-2 text-orange-400" />
                  <span><strong>Sunrise:</strong> {new Date(day.sunrise).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Sunset className="w-5 h-5 mr-2 text-pink-500" />
                  <span><strong>Sunset:</strong> {new Date(day.sunset).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherHistory;
