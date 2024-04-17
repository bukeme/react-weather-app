import iconMostlySunny from '../../assets/mostly-sunny.svg';
import './current-temperature.styles.css';


const CurrentTemperatureComponent = () => {
	return (
		<div className='current-temperature-component'>
			<img src={iconMostlySunny} alt='Mostly Sunny Icon' className='current-temperature-component__icon' />
			<div className='current-temperature-component__temp'>
				<h1>21&deg;</h1>
				<p>Mostly Sunny</p>
			</div>
		</div>
	);
}

export default CurrentTemperatureComponent;