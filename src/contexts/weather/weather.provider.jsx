import {useReducer} from 'react';
import {WeatherContext} from './weather.context';

const INITIAL_STATE = {
	isLoading: true
	currentWeather: null,
	todaysWeather: null,
	nextWeathers: null
}

const reducer = async (state, action) => {
	switch(action.type) {
		case 'FETCH_WEATHER':
			const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=1989167cbafaa354ae9797c90db768f9`)
			const {weather, main, wind, clouds} = await currentWeather.json()
			return {
				...state,
				currentWeather: {
					description: weather.description,
					icon: weather.icon,
					temp: main.temp,
					temp_min: main.temp_min,
					temp_max: main.temp_max,
					pressure: main.pressure,
					humidity: main.humidity,
					wind_speed: wind.speed,
					clouds: clouds.all
				}
			}
		default:
			return state
	}
}

const WeatherProvider = ({children}) => {
	const [weather, dispatch] = useReducer(reducer, INITIAL_STATE);
	return (
		<WeatherContext.Provider value={{weather, dispatch}}>
			{children}
		</WeatherContext.Provider>
	)
}