import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import YoutubeReducer from './reducer_youtube';
import BlogReducer from './reducer_blog';


const rootReducer = combineReducers({
  weather: WeatherReducer,
  youtube: YoutubeReducer,
  posts: BlogReducer
});

export default rootReducer;
