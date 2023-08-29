import React from 'react';
import { useQuery } from 'react-query';
import { fetchWeather } from '../api';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { weatherBackgrounds } from '../constants/constant';
import { AppBar, Toolbar } from '@mui/material';
import ToggleButtonSet from './ToggleButtonSet';


type WeatherData = {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    name: string;
  };
  

  const Weather: React.FC = () => {
    const [units, setUnits] = React.useState<string>("metric");
    const { data: weatherData, isLoading, isError } = useQuery<WeatherData>('weather', () => fetchWeather('Heidenheim,de'));    

    if (isLoading) return <CircularProgress />;
    if (isError || !weatherData) return <Typography variant="body1">Error fetching weather data</Typography>;

    const currentBackground:any = weatherBackgrounds[weatherData.weather[0].main];
    // we can use either our mapper function with our custom icon or use the api icons, for now ill use the api icons
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    //const currentIcon = weatherIcons[weatherData.weather[0].icon];

  
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <ToggleButtonSet
            values={["metric", "imperial"]}
            selectedValue={units}
            handleChange={setUnits}
          />
        </Toolbar>
      </AppBar>
      <div style={{ background: currentBackground, height: "100vh", transition: "background 0.5s",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
       }}>
      <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <CardContent>
          <Typography variant="h5">Weather in {weatherData.name}</Typography>
          {/* {currentIcon} */}
          <img src={iconUrl} alt={weatherData.weather[0].description} />
          <Typography variant="h2">{weatherData.main.temp}°C</Typography>
          <Typography variant="body1">{weatherData.weather[0].description}</Typography>
          <Typography variant="body2">Humidity: {weatherData.main.humidity}%</Typography>
          <Typography variant="body2">Wind Speed: {weatherData.wind.speed} km/h</Typography>
        </CardContent>
      </Card>
      </div>
      </div>
    );
  }

export default Weather;
