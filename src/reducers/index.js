import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import YoutubeReducer from './reducer_youtube';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  youtube: YoutubeReducer
});

export default rootReducer;
