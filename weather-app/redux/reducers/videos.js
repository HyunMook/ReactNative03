import { NEXT_VIDEO, PREV_VIDEO } from '../actionTypes';

const initialState = {
  from: '',
  to: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEXT_VIDEO: {
      return { from: action.payload.from, to: action.payload.to };
    }
    case PREV_VIDEO: {
      return { from: action.payload.from, to: action.payload.to };
    }
    default:
      return state;
  }
}
