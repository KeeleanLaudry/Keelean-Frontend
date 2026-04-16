import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddAddressModal from "./AddAddressModal";

export default function AddressSection() {
  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      address: "Nigdi, Pimpri Chinchwad, Pune",
      name: "Sayali Chavan",
      phone: "+91 98765 43210",
      isDefault: true,
    },
    {
      id: 2,
      label: "Office",
      address: "Hinjewadi Phase 3, Pune",
      name: "Sayali Chavan",
      phone: "+91 98765 43210",
      isDefault: false,
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setShowModal(true);
  };

  const handleSave = (addressData) => {
    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id 
          ? { ...addressData, id: addr.id }
          : addr
      ));
    } else {
      // Add new address
      const newId = Math.max(...addresses.map(a => a.id), 0) + 1;
      setAddresses([...addresses, { ...addressData, id: newId, isDefault: false }]);
    }
    setShowModal(false);
    setEditingAddress(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-800">My Addresses</h2>
          <p className="text-sm font-medium text-gray-500 mt-1">Manage your delivery addresses</p>
        </div>
        <button
          onClick={() => {
            setEditingAddress(null);
            setShowModal(true);
          }}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-all flex items-center gap-2"
        >
          <span>+</span> Add New
        </button>
      </div>

      {/* Address List */}
      {addresses.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
          <div className="text-5xl mb-3">📍</div>
          <p className="text-gray-500 text-sm">No addresses added yet</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg"
          >
            Add Your First Address
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {addresses.map((addr) => (
            <AddressCard
              key={addr.id}
              data={addr}
              onEdit={() => handleEdit(addr)}
              onDelete={() => handleDelete(addr.id)}
              onSetDefault={() => handleSetDefault(addr.id)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <AddAddressModal
          setShowModal={setShowModal}
          onSave={handleSave}
          editingAddress={editingAddress}
        />
      )}
    </div>
  );
}