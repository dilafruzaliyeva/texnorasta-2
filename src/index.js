import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import './assets/styles/bootstrap.custom.css';
import { Route, 
createBrowserRouter, 
createRoutesFromElements, 
RouterProvider 
} from 'react-router-dom';
import {Provider} from 'react-redux'
import HomeScreens from './screens/HomeScreens';
import ProductScreens from './screens/ProductScreens';
import store from "./store"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}>
      <Route 
      path='/'
      index={true}
      element={<HomeScreens></HomeScreens>}>
     </Route>
     <Route 
      path='/product/:id'
      element={<ProductScreens></ProductScreens>}>
     </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


