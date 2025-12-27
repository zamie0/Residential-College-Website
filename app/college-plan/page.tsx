'use client'

import Link from 'next/link'
import Image from 'next/image'

const blocks = [
  {
    name: 'Block A — Student Accommodation',
    description: 'Single & double room accommodation, pantry, and study spaces.',
    image: '/image/cm1.jfif',
  },
  {
    name: 'Block B — Support',
    description: 'Warden office, meeting rooms, and counseling rooms.',
    image: '/image/cm2.jfif',
  },
  {
    name: 'Block C — Recreation & Dining',
    description: 'Dining hall, multipurpose hall, and gym.',
    image: '/image/cm3.jfif',
  },
]

export default function CollegePlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Block Locations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Below is a brief overview of blocks and the function of each block:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blocks.map((block, idx) => (
            <div key={idx} className="card card-hover">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={block.image}
                  alt={block.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{block.name}</h3>
              <p className="text-gray-600">{block.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              For full-size map, download the masterplan PDF below:
            </p>
            <button
              onClick={() => {
                alert('PDF download function will be added later. Please contact the office to obtain the full plan.')
              }}
              className="btn-primary"
            >
              📄 Download Masterplan (PDF)
            </button>
          </div>

          <Link href="/" className="btn-primary">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

