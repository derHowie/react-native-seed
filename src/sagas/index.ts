import { all } from 'redux-saga/effects';
// modules
import userSaga from './user';

export default function* rootSaga() {
  yield all([...userSaga]);
}
