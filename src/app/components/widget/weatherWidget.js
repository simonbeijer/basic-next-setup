"use client";
import { useEffect, useState } from "react";
import WidgetWrapper from "./widgetWrapper";
import Spinner from "../spinner";
import Image from "next/image";
export default function WeatherWidget() {

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true)
  const API_KEY_WEATHER = process.env.NEXT_PUBLIC_API_KEY_WEATHER;

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=57.7089,11.9746&aqi=no`
        );
        let data = await response.json();
        console.log('☁️ Weather data loaded for:', data.location.name);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('❌ Weather API error:', error.message);
        setLoading(false);
      }
    };
    getWeatherData();
  }, [API_KEY_WEATHER]);

  return (
    <WidgetWrapper>
      {loading || !weatherData ?  <Spinner /> : (
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Weather</h3>
          <div className="flex items-center justify-center mb-4">
            <Image
              src={`https:${weatherData.current.condition.icon}`}
              alt="weather icon"
              width={64}
              height={64}
              priority
            />
          </div>
          <p className="text-2xl font-bold text-primary mb-2">{weatherData.current.temp_c}°C</p>
          <p className="text-gray-600 dark:text-gray-300 mb-1">{weatherData.current.condition.text}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{weatherData.location.name}</p>
        </div>
      )}
    </WidgetWrapper>
  );
}
