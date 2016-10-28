import { FETCH_VIDEOS } from "../actions/youtube_actions";

const INITIAL_STATE = { videos: [], videoSelected: null};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_VIDEOS:
      return {videos: action.payload, videoSelected: action.payload[0]};
    }
    return state;
  }
}
