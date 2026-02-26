import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
          <div className="flex flex-col leading-none">
          <span className="text-xl font-bold text-white uppercase tracking-wide">
           Keelean
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-widest">
          LAUNDRY SYSTEM
        </span>
          </div>
            <p className="text-gray-400 leading-relaxed">
              Premium laundry and dry cleaning services delivered with precision, care, and reliability across major cities.
            </p>
            
           <div className="flex space-x-4">
  {[
    { 
      name: 'Facebook', 
      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    { 
      name: 'Twitter', 
      path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    },
    { 
      name: 'Instagram', 
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    { 
      name: 'LinkedIn', 
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    }
  ].map((social) => (
    <a
      key={social.name}
      href="#"
      className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
      aria-label={social.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{social.name}</span>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={social.path} />
      </svg>
    </a>
  ))}
</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Standard Wash & Fold
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Premium Laundry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Bulk & Commercial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Subscription Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">8th floor,Clover Bay Tower-office No 803-Marasi Dr-Business Bay-Dubai </span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+91 50 285 2701</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">Singh@codxsoftwares.com</span>
                </li>
              </ul>
            </div>

            {/* App Download Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Download Our App</h4>
              <div className="flex space-x-3">
                <a href="#" className="flex-1">
                  <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 text-gray-300 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.1 12.9h-4.2v-4.2c0-.4-.3-.8-.8-.8s-.8.3-.8.8v4.2H7.1c-.4 0-.8.3-.8.8s.3.8.8.8h4.2v4.2c0 .4.3.8.8.8s.8-.3.8-.8v-4.2h4.2c.4 0 .8-.3.8-.8s-.4-.8-.8-.8z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-300">App Store</span>
                  </div>
                </a>
                <a href="#" className="flex-1">
                  <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-3 flex items-center justify-center transition-colors duration-200">
                    <svg className="w-5 h-5 text-gray-300 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.5 14.5h-2v2h2v-2zm0-3h-2v2h2v-2zm0-3h-2v2h2v-2zm3 6h-2v2h2v-2zm0-3h-2v2h2v-2zm0-3h-2v2h2v-2zm3 6h-2v2h2v-2zm0-3h-2v2h2v-2zm0-3h-2v2h2v-2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-300">Play Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating CTA */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-gray-800 rounded-lg shadow-xl p-4 flex items-center space-x-3 border border-gray-700">
          <div className="bg-gray-900 p-2 rounded">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Need help?</p>
            <p className="text-xs text-gray-400">Chat with our support</p>
          </div>
          <button className="bg-white text-gray-900 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
            Chat Now
          </button>
        </div>
      </div> */}
    <div className="flex flex-col items-center justify-center text-center py-6 border-t border-gray-700">
  <p className="text-gray-500 text-sm">
    © {currentYear} Keelean Laundry. All rights reserved.
  </p>
</div>

    </footer>
  );
};

export default Footer;