import axios from 'axios';
import YTSearch from 'youtube-api-search';

export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const DISPLAY_VIDEO = "DISPLAY_VIDEO";


export function fetchVideos(videos) {
  return {
    type: FETCH_VIDEOS,
    payload: videos
  };
}

export function displayVideo(video) {
  return {
    type: DISPLAY_VIDEO,
    payload: video
  };
}
