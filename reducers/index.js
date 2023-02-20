import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
// import pageReducer from './pageReducer';
// import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  // nextPage: pageReducer,
  // imageStats: statsReducer,
});

export default rootReducer;
import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}
export default rootSaga;