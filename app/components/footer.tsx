import Image from 'next/image';
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Image 
  src="/logo_without_text_bgremove.png" 
  alt="MHAHRR Natural Logo" 
  width={48} 
  height={48}
  className="flex-shrink-0"
/>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">MHAHRR Natural</h2>
            </div>
            <p className="text-green-100 text-sm sm:text-base">
              Healing Solutions, Care for your skin and health
            </p>
            <p className="text-green-100 text-sm sm:text-base">
              Founded in November 2025
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <div className="text-green-100 text-sm sm:text-base">
              <p>Karachi, Sindh</p>
              <p>Pakistan</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@mhahrr.com" 
                className="flex items-center gap-3 text-green-100 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@mhahrr.com</span>
              </a>
              <a 
                href="tel:+92123456789" 
                className="flex items-center gap-3 text-green-100 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+92 123 456 789</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-green-600 text-center">
          <p className="text-green-100 text-sm">
            © 2025 MHAHRR Natural. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}