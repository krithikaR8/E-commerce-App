import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import { Row, Col } from 'react-bootstrap';
import "../Style/Cart.css";
import { Link } from 'react-router-dom';
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='outer'>
      <Link to="/"  className="back">
      <button className='but1'>BACK</button></Link>
      <h1 className='title'>Cart List Items</h1>
      <br />
      {cart.length === 0 ? (
        <h1 className="nofound">No items in the cart</h1>
      ) : (
        <div>
          {cart.map((item) => (
            <Row key={item.id}>
              <Col><p className='name'>{item.name}</p></Col>
              <Col><p className='cost'>{item.price}</p></Col>
              <Col><button className='but' onClick={() => handleRemoveFromCart(item.id)}>Remove</button></Col>
            </Row>
          ))}
        </div>)}
      <p className='total'>Total Price: Rs. {calculateTotalPrice()}</p>

    </div>
  );
};

export default Cart;

