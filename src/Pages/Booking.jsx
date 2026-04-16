import React, { useState } from 'react';
import {
  ShoppingBag,
  Truck,
  Store,
  MapPin,
  Calendar,
  Clock,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  User,
  Phone,
  Mail,
  Home,
  Building,
  AlertCircle,
  CheckCircle,
  WashingMachine,
  Droplets,
Thermometer,
  Scissors,
  Shield,
  DollarSign,
  Tag,
  Plus,
  Minus,
  Trash2,
  Gift,
  Wallet
} from 'lucide-react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('pickup'); // pickup, dropoff
  const [deliveryMethod, setDeliveryMethod] = useState('delivery'); // delivery, self
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Cart Items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Casual Shirts", quantity: 3, price: 40, icon: "👕", category: "Top Wear" },
    { id: 2, name: "Formal Pants", quantity: 2, price: 50, icon: "👖", category: "Bottom Wear" },
    { id: 3, name: "T-Shirts", quantity: 4, price: 35, icon: "👚", category: "Casual Wear" },
    { id: 4, name: "Towels", quantity: 2, price: 40, icon: "🧣", category: "Accessories" }
  ]);

  // Service Options
  const serviceOptions = [
    { id: 'wash_iron', name: 'Wash & Iron', price: 40, icon: WashingMachine, description: 'Standard wash with professional ironing' },
    { id: 'dry_clean', name: 'Dry Clean', price: 80, icon: Droplets, description: 'Premium dry cleaning for delicate fabrics' },
    { id: 'express', name: 'Express Wash', price: 60, icon: Clock, description: '24-hour express service' },
    { id: 'steam_iron', name: 'Steam Iron Only',icon: Thermometer, price: 30, description: 'Professional steam ironing' }
  ];

  const [selectedServices, setSelectedServices] = useState(['wash_iron']);

  // Time Slots
  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '01:00 PM - 03:00 PM',
    '03:00 PM - 05:00 PM',
    '05:00 PM - 07:00 PM'
  ];

  // Addresses
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'home', name: 'Home', address: '123, Main Street, Andheri East, Mumbai - 400069', isDefault: true },
    { id: 2, type: 'office', name: 'Office', address: 'Tech Park, 5th Floor, BKC, Mumbai - 400051', isDefault: false }
  ]);

  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showAddressForm, setShowAddressForm] = useState(false);

  // Calculations
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceCharge = selectedServices.length * 20;
  const deliveryCharge = deliveryMethod === 'delivery' ? 50 : 0;
  const discount = promoApplied ? 50 : 0;
  const total = subtotal + serviceCharge + deliveryCharge - discount;

  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      {/* Service Type Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">How would you like to proceed?</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setServiceType('pickup')}
            className={`p-4 rounded-xl border-2 transition-all ${
              serviceType === 'pickup'
                ? 'border-gray-900 bg-gray-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Truck size={24} className={`mx-auto mb-2 ${serviceType === 'pickup' ? 'text-gray-900' : 'text-gray-400'}`} />
            <div className="font-semibold text-gray-900">Pickup from Home</div>
            <div className="text-xs text-gray-500 mt-1">We'll collect your clothes</div>
          </button>
          <button
            onClick={() => setServiceType('dropoff')}
            className={`p-4 rounded-xl border-2 transition-all ${
              serviceType === 'dropoff'
                ? 'border-gray-900 bg-gray-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Store size={24} className={`mx-auto mb-2 ${serviceType === 'dropoff' ? 'text-gray-900' : 'text-gray-400'}`} />
            <div className="font-semibold text-gray-900">Drop at Store</div>
            <div className="text-xs text-gray-500 mt-1">Visit our nearest store</div>
          </button>
        </div>
      </div>

      {/* Delivery Method */}
      {serviceType === 'pickup' && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery Option</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setDeliveryMethod('delivery')}
              className={`p-4 rounded-xl border-2 transition-all ${
                deliveryMethod === 'delivery'
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Truck size={24} className={`mx-auto mb-2 ${deliveryMethod === 'delivery' ? 'text-gray-900' : 'text-gray-400'}`} />
              <div className="font-semibold text-gray-900">Home Delivery</div>
              <div className="text-xs text-gray-500 mt-1">₹50 delivery fee</div>
            </button>
            <button
              onClick={() => setDeliveryMethod('self')}
              className={`p-4 rounded-xl border-2 transition-all ${
                deliveryMethod === 'self'
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Store size={24} className={`mx-auto mb-2 ${deliveryMethod === 'self' ? 'text-gray-900' : 'text-gray-400'}`} />
              <div className="font-semibold text-gray-900">Self Pickup</div>
              <div className="text-xs text-gray-500 mt-1">Free pickup from store</div>
            </button>
          </div>
        </div>
      )}

      {/* Address Selection */}
      {(serviceType === 'pickup' || (serviceType === 'dropoff' && deliveryMethod === 'delivery')) && (
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Select Address</h3>
            <button 
              onClick={() => setShowAddressForm(true)}
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              <Plus size={14} />
              Add New
            </button>
          </div>
          <div className="space-y-3">
            {addresses.map(addr => (
              <label key={addr.id} className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedAddress === addr.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === addr.id}
                    onChange={() => setSelectedAddress(addr.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {addr.type === 'home' ? <Home size={14} /> : <Building size={14} />}
                      <span className="font-semibold text-gray-900">{addr.name}</span>
                      {addr.isDefault && (
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">Default</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{addr.address}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Date & Time Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Schedule Pickup</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Time Slot</label>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Select time slot</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Special Instructions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions (Optional)</label>
        <textarea
          rows="3"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="Any specific instructions for handling clothes..."
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      {/* Order Items */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Items</h3>
        <div className="space-y-3">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="text-3xl">{item.icon}</div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-500">{item.category}</div>
                <div className="text-sm font-semibold text-gray-900 mt-1">₹{item.price}/pc</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-7 h-7 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  <Minus size={12} />
                </button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-7 h-7 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  <Plus size={12} />
                </button>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">₹{item.price * item.quantity}</div>
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 mt-1">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Services</h3>
        <div className="grid gap-3">
          {serviceOptions.map(service => {
            const isSelected = selectedServices.includes(service.id);
            return (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                  isSelected
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <service.icon size={20} className={isSelected ? 'text-gray-900' : 'text-gray-400'} />
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.description}</div>
                </div>
                <div className="font-semibold text-gray-900">₹{service.price}</div>
                {isSelected && <CheckCircle size={16} className="text-green-500" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Promo Code */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Tag size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setPromoApplied(!promoApplied)}
            className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
          >
            Apply
          </button>
        </div>
        {promoApplied && (
          <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
            <CheckCircle size={14} />
            Promo code applied! You saved ₹50
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      {/* Payment Methods */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Method</h3>
        <div className="space-y-3">
          {[
            { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
            { id: 'upi', name: 'UPI Payment', icon: Wallet },
            { id: 'cod', name: 'Cash on Delivery', icon: DollarSign }
          ].map(method => (
            <label key={method.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentMethod === method.id
                ? 'border-gray-900 bg-gray-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === method.id}
                onChange={() => setPaymentMethod(method.id)}
              />
              <method.icon size={20} className="text-gray-600" />
              <span className="font-medium text-gray-900">{method.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Service Charges</span>
            <span className="text-gray-900">₹{serviceCharge}</span>
          </div>
          {deliveryCharge > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="text-gray-900">₹{deliveryCharge}</span>
            </div>
          )}
          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-gray-200">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-gray-900 text-lg">₹{total}</span>
          </div>
        </div>
      </div>

      {/* Order Details Preview */}
      <div className="bg-blue-50 rounded-xl p-4">
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <AlertCircle size={16} />
          Order Details
        </h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Service Type:</span>
            <span className="text-gray-900 font-medium">
              {serviceType === 'pickup' ? 'Pickup from Home' : 'Drop at Store'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery:</span>
            <span className="text-gray-900 font-medium">
              {deliveryMethod === 'delivery' ? 'Home Delivery' : 'Self Pickup'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="text-gray-900 font-medium">{selectedDate || 'Not selected'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time Slot:</span>
            <span className="text-gray-900 font-medium">{selectedSlot || 'Not selected'}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const handlePlaceOrder = () => {
    alert('Order placed successfully! 🎉');
    // Redirect to orders page or show success message
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          <p className="text-sm text-gray-500 mt-1">Complete your order</p>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <button
                  onClick={() => setStep(num)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= num
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {num}
                </button>
                {num < 3 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    step > num ? 'bg-gray-900' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between max-w-md mx-auto mt-2 text-xs text-gray-500">
            <span>Details</span>
            <span>Services</span>
            <span>Payment</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Cart Summary</h3>
              
              <div className="space-y-3 max-h-64 overflow-auto mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.name} x{item.quantity}</span>
                    <span className="text-gray-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Services</span>
                  <span className="text-gray-900">₹{serviceCharge}</span>
                </div>
                {deliveryCharge > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery</span>
                    <span className="text-gray-900">₹{deliveryCharge}</span>
                  </div>
                )}
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Savings</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900 text-lg">₹{total}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
                  >
                    <ChevronLeft size={16} />
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="flex-1 px-4 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
                  >
                    Continue
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 px-4 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={16} />
                    Place Order
                  </button>
                )}
              </div>

              {/* Secure Payment Badge */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                  <Shield size={12} />
                  Secure Payment
                  <CreditCard size={12} />
                  100% Safe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;