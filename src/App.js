// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
