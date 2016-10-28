import axios from 'axios';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD0XiN2OdvqCjtchY5o76lzFulbOWnScM8';
export const FETCH_VIDEOS = "FETCH_VIDEOS";


export function fetchVideos(term) {
  YTSearch({key: API_KEY, term:term}, (videos) => {
    return {
            type: FETCH_VIDEOS,
            payload: videos
          };
  });
}
// videoSearch(term) {
//   YTSearch({key: API_KEY, term:term}, (videos) => {
//     this.setState({videos: videos, selectedVideo: videos[0]});
//   });
// }
