'use client';

import PaymentHistory from '@/components/payment/PaymentHistory';

export default function PaymentHistoryPage() {
  return (
    <div className="container max-w-4xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Payment History</h1>
      <PaymentHistory />
    </div>
  );
} 