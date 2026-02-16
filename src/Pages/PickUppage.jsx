import React, { useState } from "react";
import Footer from "../Home/Footer";
export default function PickupPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    services: "",
    pickup_date: "",
    pickup_time: "",
    amount: 350,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const services = [
    { id: "wash_fold", name: "Wash & Fold", price: 350 },
    { id: "wash_iron", name: "Wash & Iron", price: 450 },
    { id: "dry_clean", name: "Dry Cleaning", price: 550 },
    { id: "premium", name: "Premium Laundry", price: 650 },
  ];

  const timeSlots = [
    "10:00 AM - 12:00 PM",
    "12:00 PM - 02:00 PM",
    "02:00 PM - 04:00 PM",
    "04:00 PM - 06:00 PM",
    "06:00 PM - 08:00 PM",
  ];

  const startPayment = async () => {
    setError("");
    setSuccess(false);

    // Validation
    if (!form.name || !form.phone || !form.address || !form.pickup_date || !form.pickup_time || !form.services) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/pickup/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.order_id) {
        throw new Error(data.message || "Failed to create order");
      }

      const options = {
        key: data.razorpay_key,
        amount: data.amount * 100, // Convert to paise
        currency: "INR",
        name: "Keelean Laundry",
        description: "Laundry Pickup Payment",
        order_id: data.order_id,

        handler: async function (response) {
          const verifyRes = await fetch("http://127.0.0.1:8000/api/pickup/verify-payment/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.message) {
            setSuccess(true);
            setTimeout(() => {
              setForm({
                name: "",
                phone: "",
                address: "",
                services: "",
                pickup_date: "",
                pickup_time: "",
                amount: 350,
              });
            }, 3000);
          } else {
            setError("Payment verification failed");
          }
        },

        prefill: {
          name: form.name,
          contact: form.phone,
        },

        theme: {
          color: "#5F6FFF",
        },
      };

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
  <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold uppercase text-gray-800 mb-3">
            <span className="text-semibold bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600">
              Schedule Your Laundry Pickup
            </span>
          </h1>
          <p className="text-gray-600 font-medium text-lg">
            Fresh laundry delivered to your doorstep. Pick a time, we'll handle the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-4 mb-4">
            <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
              👤
            </span>
            Personal Details
          </h2>
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-700">✅ Payment successful! Pickup scheduled.</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="John Doe"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="9876543210"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-32"
                  placeholder="Enter complete address with landmark"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      className={`p-4 border rounded-lg text-left transition-all ${form.services === service.name
                          ? "border-gray-700 bg-gray-100 ring-2 ring-gray-200"
                          : "border-gray-300 hover:border-gray-300"
                        }`}
                      onClick={() => setForm({ ...form, services: service.name, amount: service.price })}
                    >
                      <div className="font-medium text-gray-800">{service.name}</div>
                      <div className="text-sm text-gray-600 mt-1">₹{service.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    name="pickup_date"
                    value={form.pickup_date}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    name="pickup_time"
                    value={form.pickup_time}
                    onChange={handleChange}
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={startPayment}
              disabled={loading}
              className="w-full mt-8 bg-gradient-to-r from-gray-500 to-gray-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-gray-700 hover:to-gray-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                `Pay ₹${form.amount} & Schedule Pickup`
              )}
            </button>
          </div>

          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Service</span>
                  <span className="font-medium">{form.services || "Not selected"}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Pickup Date</span>
                  <span className="font-medium">
                    {form.pickup_date || "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Time Slot</span>
                  <span className="font-medium">{form.pickup_time || "Not selected"}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">Within 48 hours</span>
                </div>
                <div className="flex justify-between py-3 text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-gray-600">₹{form.amount}</span>
                </div>
              </div>
            </div>

            {/* Features */}
          <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>

            <div className="space-y-5">
              {[
                { icon: "🚚", text: "Free Pickup & Delivery" },
                { icon: "⏱️", text: "48-Hour Turnaround" },
                { icon: "🛡️", text: "100% Quality Assurance" },
                { icon: "💳", text: "Secure Online Payment" },
                { icon: "📱", text: "Real-time Tracking" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  
                  {/* Icon Container */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/90 text-gray-700 shadow-md">
                    <span className="text-xl">{feature.icon}</span>
                  </div>

                  {/* Text */}
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
 
          </div>
          
        </div>
   
      </div>
      <div className="mt-5">
      </div>
                      

    </div>
  );
}