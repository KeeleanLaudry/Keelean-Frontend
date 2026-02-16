"use client";

import React, { useMemo, useState } from "react";
import { X, CalendarDays, Clock, MapPin, Phone, User } from "lucide-react";

export default function BookingPage() {
  const services = [
    { id: "wash_fold", name: "Wash & Fold", rate: 60, unit: "kg" },
    { id: "wash_iron", name: "Wash & Iron", rate: 90, unit: "kg" },
    { id: "dry_clean", name: "Dry Cleaning", rate: 120, unit: "item" },
    { id: "steam_iron", name: "Steam Ironing", rate: 25, unit: "item" },
  ];

  const timeSlots = [
    "09:00 AM - 11:00 AM",
    "11:00 AM - 01:00 PM",
    "02:00 PM - 04:00 PM",
    "05:00 PM - 07:00 PM",
  ];

  const weights = [3, 5, 7, 10];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState(timeSlots[0]);

  const [weightKg, setWeightKg] = useState(5);
  const [items, setItems] = useState(5);

  const [express, setExpress] = useState(false);
  const [softener, setSoftener] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    landmark: "",
  });

  const [errors, setErrors] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  const qty = useMemo(() => {
    return selectedService.unit === "kg" ? weightKg : items;
  }, [selectedService, weightKg, items]);

  const basePrice = useMemo(() => {
    return selectedService.rate * qty;
  }, [selectedService, qty]);

  const addOnPrice = useMemo(() => {
    let add = 0;
    if (express) add += 50;
    if (softener) add += 20;
    return add;
  }, [express, softener]);

  const total = useMemo(() => basePrice + addOnPrice, [basePrice, addOnPrice]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter valid 10-digit mobile number";

    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!pickupDate) newErrors.pickupDate = "Pickup date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setShowConfirm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
        
          <h1 className="mt-10 text-4xl font-semibold text-gray-600">
            Book Your Laundry Pickup
          </h1>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Choose service, pickup time, and confirm your booking in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <SectionCard title="1. Select Service">
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => {
                  const active = selectedService.id === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s)}
                      className={`text-left p-5 rounded-2xl border transition shadow-sm hover:shadow-md ${
                        active
                          ? "border-gray-600 bg-gradient-to-t from-gray-400 to-gray-600 text-white"
                          : "border-gray-200 bg-white text-gray-800 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-lg">{s.name}</p>
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-semibold ${
                            active
                              ? "bg-white/20 text-white"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          ₹{s.rate}/{s.unit}
                        </span>
                      </div>
                      <p
                        className={`mt-2 text-sm ${
                          active ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        Premium cleaning with hygienic packing and quality check.
                      </p>
                    </button>
                  );
                })}
              </div>
            </SectionCard>

            {/* Pickup Date & Time */}
            <SectionCard title="2. Pickup Schedule">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <CalendarDays size={16} />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white"
                  />
                  {errors.pickupDate && (
                    <p className="text-sm text-gray-700 mt-2">
                      ⚠ {errors.pickupDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                    <Clock size={16} />
                    Pickup Time Slot
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </SectionCard>

            {/* Quantity */}
            <SectionCard title="3. Clothes Quantity">
              {selectedService.unit === "kg" ? (
                <div>
                  <p className="text-sm text-gray-600">
                    Select estimated weight (kg)
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {weights.map((w) => (
                      <button
                        key={w}
                        onClick={() => setWeightKg(w)}
                        className={`px-5 py-2 rounded-xl border font-semibold transition ${
                          weightKg === w
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {w} kg
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600">
                    Enter approximate number of items
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => setItems((p) => Math.max(1, p - 1))}
                      className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-bold"
                    >
                      -
                    </button>
                    <input
                      value={items}
                      onChange={(e) =>
                        setItems(Math.max(1, Number(e.target.value || 1)))
                      }
                      className="w-24 text-center px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900"
                      type="number"
                      min="1"
                    />
                    <button
                      onClick={() => setItems((p) => p + 1)}
                      className="w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Add-ons */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <AddOnCard
                  title="Express Delivery"
                  price="+₹50"
                  checked={express}
                  onChange={() => setExpress(!express)}
                />
                <AddOnCard
                  title="Fabric Softener"
                  price="+₹20"
                  checked={softener}
                  onChange={() => setSoftener(!softener)}
                />
              </div>
            </SectionCard>

            {/* Customer Details */}
            <SectionCard title="4. Customer Details">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Full Name"
                  icon={<User size={16} />}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Enter your name"
                />
                <InputField
                  label="Mobile Number"
                  icon={<Phone size={16} />}
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="Enter 10-digit number"
                />
              </div>

              <div className="mt-4">
                <InputField
                  label="Address"
                  icon={<MapPin size={16} />}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  error={errors.address}
                  placeholder="Flat, Street, Area"
                />
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <InputField
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                  placeholder="Enter city"
                />
                <InputField
                  label="Landmark (Optional)"
                  name="landmark"
                  value={form.landmark}
                  onChange={handleChange}
                  placeholder="Near temple / mall"
                />
              </div>
            </SectionCard>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-xl bg-gradient-to-t from-gray-800 to-gray-600 text-white font-semibold hover:bg-gray-800 transition"
              >
                Confirm Booking
              </button>
              <button
                onClick={() => {
                  setForm({
                    name: "",
                    phone: "",
                    address: "",
                    city: "",
                    landmark: "",
                  });
                  setPickupDate("");
                  setPickupTime(timeSlots[0]);
                  setWeightKg(5);
                  setItems(5);
                  setExpress(false);
                  setSoftener(false);
                  setErrors({});
                }}
                className="w-full py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-xl font-extrabold text-gray-900">
                  Booking Summary
                </h3>

                <div className="mt-6 space-y-4 text-sm">
                  <SummaryRow label="Service" value={selectedService.name} />
                  <SummaryRow
                    label="Pickup Date"
                    value={pickupDate ? pickupDate : "Not selected"}
                  />
                  <SummaryRow label="Time Slot" value={pickupTime} />
                  <SummaryRow
                    label="Quantity"
                    value={`${qty} ${selectedService.unit}`}
                  />
                </div>

                <div className="mt-6 border-t border-gray-200 pt-5 space-y-3 text-sm">
                  <SummaryRow label="Base Price" value={`₹${basePrice}`} />
                  <SummaryRow label="Add-ons" value={`₹${addOnPrice}`} />
                  <div className="flex items-center justify-between text-base font-extrabold text-gray-900 pt-2">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <p className="mt-5 text-xs text-gray-500 leading-relaxed">
                  Note: Final amount may vary slightly based on actual weight/items after pickup.
                </p>

                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-t from-slate-600 to-gray-800 text-white font-semibold hover:bg-gray-800 transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CONFIRM MODAL */}
        {showConfirm && (
          <ConfirmModal
            onClose={() => setShowConfirm(false)}
            summary={{
              service: selectedService.name,
              date: pickupDate,
              time: pickupTime,
              qty: `${qty} ${selectedService.unit}`,
              total,
              name: form.name,
              phone: form.phone,
            }}
          />
        )}
      </div>
    </div>
  );
}
function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-extrabold text-gray-700">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function InputField({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
        {icon && <span className="text-gray-700">{icon}</span>}
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white"
      />
      {error && <p className="text-sm text-gray-700 mt-2">⚠ {error}</p>}
    </div>
  );
}

function AddOnCard({ title, price, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`p-5 rounded-2xl border text-left transition shadow-sm ${
        checked
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold ">{title}</p>
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            checked ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          {price}
        </span>
      </div>
      <p className={`mt-2 text-sm ${checked ? "text-white/80" : "text-gray-600"}`}>
        Tap to {checked ? "remove" : "add"} this option.
      </p>
    </button>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-900 font-semibold text-right">{value}</span>
    </div>
  );
}

function ConfirmModal({ onClose, summary }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
        >
          <X size={18} className="text-gray-800" />
        </button>

        <h3 className="text-2xl font-extrabold text-gray-900">
          Booking Confirmed ✅
        </h3>
        <p className="mt-2 text-gray-600">
          Your pickup is scheduled successfully.
        </p>

        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3 text-sm">
          <SummaryRow label="Full Name" value={summary.name} />
          <SummaryRow label="Mobile" value={summary.phone} />
          <SummaryRow label="Service" value={summary.service} />
          <SummaryRow label="Pickup Date" value={summary.date} />
          <SummaryRow label="Time Slot" value={summary.time} />
          <SummaryRow label="Quantity" value={summary.qty} />
          <div className="pt-2 border-t border-gray-200 flex items-center justify-between font-extrabold text-gray-900">
            <span>Total</span>
            <span>₹{summary.total}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="w-full py-3 rounded-xl bg-gradient-to-tr from-gray-600 to-gray-800 text-white font-semibold hover:bg-gray-800 transition">
            Track Order
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
