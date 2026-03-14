import React from "react";

interface WeatherCardProps {
  city: string;
  temp: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  temp,
  description,
  icon
}) => {

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="mt-10 w-full max-w-sm backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 text-center text-white transition hover:scale-105">

      <h2 className="text-3xl font-bold mb-2">
        {city}
      </h2>

      <img
        src={iconUrl}
        alt={description}
        className="mx-auto w-24 h-24"
      />

      <p className="text-6xl font-semibold my-3">
        {temp}°C
      </p>

      <p className="capitalize text-lg opacity-90">
        {description}
      </p>

    </div>
  );
};

export default WeatherCard;