import {AnyAction, combineReducers} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {...state, ...action.payload};
  }
  return combineReducers({
    // reducers
  })(state, action);
};

export default rootReducer;
