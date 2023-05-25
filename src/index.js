import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import reportWebVitals from './reportWebVitals';
import Cart from './components/cart';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import RootLayout from './components/RootLayout/rootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element= {<ItemListContainer/>}/>
      <Route path="category/:categoryId" element= {<ItemListContainer />}/>
      <Route path="item/:productId" element= {<ItemDetailContainer />}/>
      <Route path="cart" element= {<Cart/>}/>

      </Route>

  
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
