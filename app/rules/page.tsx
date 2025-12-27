import Link from 'next/link'

const rules = [
  {
    title: 'Visiting Hours',
    description: 'Guests are allowed between 7:00 AM — 11:00 PM (except with special permission).',
  },
  {
    title: 'Security',
    description: 'Residents must comply with security instructions and use their own access card.',
  },
  {
    title: 'Cleanliness',
    description: 'All residents are responsible for ensuring personal and common areas are clean.',
  },
  {
    title: 'Noise',
    description: 'Respect quiet hours (10:00 PM — 7:00 AM); no disturbing noise.',
  },
  {
    title: 'Prohibitions',
    description: 'Smoking and use of prohibited substances are not allowed on college premises.',
  },
]

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
              Main Rules
            </h1>

            <ol className="space-y-6 mb-12">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <strong className="text-red-600 text-lg">{rule.title}:</strong>
                    <p className="text-gray-700 mt-1">{rule.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Disciplinary Process</h2>
              <p className="text-gray-700 leading-relaxed">
                Rule violations will be referred to the warden team; actions may include warnings, fines, or termination of accommodation depending on severity.
              </p>
            </div>

            <div className="text-center">
              <Link href="/" className="btn-primary">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

