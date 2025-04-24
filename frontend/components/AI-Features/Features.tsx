import { featuresData } from "./Data/Data";

const FeatureItem = ({ icon: Icon, iconColor, title, description }: { icon: any; iconColor: string; title: string; description: string }) => (
  <div className="text-center">
    <div className={`bg-${iconColor}-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
      <Icon className={`h-10 w-10 text-${iconColor}-600`} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Features() {

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Security & Trust Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
