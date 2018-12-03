import { CHANGE_LOCATION, NEXT_VIDEO, PREV_VIDEO } from './actionTypes';

export const changeLocation = (data) => ({
  type: CHANGE_LOCATION,
  payload: {
    lat: data[0],
    long: data[1],
  },
});

export const nextVideo = (data) => ({
  type: NEXT_VIDEO,
  payload: {
    from: '',
    to: '',
  },
});
export const prevVideo = (data) => ({
  type: PREV_VIDEO,
  payload: {
    from: '',
    to: '',
  },
});
