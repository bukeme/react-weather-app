import {useContext} from 'react';
import {WeatherContext} from '../../contexts/weather/weather.context';
import CurrentTemperatureComponent from '../current-temperature/current-temperature.component';
import CurrentWeatherPropsComponent from '../current-weather-props/current-weather-props.component';
import './current-weather.styles.css';


const CurrentWeatherComponent = () => {
	const {weather: {currentWeather: {isLoading}}} = useContext(WeatherContext);
	return (
		<>
			{
				isLoading ?
				null :
				<div className='current-weather-component'>
					<CurrentTemperatureComponent />
					<div className='current-weather-component__divider' />
					<CurrentWeatherPropsComponent />
				</div>
			}
		</>
	);
}

export default CurrentWeatherComponent;