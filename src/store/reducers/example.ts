import {
  EXAMPLE_REQUEST,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAIL,
} from '../actions/example';
import { typeInitialState, actionType } from '../../types/example';

const initialState: typeInitialState = {
  requestStatus: '',
  exampleErrors: {},
  data: {},
};

export default function reducer(
  state: typeInitialState = initialState,
  action: actionType
): typeInitialState {
  switch (action.type) {
    case EXAMPLE_REQUEST: {
      return {
        data: state.data,
        requestStatus: 'request',
        exampleErrors: {},
      };
    }
    case EXAMPLE_SUCCESS: {
      return {
        requestStatus: 'ok',
        data: action?.payload?.data || state.data,
      };
    }
    case EXAMPLE_FAIL: {
      return {
        requestStatus: 'fail',
        exampleErrors: action.payload || {},
      };
    }
    default: {
      return state;
    }
  }
}
