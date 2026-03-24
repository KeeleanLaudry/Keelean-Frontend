import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Truck, CreditCard, MapPin } from "lucide-react";

const Checkout = ({ cartItems, products }) => {
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [key, qty]) => {
      const [productId, variantType] = key.split("-");
      const product = products.find(p => p.id === parseInt(productId));
      const variant = product?.variants.find(v => v.type === variantType);

      return total + (variant?.price || 0) * qty;
    }, 0);
  };

  const getDeliveryFee = () => {
    const total = getTotalPrice();
    return total >= 499 ? 0 : 49;
  };

  const getGrandTotal = () => {
    return getTotalPrice() + getDeliveryFee();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white shadow"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <h1 className="text-xl font-bold text-gray-800">
          Checkout
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Address */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Delivery Address
          </h2>

          <input
            placeholder="Full Name"
            className="w-full mt-3 border p-2 rounded-lg"
          />

          <input
            placeholder="Phone Number"
            className="w-full mt-3 border p-2 rounded-lg"
          />

          <textarea
            placeholder="Delivery Address"
            className="w-full mt-3 border p-2 rounded-lg"
          />
        </div>

        {/* Order Summary */}
        <div className="bg-white p-5 rounded-xl shadow">

          <h2 className="font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          {Object.entries(cartItems).map(([key, qty]) => {
            const [productId, variantType] = key.split("-");
            const product = products.find(p => p.id === parseInt(productId));
            const variant = product?.variants.find(v => v.type === variantType);

            if (!product || !variant) return null;

            return (
              <div key={key} className="flex justify-between mb-2 text-sm">
                <span>
                  {product.name} ({variant.type}) × {qty}
                </span>

                <span>
                  ₹{variant.price * qty}
                </span>
              </div>
            );
          })}

          <div className="border-t mt-4 pt-3 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Items Total</span>
              <span>₹{getTotalPrice()}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>
                {getDeliveryFee() === 0 ? "FREE" : `₹${getDeliveryFee()}`}
              </span>
            </div>

            <div className="flex justify-between font-bold text-lg pt-2">
              <span>Total</span>
              <span>₹{getGrandTotal()}</span>
            </div>
          </div>

          <button
            className="mt-5 w-full bg-gray-900 text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
};

export default Checkout;