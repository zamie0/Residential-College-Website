'use client'

import { useState } from 'react'
import Image from 'next/image'

const staffMembers = [
  {
    name: 'Dr. Ahmad Zulkifli',
    role: 'College Warden',
    email: 'ahmad@upm.edu.my',
    phone: '+60 3-xxxx xxxx',
    image: '/image/staf/warden.jpg',
  },
  {
    name: 'Pn. Siti Aminah',
    role: 'Academic Fellow',
    email: 'siti@upm.edu.my',
    phone: '+60 3-xxxx xxxx',
    image: '/image/staf/fellow1.jpg',
  },
  {
    name: 'Encik Hafiz Rahman',
    role: 'Assistant Administrator',
    email: 'hafiz@upm.edu.my',
    phone: '+60 3-xxxx xxxx',
    image: '/image/staf/admin1.jpg',
  },
  {
    name: 'Security Unit',
    role: '24/7 On-Duty Officer',
    email: '',
    phone: '+60 12-345 6789',
    image: '/image/staf/security.jpg',
  },
]

export default function StaffPage() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const handleImageError = (idx: number) => {
    setImageErrors((prev) => ({ ...prev, [idx]: true }))
  }

  const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="50" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E%3C/text%3E%3C/svg%3E'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Residential College K10 Staff
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Management and support team ensuring smooth college operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {staffMembers.map((staff, idx) => (
            <div
              key={idx}
              className="card card-hover text-center bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                {imageErrors[idx] ? (
                  <img
                    src={placeholderImage}
                    alt={staff.name}
                    className="w-full h-full object-cover rounded-full border-4 border-red-600"
                  />
                ) : (
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    className="object-cover rounded-full border-4 border-red-600"
                    onError={() => handleImageError(idx)}
                  />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{staff.name}</h3>
              <p className="text-gray-600 italic mb-3">{staff.role}</p>
              {staff.email && (
                <p className="text-sm mb-1">
                  <a
                    href={`mailto:${staff.email}`}
                    className="text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    {staff.email}
                  </a>
                </p>
              )}
              <p className="text-sm text-gray-600">{staff.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

