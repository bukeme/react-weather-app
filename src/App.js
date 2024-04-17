import HeaderComponent from './components/header/header.component';
import CurrentWeatherComponent from './components/current-weather/current-weather.component';
import TodaysWeatherComponent from './components/todays-weather/todays-weather.component';
import NextWeathersComponent from './components/next-weathers/next-weathers.component';
import './App.css';

function App() {
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
