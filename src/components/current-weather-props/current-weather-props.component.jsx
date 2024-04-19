import {useContext} from 'react';
import {WeatherContext} from '../../contexts/weather/weather.context';
import './current-weather-props.styles.css';



const CurrentWeatherPropsComponent = () => {
	const {weather: {currentWeather: {data}}} = useContext(WeatherContext);
	return (
		<div className='current-weather-props-component'>
			<div className='current-weather-props-component__item'>
				<h2>{(data.temp_max-273).toFixed(1)}&#8451;</h2>
				<p>High</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>{data.wind_speed}mph</h2>
				<p>Wind</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>{data.pressure}hPa</h2>
				<p>Pressure</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>{(data.temp_min-273).toFixed(1)}&#8451;</h2>
				<p>Low</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>{data.humidity}%</h2>
				<p>Humidity</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>{data.clouds}%</h2>
				<p>Clouds</p>
			</div>
		</div>
	);
}

export default CurrentWeatherPropsComponent;