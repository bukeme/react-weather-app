import iconMostlySunny from '../../assets/mostly-sunny.svg';
import iconSunny from '../../assets/sunny.svg';
import './todays-weather.styles.css';


const TodaysWeatherComponent = () => {
	return (
		<div className='todays-weather-component'>
			<h2 className='todays-weather-component__title'>Today's Weather</h2>
			<div className='todays-weather-component__container'>
				<div className='todays-weather-component__item'>
					<p>3am</p>
					<img src={iconMostlySunny} alt='Todays Weather Icon' />
					<p>14&deg;</p>
				</div>
				<div className='todays-weather-component__item'>
					<p>6am</p>
					<img src={iconMostlySunny} alt='Todays Weather Icon' />
					<p>16&deg;</p>
				</div>
				<div className='todays-weather-component__item'>
					<p>9am</p>
					<img src={iconMostlySunny} alt='Todays Weather Icon' />
					<p>17&deg;</p>
				</div>
				<div className='todays-weather-component__item'>
					<p>12am</p>
					<img src={iconMostlySunny} alt='Todays Weather Icon' />
					<p>19&deg;</p>
				</div>
				<div className='todays-weather-component__item'>
					<p>3pm</p>
					<img src={iconSunny} alt='Todays Weather Icon' />
					<p>21&deg;</p>
				</div>
				<div className='todays-weather-component__item'>
					<p>6pm</p>
					<img src={iconMostlySunny} alt='Todays Weather Icon' />
					<p>20&deg;</p>
				</div>
				<div className='todays-weather-component__item'>
					<p>9pm</p>
					<img src={iconMostlySunny} alt='Todays Weather Icon' />
					<p>18&deg;</p>
				</div>
			</div>
		</div>
	);
}

export default TodaysWeatherComponent;