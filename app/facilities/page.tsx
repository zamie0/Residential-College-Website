import Link from 'next/link'
import Image from 'next/image'

const facilities = [
  {
    title: 'Dining & Pantry',
    description: 'The dining hall serves balanced meals daily. Small pantries are available in each block for light use.',
    image: '/image/canteen.jfif',
    name: 'Dining Hall',
    detail: 'Flexible meal plans for residents.',
  },
  {
    title: 'Study Rooms & Lounges',
    description: 'Group study rooms, small tutorial rooms, and 24/7 study pods for residents.',
    image: '/image/auditorium.jfif',
    name: 'Study Rooms',
    detail: 'Group and individual study rooms.',
  },
  {
    title: 'Sports & Recreation',
    description: 'Small field, simple gymnasium, and badminton courts for healthy activities.',
    image: '/image/hostel.jfif',
    name: 'Gym & Courts',
    detail: 'Sports facilities for recreation.',
  },
  {
    title: 'Security & Maintenance',
    description: '24/7 patrols, door access cards, and local maintenance team for minor issues.',
    image: '/image/hostel.jfif',
    name: 'Security',
    detail: '24/7 security for all residents.',
  },
]

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Residential College K10 Facilities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern facilities to support life, learning, and resident well-being.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {facilities.map((facility, idx) => (
            <article
              key={idx}
              className="card card-hover max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{facility.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{facility.description}</p>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

