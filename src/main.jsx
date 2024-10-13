import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { Provider } from 'react-redux';
import store from './Store/store.js';
createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto">
    <Provider store={store}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </Provider>
  </div>
);
