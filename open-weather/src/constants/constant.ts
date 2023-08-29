type WeatherBackgroundsType = {
  [key: string]: string;
  Clear: string;
  Clouds: string;
  Rain: string;
  Snow: string;
  Drizzle: string;
  Thunderstorm: string;
  // ... any other specific conditions you want to define
};

export const weatherBackgrounds: WeatherBackgroundsType = {
  Clear: "linear-gradient(to bottom, #ff7e5f, #feb47b)",
  Clouds: "linear-gradient(to bottom, #2c3e50, #bdc3c7)",
  Rain: "linear-gradient(to bottom, #00c6ff, #0072ff)",
  Snow: "linear-gradient(to bottom, #e6dada, #274046)",
  Drizzle: "linear-gradient(to bottom, #89f7fe, #66a6ff)",
  Thunderstorm: "linear-gradient(to bottom, #1f1c2c, #928dab)",
  // Add more conditions as needed
};
