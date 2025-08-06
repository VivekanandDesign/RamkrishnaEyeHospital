'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendarDaysIcon, PhoneIcon } from '@heroicons/react/24/outline';

const doctors = [
  { id: 1, name: 'Dr. Rajesh Kumar', specialization: 'Cataract & Refractive Surgery' },
  { id: 2, name: 'Dr. Priya Sharma', specialization: 'Retina Specialist' },
  { id: 3, name: 'Dr. Amit Patel', specialization: 'Glaucoma Specialist' },
  { id: 4, name: 'Dr. Sunita Joshi', specialization: 'Pediatric Ophthalmology' },
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
];

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    appointmentType: '',
    doctor: '',
    date: '',
    time: '',
    symptoms: '',
    emergencyContact: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Generate next 30 days for date selection
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const formatDisplayDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (submitted) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarDaysIcon className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-900 mb-4">
              Appointment Confirmed!
            </h1>
            <div className="space-y-2 text-green-800 mb-8">
              <p><strong>Patient:</strong> {formData.patientName}</p>
              <p><strong>Doctor:</strong> {doctors.find(d => d.id.toString() === formData.doctor)?.name}</p>
              <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p><strong>Time:</strong> {formData.time}</p>
              <p><strong>Appointment ID:</strong> RKE{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
            <div className="bg-white border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What&apos;s Next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• We&apos;ll send a confirmation SMS to {formData.phone}</li>
                <li>• Please arrive 15 minutes before your appointment</li>
                <li>• Bring a valid ID and any previous medical records</li>
                <li>• For emergencies, call +91 98765 43210</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Contact on WhatsApp
              </a>
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Book Appointment
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Schedule your appointment with our expert ophthalmologists
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                  ${step >= stepNumber 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`
                    w-24 h-1 mx-2
                    ${step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-24">
            <span className="text-sm text-gray-600">Patient Info</span>
            <span className="text-sm text-gray-600">Select Slot</span>
            <span className="text-sm text-gray-600">Confirm</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          {/* Step 1: Patient Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    required
                    value={formData.patientName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                    placeholder="Enter patient's full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                    placeholder="Enter age"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Type *
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    required
                    value={formData.appointmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  >
                    <option value="">Select appointment type</option>
                    <option value="consultation">General Consultation</option>
                    <option value="follow-up">Follow-up</option>
                    <option value="surgery">Pre-Surgery Consultation</option>
                    <option value="emergency">Emergency</option>
                    <option value="screening">Eye Screening</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                  Symptoms / Reason for Visit
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  rows={3}
                  value={formData.symptoms}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
                  placeholder="Please describe your symptoms or reason for the appointment..."
                />
              </div>

              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Number
                </label>
                <input
                  type="tel"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  placeholder="Emergency contact (if different from above)"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
                >
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Doctor, Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Doctor, Date & Time</h2>
              
              <div>
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Doctor *
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  required
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                >
                  <option value="">Choose a specialist</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id.toString()}>
                      {doctor.name} - {doctor.specialization}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Date *
                </label>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                  {generateDates().map((date) => (
                    <button
                      key={formatDate(date)}
                      type="button"
                      onClick={() => setFormData({...formData, date: formatDate(date)})}
                      className={`
                        p-3 text-sm font-medium rounded-lg border transition-colors
                        ${formData.date === formatDate(date)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                        }
                      `}
                    >
                      {formatDisplayDate(date)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Time *
                </label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({...formData, time})}
                      className={`
                        p-3 text-sm font-medium rounded-lg border transition-colors
                        ${formData.time === time
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.doctor || !formData.date || !formData.time}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
                >
                  Review →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Appointment</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Appointment Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Patient Name:</span>
                    <p className="text-gray-900">{formData.patientName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Email:</span>
                    <p className="text-gray-900">{formData.email}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Phone:</span>
                    <p className="text-gray-900">{formData.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Age:</span>
                    <p className="text-gray-900">{formData.age} years</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Doctor:</span>
                    <p className="text-gray-900">{doctors.find(d => d.id.toString() === formData.doctor)?.name}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Specialization:</span>
                    <p className="text-gray-900">{doctors.find(d => d.id.toString() === formData.doctor)?.specialization}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Date:</span>
                    <p className="text-gray-900">{new Date(formData.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Time:</span>
                    <p className="text-gray-900">{formData.time}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium text-gray-700">Appointment Type:</span>
                    <p className="text-gray-900">{formData.appointmentType}</p>
                  </div>
                  {formData.symptoms && (
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-700">Symptoms:</span>
                      <p className="text-gray-900">{formData.symptoms}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notes</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Please arrive 15 minutes before your appointment time</li>
                  <li>• Bring a valid government ID and insurance card (if applicable)</li>
                  <li>• Bring any previous medical records or prescriptions</li>
                  <li>• For emergencies, call our 24/7 hotline: +91 98765 43210</li>
                </ul>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
                >
                  ← Previous
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-red-900 mb-4">Emergency?</h3>
          <p className="text-red-800 mb-6">
            For urgent eye emergencies, don&apos;t wait for an appointment. Contact us immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Emergency: +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
