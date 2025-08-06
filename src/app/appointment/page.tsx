'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarDaysIcon, 
  PhoneIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import {
  CalendarDaysIcon as CalendarDaysIconSolid,
  CheckCircleIcon as CheckCircleIconSolid
} from '@heroicons/react/24/solid';

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
      <div className="relative min-h-screen">
        {/* Luxury Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_70%)]"></div>
        
        <div className="relative py-32 sm:py-40">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"></div>
              <div className="relative p-16 text-center">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/30 to-transparent rounded-full blur-xl"></div>
                
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <CheckCircleIconSolid className="h-12 w-12 text-white" />
                  </div>
                  
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 mb-6">
                    <SparklesIcon className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-sm font-semibold text-emerald-800 tracking-wide uppercase">Success</span>
                  </div>
                  
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-800 to-green-800 bg-clip-text text-transparent mb-8 tracking-tight">
                    Appointment Confirmed!
                  </h1>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/50 shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Appointment Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Patient</span>
                          <p className="text-lg font-medium text-slate-800">{formData.patientName}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Doctor</span>
                          <p className="text-lg font-medium text-slate-800">{doctors.find(d => d.id.toString() === formData.doctor)?.name}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Date & Time</span>
                          <p className="text-lg font-medium text-slate-800">
                            {new Date(formData.date).toLocaleDateString('en-US', { 
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p className="text-lg font-medium text-emerald-600">{formData.time}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Appointment ID</span>
                          <p className="text-lg font-bold text-emerald-600">RKE{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-10">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center justify-center">
                      <HeartIcon className="h-6 w-6 text-blue-600 mr-2" />
                      What&apos;s Next?
                    </h3>
                    <ul className="text-left space-y-3 text-slate-700 max-w-2xl mx-auto">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>We&apos;ll send a confirmation SMS to <strong className="text-emerald-600">{formData.phone}</strong></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Please arrive <strong>15 minutes before</strong> your appointment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Bring a valid ID and any <strong>previous medical records</strong></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>For emergencies, call <strong className="text-red-600">+91 98765 43210</strong></span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">Contact on WhatsApp</span>
                    </a>
                    <Link
                      href="/"
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">Back to Home</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Luxury Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <div className="relative py-32 sm:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Premium Header */}
          <div className="relative text-center mb-20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-8">
                <CalendarDaysIcon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Book Appointment</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-8 tracking-tight">
                Schedule Your Visit
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                Book your appointment with our world-renowned ophthalmologists and experience 
                exceptional vision care tailored to your needs.
              </p>
            </div>
          </div>

          {/* Premium Progress Bar */}
          <div className="mb-16">
            <div className="flex items-center justify-center">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`
                    relative w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-500
                    ${step >= stepNumber 
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-xl scale-110' 
                      : 'bg-white/70 backdrop-blur-sm text-slate-400 border border-slate-200 shadow-lg'
                    }
                  `}>
                    <span className="relative z-10">{stepNumber}</span>
                    {step >= stepNumber && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl"></div>
                    )}
                  </div>
                  {stepNumber < 3 && (
                    <div className={`
                      w-24 h-2 mx-4 rounded-full transition-all duration-500
                      ${step > stepNumber 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg' 
                        : 'bg-slate-200'
                      }
                    `} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-20">
              <span className={`text-sm font-medium transition-colors duration-300 ${step >= 1 ? 'text-blue-600' : 'text-slate-500'}`}>
                Patient Information
              </span>
              <span className={`text-sm font-medium transition-colors duration-300 ${step >= 2 ? 'text-blue-600' : 'text-slate-500'}`}>
                Select Appointment
              </span>
              <span className={`text-sm font-medium transition-colors duration-300 ${step >= 3 ? 'text-blue-600' : 'text-slate-500'}`}>
                Confirmation
              </span>
            </div>
          </div>

          {/* Premium Form Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"></div>
            <form onSubmit={handleSubmit} className="relative p-12">
              {/* Step 1: Patient Information */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
                      <UserIcon className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">Step 1</span>
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                      Patient Information
                    </h2>
                    <p className="text-lg text-slate-600 font-light">
                      Please provide your details for the appointment
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="patientName" className="block text-sm font-semibold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        required
                        value={formData.patientName}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                        placeholder="Enter patient's full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-3">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="age" className="block text-sm font-semibold text-slate-700 mb-3">
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
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                        placeholder="Enter age"
                      />
                    </div>

                    <div>
                      <label htmlFor="gender" className="block text-sm font-semibold text-slate-700 mb-3">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 shadow-lg hover:shadow-xl"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="appointmentType" className="block text-sm font-semibold text-slate-700 mb-3">
                        Appointment Type *
                      </label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        required
                        value={formData.appointmentType}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 shadow-lg hover:shadow-xl"
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
                    <label htmlFor="symptoms" className="block text-sm font-semibold text-slate-700 mb-3">
                      Symptoms / Reason for Visit
                    </label>
                    <textarea
                      id="symptoms"
                      name="symptoms"
                      rows={4}
                      value={formData.symptoms}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                      placeholder="Please describe your symptoms or reason for the appointment..."
                    />
                  </div>

                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-semibold text-slate-700 mb-3">
                      Emergency Contact Number
                    </label>
                    <input
                      type="tel"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl"
                      placeholder="Emergency contact (if different from above)"
                    />
                  </div>

                  <div className="flex justify-end pt-6">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 px-10 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center">
                        Next Step 
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Select Appointment */}
              {step === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 mb-6">
                      <CalendarDaysIconSolid className="h-5 w-5 text-indigo-600 mr-2" />
                      <span className="text-sm font-semibold text-indigo-800 tracking-wide uppercase">Step 2</span>
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent mb-4">
                      Select Appointment Details
                    </h2>
                    <p className="text-lg text-slate-600 font-light">
                      Choose your preferred doctor, date, and time
                    </p>
                  </div>

                  <div>
                    <label htmlFor="doctor" className="block text-sm font-semibold text-slate-700 mb-3">
                      Select Doctor *
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      required
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 text-slate-800 shadow-lg hover:shadow-xl"
                    >
                      <option value="">Choose a specialist</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name} - {doctor.specialization}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-6">
                      Select Date *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {generateDates().slice(0, 16).map((date) => (
                        <button
                          key={formatDate(date)}
                          type="button"
                          onClick={() => setFormData({...formData, date: formatDate(date)})}
                          className={`
                            p-4 rounded-2xl border-2 transition-all duration-300 text-center
                            ${formData.date === formatDate(date)
                              ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 shadow-lg scale-105'
                              : 'border-slate-200 bg-white/70 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                            }
                          `}
                        >
                          <div className="text-sm font-medium">{formatDisplayDate(date)}</div>
                          <div className="text-xs text-slate-500 mt-1">{date.getFullYear()}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-6">
                      Select Time *
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({...formData, time})}
                          className={`
                            py-3 px-4 rounded-2xl border-2 transition-all duration-300 text-center font-medium
                            ${formData.time === time
                              ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 shadow-lg scale-105'
                              : 'border-slate-200 bg-white/70 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md'
                            }
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="group relative overflow-hidden bg-white border-2 border-slate-300 text-slate-700 py-4 px-10 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-slate-400"
                    >
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Previous
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.doctor || !formData.date || !formData.time}
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:from-slate-300 disabled:to-slate-400 text-white py-4 px-10 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:scale-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center">
                        Next Step 
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 mb-6">
                      <CheckCircleIconSolid className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-semibold text-emerald-800 tracking-wide uppercase">Step 3</span>
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-emerald-800 bg-clip-text text-transparent mb-4">
                      Confirm Your Appointment
                    </h2>
                    <p className="text-lg text-slate-600 font-light">
                      Please review your appointment details before confirming
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8">Appointment Summary</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Patient Information</span>
                          <div className="mt-2 space-y-1">
                            <p className="text-lg font-medium text-slate-800">{formData.patientName}</p>
                            <p className="text-slate-600">{formData.email}</p>
                            <p className="text-slate-600">{formData.phone}</p>
                            <p className="text-slate-600">Age: {formData.age}, {formData.gender}</p>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Appointment Type</span>
                          <p className="text-lg font-medium text-slate-800 mt-2 capitalize">{formData.appointmentType.replace('-', ' ')}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Doctor & Specialization</span>
                          <div className="mt-2">
                            <p className="text-lg font-medium text-slate-800">
                              {doctors.find(d => d.id.toString() === formData.doctor)?.name}
                            </p>
                            <p className="text-slate-600">
                              {doctors.find(d => d.id.toString() === formData.doctor)?.specialization}
                            </p>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Date & Time</span>
                          <div className="mt-2">
                            <p className="text-lg font-medium text-slate-800">
                              {formData.date && new Date(formData.date).toLocaleDateString('en-US', { 
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                            <p className="text-blue-600 font-semibold text-lg">{formData.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {formData.symptoms && (
                      <div className="mt-8 pt-6 border-t border-blue-200">
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Symptoms / Reason for Visit</span>
                        <p className="text-slate-700 mt-2 leading-relaxed">{formData.symptoms}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center">
                      <ClockIcon className="h-5 w-5 mr-2" />
                      Important Information
                    </h4>
                    <ul className="text-amber-800 text-sm space-y-2">
                      <li>• Please arrive 15 minutes before your appointment time</li>
                      <li>• Bring a valid photo ID and insurance cards</li>
                      <li>• Bring any previous medical records or test results</li>
                      <li>• You will receive a confirmation SMS shortly</li>
                    </ul>
                  </div>

                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="group relative overflow-hidden bg-white border-2 border-slate-300 text-slate-700 py-4 px-10 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-slate-400"
                    >
                      <span className="relative flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Previous
                      </span>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 disabled:from-emerald-300 disabled:to-green-300 text-white py-4 px-12 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:scale-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-lg">
                        {isSubmitting ? 'Confirming Appointment...' : 'Confirm Appointment'}
                      </span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
