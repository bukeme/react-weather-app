import iconMostlySunny from '../../assets/mostly-sunny.svg';
import iconSunny from '../../assets/sunny.svg';
import './next-weathers.styles.css';


const NextWeathersComponent = () => {
	return (
		<div className='next-weathers-component'>
			<h2 className='next-weathers-component__title'>Next 5 days</h2>
			<div className='next-weathers-component__container'>
				<div className='next-weathers-component__container--weather'>
					<div className='next-weathers-component__container--weather__item'>
						<h2>Tue</h2>
						<p>30/7</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<img src={iconSunny} alt='Next Weathers Icon' />
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>10&deg;</h2>
						<p>Low</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>21&deg;</h2>
						<p>High</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>0%</h2>
						<p>Rain</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>12mph</h2>
						<p>Wind</p>
					</div>
				</div>
				<div className='next-weathers-component__container--weather'>
					<div className='next-weathers-component__container--weather__item'>
						<h2>Wed</h2>
						<p>31/7</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<img src={iconMostlySunny} alt='Next Weathers Icon' />
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>9&deg;</h2>
						<p>Low</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>18&deg;</h2>
						<p>High</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>3%</h2>
						<p>Rain</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>7mph</h2>
						<p>Wind</p>
					</div>
				</div>
				<div className='next-weathers-component__container--weather'>
					<div className='next-weathers-component__container--weather__item'>
						<h2>Thur</h2>
						<p>1/8</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<img src={iconMostlySunny} alt='Next Weathers Icon' />
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>7&deg;</h2>
						<p>Low</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>15&deg;</h2>
						<p>High</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>75%</h2>
						<p>Rain</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>11mph</h2>
						<p>Wind</p>
					</div>
				</div>
				<div className='next-weathers-component__container--weather'>
					<div className='next-weathers-component__container--weather__item'>
						<h2>Fri</h2>
						<p>2/8</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<img src={iconSunny} alt='Next Weathers Icon' />
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>12&deg;</h2>
						<p>Low</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>24&deg;</h2>
						<p>High</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>2%</h2>
						<p>Rain</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>8mph</h2>
						<p>Wind</p>
					</div>
				</div>
				<div className='next-weathers-component__container--weather'>
					<div className='next-weathers-component__container--weather__item'>
						<h2>Sat</h2>
						<p>3/8</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<img src={iconMostlySunny} alt='Next Weathers Icon' />
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>10&deg;</h2>
						<p>Low</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>21&deg;</h2>
						<p>High</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>0%</h2>
						<p>Rain</p>
					</div>
					<div className='next-weathers-component__container--weather__item'>
						<h2>12mph</h2>
						<p>Wind</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NextWeathersComponent;