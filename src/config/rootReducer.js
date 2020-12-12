import { combineReducers } from 'redux';
let initialState = { user: 'piyush', loading: true, other: 'hall' };
const testReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'toggle':
      state = { ...state, loading: false };
    default:
      break;
  }
  return state;
};

export default combineReducers({ testReducer });
