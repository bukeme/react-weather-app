import './current-weather-props.styles.css';



const CurrentWeatherPropsComponent = () => {
	return (
		<div className='current-weather-props-component'>
			<div className='current-weather-props-component__item'>
				<h2>23&deg;</h2>
				<p>High</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>7mph</h2>
				<p>Wind</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>05:27</h2>
				<p>Sunrise</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>14&deg;</h2>
				<p>Low</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>0%</h2>
				<p>Rain</p>
			</div>
			<div className='current-weather-props-component__item'>
				<h2>20:57</h2>
				<p>Sunset</p>
			</div>
		</div>
	);
}

export default CurrentWeatherPropsComponent;