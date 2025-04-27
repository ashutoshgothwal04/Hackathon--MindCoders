import { Info } from 'lucide-react';
import { faqData } from './Data/Data';

export default function FAQ() {
  return (
    <div className="bg-white rounded-lg dark:bg-bg-color shadow-md p-8 mb-12">
      <div className="flex items-center mb-6">
        <Info className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
            <p className="text-gray-700 dark:text-gray-400">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
