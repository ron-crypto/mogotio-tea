import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const [phone, setPhone] = useState('');
  const [paymentPrompt, setPaymentPrompt] = useState(false);

  const handleRemove = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const handlePayment = async () => {
    // Validate Kenyan phone number format: starts with 07 or +2547 and 10 digits total
    const phoneRegex = /^(?:\+254|0)?7\d{8}$/;
    if (!phone) {
      alert('Please enter your phone number.');
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid Kenyan phone number starting with 07 or +2547.');
      return;
    }
    try {
      const response = await fetch('http://localhost:4000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: phone,
          amount: state.total
        })
      });
      const data = await response.json();
      if (response.ok) {
        alert('STK Push initiated successfully. Please complete the payment on your phone.');
        dispatch({ type: 'CLEAR_CART' });
        setPaymentPrompt(false);
        setPhone('');
      } else {
        alert('Payment initiation failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Error initiating payment: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-tea-dark">Your Cart</h1>
      {state.items.length === 0 ? (
        <p className="text-tea-dark">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {state.items.map(item => (
              <li key={item.id} className="flex items-center mb-4 border-b border-tea-gold pb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-tea-dark">{item.name}</h2>
                  <p className="text-tea-DEFAULT font-semibold">{item.price}</p>
                  <div className="mt-2">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2 text-tea-dark font-medium">Quantity:</label>
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 border border-tea-DEFAULT rounded px-2 py-1 text-tea-dark"
                    />
                  </div>
                </div>
                <Button variant="outline" onClick={() => handleRemove(item.id)} className="border-tea-DEFAULT text-tea-DEFAULT hover:bg-tea-DEFAULT hover:text-white">
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xl font-bold text-tea-dark">Total: ksh {state.total.toFixed(2)}</p>
            <Button onClick={() => setPaymentPrompt(true)} className="bg-green-600 hover:bg-green-700 text-white">
              Pay Now
            </Button>
          </div>
          {paymentPrompt && (
            <div className="mt-4 flex flex-col md:flex-row items-center gap-2">
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="border border-tea-DEFAULT rounded px-2 py-1 text-tea-dark"
              />
              <Button onClick={handlePayment} className="bg-green-600 hover:bg-green-700 text-white">
                Confirm Payment
              </Button>
              <Button onClick={() => setPaymentPrompt(false)} variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Cancel
              </Button>
            </div>
          )}
        </>
      )}
      <div className="mt-6">
        <Link to="/" className="text-tea-DEFAULT hover:underline">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
