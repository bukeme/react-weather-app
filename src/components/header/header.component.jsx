import {useContext} from 'react';
import {WeatherContext} from '../../contexts/weather/weather.context';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import './header.styles.css';


const HeaderComponent = () => {
	const {weather: {currentWeather}} = useContext(WeatherContext);
	return (
		<>
		{
			currentWeather.isLoading ?
			null :
			<div className='header-component'>
				<div className='city-container'>
					<h1>{currentWeather.data.name}</h1>
					<p>Monday 29 August</p>
				</div>
				<form>
					<input className='search-input' type='text' placeholder={currentWeather.data.name} />
					<FontAwesomeIcon className='search-icon' icon={faLocationDot} />
				</form>
			</div>
		}
		</>
	);
}

export default HeaderComponent;