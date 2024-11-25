import * as Effects from 'redux-saga/effects';
import {
  EXAMPLE_REQUEST,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAIL,
} from '../actions/example';
import * as api from '../../api';

const call: any = Effects.call;

function* exampleFunction(action: any) {
  try {
    const { data } = yield call(api.getExamplePrice, action.payload.data);
    console.log(action);
    yield Effects.put({
      type: EXAMPLE_SUCCESS,
      payload: { data },
    });
    console.log('saga', data);
    // if (action.payload.cb) {
    //     action.payload.cb(null, data);
    // }
  } catch (e: any) {
    // if (action.payload.cb) {
    //     action.payload.cb(e);
    // }
    yield Effects.put({
      type: EXAMPLE_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield Effects.takeLatest(EXAMPLE_REQUEST, exampleFunction);
}
