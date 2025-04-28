'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { testAPI } from '@/utils/api-test';

export default function APITestPage() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    setResult('Testing API...');
    
    try {
      const success = await testAPI();
      setResult(success ? 'API test successful!' : 'API test failed!');
    } catch (error) {
      setResult(`API test failed: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">API Test</h1>
      
      <div className="p-4 border rounded-lg">
        <Button 
          onClick={handleTest} 
          disabled={loading} 
          className="w-full mb-4"
        >
          {loading ? 'Testing...' : 'Test API'}
        </Button>
        
        <div className="p-4 bg-gray-100 rounded-md">
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      </div>
    </div>
  );
} 