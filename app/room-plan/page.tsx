'use client'

import Link from 'next/link'
import Image from 'next/image'

const roomTypes = [
  {
    name: 'Single Room',
    description: 'Study desk, wardrobe, and en-suite bathroom (depending on unit).',
    image: '/image/cm1.jfif',
  },
  {
    name: 'Twin / Shared Room',
    description: 'Two beds, shared space, and small storage.',
    image: '/image/cm2.jfif',
  },
  {
    name: 'Suite / Family Unit',
    description: 'Small living area and pantry; suitable for couples or families.',
    image: '/image/cm3.jfif',
  },
]

export default function RoomPlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Room Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Room options offered at Residential College K10.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roomTypes.map((room, idx) => (
            <div key={idx} className="card card-hover">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{room.name}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <button
                onClick={() => {
                  alert('PDF download function will be added later. Please contact the office to obtain the room plan.')
                }}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Download Plan (PDF)
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/application" className="btn-primary">
            Apply for Preferred Room
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

