import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // localStorage kullanımı
import usersReducer from './features/users/userSlice';

// PersistConfig ayarlarını yap
const persistConfig = {
  key: 'root',  // root seviyesinde saklanacak
  storage,  // localStorage kullanımı
};

// usersReducer'ı persistReducer ile sarmalayın
const persistedReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    users: persistedReducer,  // users reducer'ı persistedReducer ile kullan
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);  // Persistor objesini oluştur

export default store;
