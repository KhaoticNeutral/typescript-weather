import React from "react";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export interface WeatherDetailProps {
  visability: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
  temp_min?: number;
  temp_max?:number;
}

export default function WeatherDetails(props: WeatherDetailProps) {
  const {
    visability = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hPa",
    sunrise = "6.20",
    sunset = "18:48",
    temp_min,
    temp_max
  } = props;

  return (
    <>
      <SingleWeatherDetail icon={<LuEye />} information="Visibility" value={visability} />
      <SingleWeatherDetail icon={<FiDroplet />} information="Humidity" value={humidity} />
      <SingleWeatherDetail icon={<MdAir />} information="Wind Speed" value={windSpeed} />
      <SingleWeatherDetail icon={<ImMeter />} information="Air Pressure" value={airPressure} />
      <SingleWeatherDetail icon={<LuSunrise />} information="Sunrise" value={sunrise} />
      <SingleWeatherDetail icon={<LuSunset />} information="Sunset" value={sunset} />
      {temp_min !== undefined && temp_max !== undefined && (
        <div className="flex justify-between">
          <SingleWeatherDetail information="Temp Min" value={`${temp_min}°`} />
          <SingleWeatherDetail information="Temp Max" value={`${temp_max}°`} />
        </div>
      )}
    </>
  );

}

export interface SingleWeatherDetailProps {
  information: string;
  icon?: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}