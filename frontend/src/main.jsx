import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { Toaster } from 'react-hot-toast';
import App from './App';
import store from './Store/app';
import { Provider } from 'react-redux'; // ✅ Add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* ✅ Wrap App with Provider */}
      <App />
      <Toaster />
    </Provider>
  </StrictMode>
);
