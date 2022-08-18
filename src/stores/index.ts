import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import blacklist from './configs/blacklist';
import whitelist from './configs/whitelist';
import counterReducer from './counter';
import rootSaga from './saga/rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist,
  blacklist,
};

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

// list models
const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(sagaMiddleware)
      .concat(logger),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
