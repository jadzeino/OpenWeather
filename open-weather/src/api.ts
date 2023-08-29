import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY; //|| "880bc51165b47eab0cadc1af50ebf3da";
console.log("API_KEY ", API_KEY);

export const fetchWeather = async (
  city: string = "Heidenheim,de",
  units: string = "metric"
) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: city,
        appid: API_KEY,
        units: units,
      },
    }
  );
  return response.data;
};
