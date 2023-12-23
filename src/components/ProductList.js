import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import productsData from './products.json';
import { Row, Col } from 'react-bootstrap';
import '../Style/ProductList.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      setShowConfirmation(false);
    };
  }, []);

  return (
    <div>
     
      <Link to="/cart" className='linkcard'>
      <div className="carticons">
        <FaShoppingCart size={24} />
        <span className="count">{cart.length}</span>
      </div></Link> <h1 className='titile1'>Product List</h1>

      <div className={`confirmation-message ${showConfirmation ? 'show' : ''}`}>
        Item added to the cart!
      </div>


      <Row className="row">
        {productsData.map((product) => (
          <Col className="column" key={product.id}>
            <div className="card">
              <p className='productname'>{product.name}</p>
              <p className='price'>Rs.{product.price}</p>
              <p className='description'>{product.description}</p>
              <img
                className='productimage'
                src={product.image_url}
                alt={product.name}
                onError={(e) => console.error('Error loading image:', e.target.src)}
              />
              <br />
              <button
                className='buttonclick'
                onClick={() => handleAddToCart(product)}
                disabled={cart.some((item) => item.id === product.id)}
              >
                {cart.some((item) => item.id === product.id) ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;

