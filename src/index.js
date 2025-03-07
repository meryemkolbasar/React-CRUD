import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';  // Redux provider'ı ekliyoruz
import { store } from './store';  // Store'u import ediyoruz
import './styles/index.scss';  // Stil dosyanızı kullanıyoruz
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Redux provider'ı ekliyoruz */}
      <App />
    </Provider>
  </React.StrictMode>
);
