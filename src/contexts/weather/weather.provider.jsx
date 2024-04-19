import {useReducer} from 'react';
import {WeatherContext} from './weather.context';

const INITIAL_STATE = {
	currentWeather: {
		isLoading: true,
		data: null
	},
	todaysWeather: {
		isLoading: true,
		data: null
	},
	nextWeathers: {
		isLoading: true,
		data: null
	}
}

const reducer = (state, action) => {
	switch(action.type) {
		case 'FETCH_CURRENT_WEATHER':
			return {
				...state,
				currentWeather: {
					isLoading: false,
					data: action.payload
				}
			}
		case 'FETCH_TODAYS_WEATHER':
			return {
				...state,
				todaysWeather: {
					isLoading: false,
					data: action.payload
				}
			}
		default:
			return state
	}
}

const WeatherProvider = ({children}) => {
	const [weather, dispatch] = useReducer(reducer, INITIAL_STATE);
	const fetchCurrentWeatherData = async (city) => {
		await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1989167cbafaa354ae9797c90db768f9`)
			.then(response => response.json())
			.then(response => {
				const {weather, main, wind, clouds, name} = response;
				const currentWeatherData = {
					description: weather[0].description,
					icon: weather[0].icon,
					temp: main.temp,
					temp_min: main.temp_min,
					temp_max: main.temp_max,
					pressure: main.pressure,
					humidity: main.humidity,
					wind_speed: wind.speed,
					clouds: clouds.all,
					name
				};
				dispatch({type: 'FETCH_CURRENT_WEATHER', payload: currentWeatherData});
			});
	}

	// const fetchTodaysWeather = async (city) => {
	// 	try {
	// 		await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=1989167cbafaa354ae9797c90db768f9`)
	// 			.then(response => response.json())
	// 			.then(response => {
	// 				const {list} = response;
	// 				console.log(list)
	// 				let todaysWeatherData = [];
	// 				for (let i=0; i<8; i++) {
	// 					todaysWeatherData.push({
	// 						dt: list[i].dt,
	// 						temp: list[i].main.dt,
	// 						icon: list[i].weather[i].icon
	// 					});
	// 				}
	// 				dispatch({type: 'FETCH_TODAYS_WEATHER', payload: todaysWeatherData})
	// 				console.log(todaysWeatherData);
	// 			});
	// 	} catch(error) {
	// 		console.log(error)
	// 	}
	// }

	const fetchWeather = (city) => {
		fetchCurrentWeatherData(city);
		// fetchTodaysWeather(city);
	};

	return (
		<WeatherContext.Provider value={{weather, fetchWeather}}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherProvider;