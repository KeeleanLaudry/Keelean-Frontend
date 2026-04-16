import React, { useState, useEffect } from "react";

export default function AddAddressModal({ setShowModal, onSave, editingAddress }) {
  const [formData, setFormData] = useState({
    label: "Home",
    name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (editingAddress) {
      setFormData({
        label: editingAddress.label,
        name: editingAddress.name,
        address: editingAddress.address,
        phone: editingAddress.phone || "",
      });
    }
  }, [editingAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address) {
      alert("Please fill all required fields");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
      <div className="bg-white rounded-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-800">
            {editingAddress ? "Edit Address" : "Add New Address"}
          </h3>
          <button onClick={() => setShowModal(false)} className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200">
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Address Label */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Address Label *</label>
            <div className="flex gap-2">
              {["Home", "Office", "Other"].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setFormData({ ...formData, label })}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    formData.label === label
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Address *</label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
              rows="3"
              placeholder="Enter complete address"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Enter phone number"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              {editingAddress ? "Save Changes" : "Add Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}