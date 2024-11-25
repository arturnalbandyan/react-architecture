import { combineReducers } from 'redux';
import example from './example';

const RootReducer = combineReducers({
  example,
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;
