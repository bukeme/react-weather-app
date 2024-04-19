import {useContext} from 'react';
import {WeatherContext} from '../../contexts/weather/weather.context';
import iconMostlySunny from '../../assets/mostly-sunny.svg';
import './current-temperature.styles.css';


const CurrentTemperatureComponent = () => {
	const {weather: {currentWeather: {data}}} = useContext(WeatherContext);
	return (
		<div className='current-temperature-component'>
			<img src={`http://openweathermap.org/img/w/${data.icon}.png`} alt='Current Temperature Icon' className='current-temperature-component__icon' />
			<div className='current-temperature-component__temp'>
				<h1>{(data.temp-273).toFixed(1)}&#8451;</h1>
				<p>{data.description}</p>
			</div>
		</div>
	);
}

export default CurrentTemperatureComponent;