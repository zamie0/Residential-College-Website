'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Thank you — your message has been sent. We will contact you soon.')
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
      <div className="container mx-auto px-5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Help & FAQ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Frequently asked questions, emergency hotline, and ways to contact Residential College K10 office. We are here to help.
          </p>
          <div className="mt-6">
            <Link href="/application" className="btn-primary">
              Apply for Residence
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-2">Send Message</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we will reply via email as soon as possible.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Full name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="+60 3-xxxx xxxx"
                  />
                </div>
              </div>

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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Example: Room application"
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-vertical"
                  placeholder="Write your message here..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="btn-secondary"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Warden Office, Residential College K10</strong>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:residence.k10@upm.edu.my"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    residence.k10@upm.edu.my
                  </a>
                </p>
                <p>Phone: +60 3-xxxx xxxx</p>
                <p>
                  College Security (24/7): <strong>+60 12-345 6789</strong>
                </p>
                <p>Office Hours: Monday–Friday, 9:00 AM – 5:00 PM</p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-bold mb-3 text-gray-900">Support Features</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      24/7 Security
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      Maintenance
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      Counseling
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <p className="text-gray-700 mb-4">
                Residential College K10, Universiti Putra Malaysia (UPM)
              </p>
              <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="UPM location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.317285156809!2d101.71688607447041!3d3.00907625399878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb1568b42245%3A0x381eced9f4897759!2sKolej%2010%20UPM!5e0!3m2!1sen!2smy!4v1756114223598!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <p className="text-sm text-gray-500 italic mt-3">
                Use the actual Google Maps if you want to provide exact directions to visitors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

