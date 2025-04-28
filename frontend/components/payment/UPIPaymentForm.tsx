'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { paymentService } from '@/services/payment.service';

const UPIPaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { paymentUrl } = await paymentService.createUPIPayment(Number(amount) * 100);
      window.location.href = paymentUrl;
    } catch (err: any) {
      setError(err.message || 'Failed to create UPI payment');
      toast.error('Failed to create UPI payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="amount">Amount (INR)</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          min="1"
          step="0.01"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Processing...' : 'Pay with UPI'}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        You will be redirected to a secure payment page
      </p>
    </form>
  );
};

export default UPIPaymentForm; 