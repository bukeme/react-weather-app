import {useEffect, useContext} from 'react';
import HeaderComponent from './components/header/header.component';
import CurrentWeatherComponent from './components/current-weather/current-weather.component';
import TodaysWeatherComponent from './components/todays-weather/todays-weather.component';
import NextWeathersComponent from './components/next-weathers/next-weathers.component';
import {WeatherContext} from './contexts/weather/weather.context';
import './App.css';

function App() {
  const {fetchWeather} = useContext(WeatherContext)
  useEffect(() => {
    fetchWeather('London');
  }, [])

  return (
    <div className="App">
      <HeaderComponent />
      <CurrentWeatherComponent />
      <TodaysWeatherComponent />
      <NextWeathersComponent />
    </div>
  );
}

export default App;
