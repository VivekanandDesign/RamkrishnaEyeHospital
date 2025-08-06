'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, EyeIcon, SparklesIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Appointment', href: '/appointment' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/50 sticky top-0 z-40">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 p-1.5">
            <span className="sr-only">Ramkrishna Eye Hospital</span>
            <div className="flex items-center">
              <div className="relative">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <EyeIcon className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <SparklesIcon className="h-2 w-2 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Ramkrishna Eye Hospital
                </h1>
                <p className="text-sm text-blue-600 font-medium">Excellence in Eye Care</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="group -m-2.5 inline-flex items-center justify-center rounded-2xl p-3 bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="group relative px-4 py-2 text-sm font-bold leading-6 text-slate-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-white/50 hover:backdrop-blur-sm hover:shadow-md"
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          <Link
            href="/appointment"
            className="group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center">
              Book Appointment
              <SparklesIcon className="h-4 w-4 ml-2 transform group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </nav>
      
      {/* Premium Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-white/50 shadow-2xl">
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="group -m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Ramkrishna Eye Hospital</span>
                <div className="flex items-center">
                  <div className="relative">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <EyeIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                      <SparklesIcon className="h-1.5 w-1.5 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-lg font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                      Ramkrishna Eye Hospital
                    </span>
                    <p className="text-xs text-blue-600 font-medium">Excellence in Eye Care</p>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="group -m-2.5 rounded-xl p-3 bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-red-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-200/50">
                <div className="space-y-3 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group relative -mx-3 block rounded-2xl px-6 py-4 text-base font-bold leading-7 text-slate-700 hover:text-blue-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <SparklesIcon className="h-3 w-3 text-blue-600" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Mobile CTA */}
                <div className="py-6">
                  <Link
                    href="/appointment"
                    className="group relative block rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4 text-center text-base font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Book Appointment
                      <SparklesIcon className="h-4 w-4 ml-2 transform group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
