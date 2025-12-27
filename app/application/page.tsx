'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

interface ApplicationFormData {
  fullName: string
  studentId: string
  email: string
  phone: string
  program: string
  year: string
  roomPreference: string
  specialNeeds: string
  emergencyContact: string
  emergencyPhone: string
  agreement: boolean
}

export default function ApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>()

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        const message = result.referenceNumber 
          ? `${result.message} Reference Number: ${result.referenceNumber}`
          : result.message
        toast.success(message || 'Your application has been submitted! We will contact you via email.')
        reset()
      } else {
        toast.error(result.error || 'An error occurred. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-5 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Residence Application
          </h1>
          <p className="text-lg text-gray-600">
            Please fill out the form below to apply for accommodation at Residential College K10
          </p>
        </div>

        <div className="card p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Personal Information</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium mb-2">
                    Student ID Number *
                  </label>
                  <input
                    id="studentId"
                    type="text"
                    {...register('studentId', { required: 'Student ID is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="A123456"
                  />
                  {errors.studentId && (
                    <p className="text-red-600 text-sm mt-1">{errors.studentId.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+60 12-345 6789"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Academic Information</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="program" className="block text-sm font-medium mb-2">
                    Study Program *
                  </label>
                  <input
                    id="program"
                    type="text"
                    {...register('program', { required: 'Program is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Example: Bachelor of Computer Science"
                  />
                  {errors.program && (
                    <p className="text-red-600 text-sm mt-1">{errors.program.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium mb-2">
                    Year of Study *
                  </label>
                  <select
                    id="year"
                    {...register('year', { required: 'Year is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select Year</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                    <option value="postgrad">Postgraduate</option>
                  </select>
                  {errors.year && (
                    <p className="text-red-600 text-sm mt-1">{errors.year.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Room Preference */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Room Preference</h2>
              
              <div>
                <label htmlFor="roomPreference" className="block text-sm font-medium mb-2">
                  Room Preference *
                </label>
                <select
                  id="roomPreference"
                  {...register('roomPreference', { required: 'Room preference is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select Room Type</option>
                  <option value="single">Single Room</option>
                  <option value="twin">Shared Room (Twin)</option>
                  <option value="suite">Suite / Family Unit</option>
                </select>
                {errors.roomPreference && (
                  <p className="text-red-600 text-sm mt-1">{errors.roomPreference.message}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="specialNeeds" className="block text-sm font-medium mb-2">
                  Special Needs (If any)
                </label>
                <textarea
                  id="specialNeeds"
                  rows={3}
                  {...register('specialNeeds')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                  placeholder="Please state if you have any special needs..."
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Emergency Contact</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-medium mb-2">
                    Emergency Contact Name *
                  </label>
                  <input
                    id="emergencyContact"
                    type="text"
                    {...register('emergencyContact', { required: 'Emergency contact name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Full name"
                  />
                  {errors.emergencyContact && (
                    <p className="text-red-600 text-sm mt-1">{errors.emergencyContact.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-medium mb-2">
                    Emergency Phone Number *
                  </label>
                  <input
                    id="emergencyPhone"
                    type="tel"
                    {...register('emergencyPhone', { required: 'Emergency phone number is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+60 12-345 6789"
                  />
                  {errors.emergencyPhone && (
                    <p className="text-red-600 text-sm mt-1">{errors.emergencyPhone.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('agreement', {
                    required: 'You must agree to the terms and conditions',
                  })}
                  className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">
                  I confirm that all information provided is true and accurate. *
                </span>
              </label>
              {errors.agreement && (
                <p className="text-red-600 text-sm mt-1">{errors.agreement.message}</p>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="btn-secondary"
              >
                Reset
              </button>
              <Link href="/" className="btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

