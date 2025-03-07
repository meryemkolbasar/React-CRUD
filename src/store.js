import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import usersReducer from './features/users/userSlice';


const persistConfig = {
  key: 'root',  
  storage,  
};


const persistedReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    users: persistedReducer,  
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);  

export default store;
