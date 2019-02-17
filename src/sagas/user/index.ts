import { put, takeEvery } from 'redux-saga/effects';

const delay = async (ms: number) => new Promise((res: () => void) => setTimeout(res, ms));

export function* getUserData(data: any) {
  yield delay(2000);
  yield put({
  type: 'SET_USER_DATA',
  data,
});
}

const watchGetUserData = takeEvery('GET_USER_DATA', getUserData);

export default [
  watchGetUserData,
];
