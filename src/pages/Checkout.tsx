import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { state, dispatch } = useCart();
  const [phone, setPhone] = useState('');

  const handlePayment = () => {
    if (!phone) {
      alert('Please enter your phone number.');
      return;
    }
    // Mock STK Push
    alert(`STK Push sent to ${phone}. Payment of ksh ${state.total.toFixed(2)} to Paybill 779981. (This is a mock - real integration requires backend setup with Daraja API keys.)`);
    // Clear cart after payment
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-tea-dark">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-tea-dark">Order Summary</h2>
        <ul>
          {state.items.map(item => (
            <li key={item.id} className="flex justify-between mb-2 text-tea-dark">
              <span>{item.name} (x{item.quantity})</span>
              <span>ksh {(parseFloat(item.price.replace('ksh ', '')) * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-tea-gold pt-4 mt-4">
          <p className="text-xl font-bold text-tea-dark">Total: ksh {state.total.toFixed(2)}</p>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-tea-dark">Phone Number</label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="border border-tea-DEFAULT rounded px-2 py-1 text-tea-dark"
        />
      </div>
      <Button onClick={handlePayment} className="w-full bg-tea-DEFAULT hover:bg-tea-dark text-white">
        Pay ksh {state.total.toFixed(2)}
      </Button>
      <div className="mt-6">
        <Link to="/cart" className="text-tea-DEFAULT hover:underline">Back to Cart</Link>
      </div>
    </div>
  );
};

export default Checkout;
