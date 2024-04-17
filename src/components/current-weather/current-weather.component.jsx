import CurrentTemperatureComponent from '../current-temperature/current-temperature.component';
import CurrentWeatherPropsComponent from '../current-weather-props/current-weather-props.component';
import './current-weather.styles.css';


const CurrentWeatherComponent = () => {
	return (
		<div className='current-weather-component'>
			<CurrentTemperatureComponent />
			<div className='current-weather-component__divider' />
			<CurrentWeatherPropsComponent />
		</div>
	);
}

export default CurrentWeatherComponent;