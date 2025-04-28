import { useState, FormEvent } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '@/services/apiServices';
import { useRouter } from 'next/router';
import '@/styles/PaymentForm.css';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter(); 

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
  const [amount, setAmount] = useState<number>(5000); // ₹50
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    try {
      const { clientSecret } = await createPaymentIntent({ amount, paymentMethodType: paymentMethod });

      if (paymentMethod === 'card') {
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        });

        if (result.error) {
          setMessage(`Payment failed: ${result.error.message}`);
        } else if (result.paymentIntent?.status === 'succeeded') {
          setMessage('Payment Successful! 🎉');
          router.push('/payment-success'); 
        }
      } else {
        setMessage('UPI payment flow not connected yet.');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setMessage('Something went wrong. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label className="payment-form-label">
        Payment Method:
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'upi')}
          className="payment-form-select"
        >
          <option value="card">Card</option>
          <option value="upi">UPI</option>
        </select>
      </label>

      <label className="payment-form-label">
        Amount (₹):
        <input
          type="number"
          value={amount / 100}
          onChange={(e) => setAmount(Number(e.target.value) * 100)}
          className="payment-form-input"
        />
      </label>

      {paymentMethod === 'card' && (
        <div className="payment-form-card-element">
          <CardElement />
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe}
        className="payment-form-button"
      >
        Pay Now
      </button>

      {message && <div className="payment-form-message">{message}</div>}
    </form>
  );
};

export default PaymentForm;
