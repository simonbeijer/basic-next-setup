"use client";
import { useEffect, useState } from "react";
import WidgetWrapper from "./widgetWrapper";
export default function WeatherWidget() {
  // const [weatherData, setWeatherData] = useState(null);
  const API_KEY_WEATHER = process.env.NEXT_PUBLIC_API_KEY_WEATHER;

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=57.7089,11.9746&aqi=no`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <WidgetWrapper>
      <p>weather</p>
    </WidgetWrapper>
  );
}
