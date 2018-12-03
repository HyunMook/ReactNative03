import { REFRESH_WEATHER, CHANGE_LOCATION } from '../actionTypes';

const initialState = {
  lat: 0,
  long: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCATION: {
      const { lat, long } = action.payload;
      return {
        lat,
        long,
      };
    }
    case REFRESH_WEATHER: {
      return state;
    }
    default:
      return state;
  }
}
