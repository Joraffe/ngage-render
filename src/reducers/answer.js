import { SETANSWERS } from '../actions/answer';

export default function answer(state = null, action) {
  switch (action.type) {
    case SETANSWERS:
      return state = action.answer;
    default:
      return state;
  }
}