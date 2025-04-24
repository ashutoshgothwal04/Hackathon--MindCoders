import { Button } from '../ui/button';
import { matchScores, steps } from './Data/Data';

export default function Matchmaking() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">AI-Powered Matchmaking</h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4">How It Works</h3>
          <p className="text-gray-700 mb-6">
            Our advanced AI algorithm analyzes your preferences, search history, and feedback to recommend properties
            that match your unique needs. The more you use the platform, the smarter it gets at finding your perfect
            home.
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div className="flex" key={step.title}>
                <div className="bg-blue-100 p-2 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-semibold text-blue-600">{step.number}</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button className="mt-8 bg-blue-600 hover:bg-blue-700">Try AI Matching Now</Button>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg p-6 h-full">
            <h3 className="text-xl font-semibold mb-4">Match Score Breakdown</h3>

            <div className="space-y-6">
              {matchScores.map((match) => (
                <div key={match.label}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{match.label}</span>
                    <span className="font-medium text-blue-600">{match.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${match.percentage}%` }}></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {match.description}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-lg">Overall Match</span>
                  <span className="font-medium text-lg text-blue-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
