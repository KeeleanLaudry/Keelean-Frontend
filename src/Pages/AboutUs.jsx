import React from 'react';
import { CheckCircle, Clock, Shield, Truck, Users, Award, Leaf, Zap } from 'lucide-react';

export default function AboutPage() {
  const features = [
    { icon: <Truck className="w-6 h-6" />, title: "Free Pickup & Delivery", desc: "Doorstep service across the city" },
    { icon: <Clock className="w-6 h-6" />, title: "48-Hour Turnaround", desc: "Guaranteed on-time delivery" },
    { icon: <Leaf className="w-6 h-6" />, title: "Premium Detergents", desc: "Eco-friendly & fabric-safe" },
    { icon: <Zap className="w-6 h-6" />, title: "Real-time Tracking", desc: "Live order updates" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure Payments", desc: "Multiple payment options" },
    { icon: <Award className="w-6 h-6" />, title: "Quality Assurance", desc: "100% satisfaction guarantee" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Schedule Pickup",
      description: "Book service online or via app, select date & time slot",
      icon: "📅",
    },
    {
      number: "02",
      title: "Professional Cleaning",
      description: "Fabric-specific treatment with premium detergents",
      icon: "🧺",
    },
    {
      number: "03",
      title: "Quality Check",
      description: "Manual inspection & hygienic packaging",
      icon: "✅",
    },
    {
      number: "04",
      title: "On-time Delivery",
      description: "Fresh clothes delivered at your doorstep",
      icon: "🚚",
    }
  ];

  const stats = [
    { value: "10,000+", label: "Clothes Cleaned", icon: "👕" },
    { value: "5+", label: "Cities Served", icon: "🏙️" },
    { value: "2,000+", label: "Happy Customers", icon: "😊" },
    { value: "98%", label: "On-time Delivery", icon: "⏱️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-800 opacity-95"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
         <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full m-8">
            <span className="w-2 h-2 bg-gray-300 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300">Since 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-2xl font-bold text-white mb-7 leading-tight">
            Redefining Laundry Care
            <span className="block text-4xl md:text-5xl font-semibold text-gray-300 mt-2">
              with Technology & Trust
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl font-medium mx-auto mb-10 leading-relaxed">
            Keelean Laundry delivers premium laundry & dry-cleaning services with precision, care, and on-time delivery. 
            We combine modern technology with expert fabric care for spotless results every time.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pickup" 
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              🧺 Schedule Pickup
            </a>
            <a 
              href="#process" 
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              📖 Our Process
            </a>
          </div>
        </div>
      </div>

<div className="py-10 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 px-6 sm:px-12 py-10 text-center">
      <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gray-100 text-gray-800 font-medium text-sm shadow-sm">
        Our Story
      </div>

      <h2 className="mt-6 text-4xl sm:text-3xl font-semibold text-gray-900">
        Who We Are
      </h2>

      <div className="mt-5 max-w-4xl mx-auto space-y-5 text-base font-normal  sm:text-base text-gray-700 leading-relaxed">
        <p>
          Founded in 2026, Keelean Laundry was built to simplify laundry for busy lifestyles.
          We saw the need for a reliable, technology-driven solution that could deliver premium
          laundry care without the hassle.
        </p>

        <p>
          Today, we combine modern technology, expert fabric care, and reliable logistics to
          deliver spotless results every time. Our team of laundry experts ensures each garment
          receives the attention it deserves.
        </p>

        <p>
          We provide end-to-end laundry solutions including wash & fold, dry cleaning, ironing,
          stain removal, and special care for delicate fabrics. From daily wear to premium outfits,
          we handle everything with professional-grade cleaning standards.
        </p>

        <p>
          Our goal is simple: to save your time and deliver fresh, hygienic clothes right to your
          doorstep. With scheduled pickups, fast turnaround, and transparent pricing, Keelean
          Laundry makes laundry effortless and stress-free.
        </p>

        <p>
          We believe in quality, consistency, and customer trust. Every order is carefully checked,
          neatly packed, and delivered on time so you always get the best experience.
        </p>
      </div>  
    </div>
  </div>
     
</div>

      <div id="process" className="py-20 bg-gradient-to-b from-gray-700 to-gray-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full text-white font-medium mb-4">
              How It Works
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From scheduling to delivery, we ensure a seamless experience at every step
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 transform -translate-y-1/2 -z-10"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl p-6 text-white h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}>
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white text-gray-600 flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    
                    <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-300 text-center">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Thousands
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
              >
              
                <div className="text-5xl font-semibold text-gray-800 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

  
    </div>
  );
}