import { all, fork } from 'redux-saga/effects';

import example from './example';

export default function* watchers() {
  yield all([example].map(fork));
}
