"use client";

import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅ (Demo)");
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100">
      {/* HERO */}
      <div className="px-4 pt-20 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                📩 Contact Us
              </span>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Let’s Talk About Your Laundry
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                Need help with pickup, delivery, pricing or service details?
                Send us a message and we’ll respond quickly.
              </p>

        
            </div>

            {/* Right Info Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <h3 className="text-lg font-extrabold text-slate-900">
                Laundry Support Info
              </h3>

              <div className="mt-5 space-y-4">
                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Phone</p>
                    <p className="text-sm font-bold text-slate-900">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    📧
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Email</p>
                    <p className="text-sm font-bold text-slate-900">
                      support@laundry.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Address
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Pune, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    🕒
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Working Hours
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Mon–Sat: 9 AM – 8 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-slate-800">
                  Call Now
                </button>
                <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-50">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* FORM + MAP */}
          <div className=" grid gap-6 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
              <h2 className="text-xl font-extrabold text-slate-900">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill your details and we will contact you soon.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Full Name
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-300 focus:bg-white"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Mobile Number
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-300 focus:bg-white"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Email (Optional)
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-300 focus:bg-white"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Service Type
                    </label>
                    <select
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-300 focus:bg-white"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option>Wash & Fold</option>
                      <option>Dry Cleaning</option>
                      <option>Ironing</option>
                      <option>Stain Removal</option>
                      <option>Bulk Order</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Preferred Time
                    </label>
                    <select
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-300 focus:bg-white"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                    >
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Pickup Address
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-300 focus:bg-white"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    className="mt-2 min-h-[120px] w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-300 focus:bg-white"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-slate-800"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

        
        </div>
      </div>
    </div>
  );
}
