'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CardPaymentForm from '@/components/payment/CardPaymentForm';
import UPIPaymentForm from '@/components/payment/UPIPaymentForm';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PaymentPage = () => {
  return (
    <div className="container max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Make a Payment</h1>
      
      <Tabs defaultValue="card" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="card">Card Payment</TabsTrigger>
          <TabsTrigger value="upi">UPI Payment</TabsTrigger>
        </TabsList>
        <Elements stripe={stripePromise}>
          <TabsContent value="card" className="mt-6">
            <div className="p-4 border rounded-lg">
              <CardPaymentForm />
            </div>
          </TabsContent>
        </Elements>
        <TabsContent value="upi" className="mt-6">
          <div className="p-4 border rounded-lg">
            <UPIPaymentForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentPage; 