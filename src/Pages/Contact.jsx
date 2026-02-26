"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  CheckCircle,
  Truck,
  Sparkles,
  Shield
} from "lucide-react";

export default function ContactUsLaundry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Wash & Fold",
    address: "",
    time: "Morning",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitSuccess(false), 3000);
    
    setForm({
      name: "",
      phone: "",
      email: "",
      service: "Wash & Fold",
      address: "",
      time: "Morning",
      message: "",
    });
  };

  const services = [
    { id: "Wash & Fold", icon: "🧺", description: "Regular wash and fold service" },
    { id: "Dry Cleaning", icon: "👔", description: "Professional dry cleaning" },
    { id: "Ironing", icon: "👕", description: "Premium ironing service" },
    { id: "Stain Removal", icon: "✨", description: "Expert stain treatment" },
    { id: "Bulk Order", icon: "📦", description: "Special rates for bulk orders" },
  ];

  const timeSlots = [
    { value: "Morning", label: "🌅 Morning (8 AM - 12 PM)" },
    { value: "Afternoon", label: "☀️ Afternoon (12 PM - 4 PM)" },
    { value: "Evening", label: "🌙 Evening (4 PM - 8 PM)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b mt-10 from-gray-50 via-white to-gray-100">
      {/* Success Toast */}
      {submitSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-slide-down">
          <div className="flex items-center gap-3 rounded-2xl bg-gray-800 px-6 py-4 text-white shadow-lg">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Message sent successfully! We'll contact you soon.</span>
          </div>
        </div>
      )}

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gray-200 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gray-300 opacity-30 blur-3xl"></div>
      </div>

      <div className="relative px-4 pt-20 pb-16">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-lg mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
              Let's Talk About Your Laundry
            </h1>
            <p className="text-lg text-gray-600 max-w-1xl mx-auto">
              Have questions about our services? Need a pickup? We're here to help 24/7.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Contact Info Cards */}
            <div className="lg:col-span-1">
  <div className="rounded-3xl bg-gray-900 p-8 text-gray-100 shadow-2xl border border-gray-800 space-y-8">
    
    {/* CONTACT */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-1">
        Contact
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        We’re here to help
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-200">
            +971 564727007
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-200">
            support@laundry.com
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-200">
            Dubai , UAE
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-200">
            Mon–Sat · 9 AM – 8 PM
          </span>
        </div>
      </div>
    </div>

    {/* DIVIDER */}
    <div className="h-px bg-gray-800" />

    {/* FEATURES */}
    {/* <div>
      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-4">
        Why choose us
      </h4>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Truck className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-300">
            Free pickup & delivery
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Shield className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-300">
            100% satisfaction guarantee
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-300">
            24-hour turnaround
          </span>
        </div>
      </div>
    </div> */}

    {/* ACTIONS */}
    <div className="grid grid-cols-2 gap-3 pt-2">
      <button className="rounded-xl bg-gray-800 px-4 py-3 text-sm font-semibold text-gray-100 border border-gray-700 hover:bg-gray-700 transition">
        Call
      </button>

      <button className="rounded-xl bg-gray-700 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-600 transition">
        WhatsApp
      </button>
    </div>
  </div>
</div>


            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                    <p className="text-gray-600 mt-1">We'll get back to you within 24 hours</p>
                  </div>
                  <div className="rounded-full bg-gray-100 p-3">
                    <Send className="h-6 w-6 text-gray-700" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name *</label>
                      <input
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                      <input
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Service Type *</label>
                      <select
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.icon} {service.id}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Preferred Time *</label>
                      <select
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot.value} value={slot.value}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Pickup Address *</label>
                      <input
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Enter your full address"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message *</label>
                    <textarea
                      className="min-h-[120px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-200"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your laundry needs..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full overflow-hidden rounded-xl bg-gray-700 px-6 py-4 text-white font-semibold transition-all hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    <span className={`flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </span>
                    {isSubmitting && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      </span>
                    )}
                  </button>
                </form>

             
              </div>
            </div>
          </div>

          {/* Map Section
          <div className="mt-12">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.141997525!2d73.72288165!3d18.5245649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laundry Service Location"
                className="w-full"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}