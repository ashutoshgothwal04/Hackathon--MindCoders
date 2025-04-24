interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div className="text-center" key={index}>
            <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
