import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducers from './rootReducer';

const middleware = [thunk];
const initialState = {};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  version: 0,
  // blacklist: ['testReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const state = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(state);
export default state;
