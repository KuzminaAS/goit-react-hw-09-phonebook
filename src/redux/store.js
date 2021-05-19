import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from '../redux/contacts/contacts-reducer';
import { authReducer } from '../redux/auth';

import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
  
import storage from 'redux-persist/lib/storage';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
  //alternative: serializableCheck: false
}),
  logger]

  const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    contacts: contactsReducer, 
    auth: persistReducer(authPersistConfig, authReducer),
  },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});



const persistor = persistStore(store);

const allStore = { store, persistor }
export default allStore;





