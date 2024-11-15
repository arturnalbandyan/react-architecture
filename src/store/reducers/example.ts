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
  categories: null,
};

export default function reducer(state = initialState, action: actionType) {
  switch (action.type) {
    case EXAMPLE_REQUEST: {
      return {
        data: state.data,
        requestStatus: 'request',
        exampleErrors: {},
      };
    }
    case EXAMPLE_SUCCESS: {
      console.log(action);
      return {
        requestStatus: 'ok',
        data: action?.payload?.data,
      };
    }
    case EXAMPLE_FAIL: {
      return {
        requestStatus: 'fail',
        exampleErrors: action,
      };
    }

    default: {
      return state;
    }
  }
}
