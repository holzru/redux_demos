import { FETCH_VIDEOS, DISPLAY_VIDEO } from "../actions/youtube_actions";


const INITIAL_STATE = { videos: [], videoSelected: null};

export default function (state = INITIAL_STATE, action) {

  switch(action.type) {
    case FETCH_VIDEOS:
      return {videos: action.payload, videoSelected: action.payload[0]};
    case DISPLAY_VIDEO:
      return {...state, videoSelected: action.payload};
    }
  return state;
}
