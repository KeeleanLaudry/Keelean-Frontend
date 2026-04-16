import React, { useState } from 'react';
import { 
  ShoppingBag, 
  ChevronRight, 
  Truck, 
  Package, 
  Clock, 
  CheckCircle,
  MapPin,
  Calendar,
  CreditCard,
  X,
  RefreshCw,
  Eye
} from 'lucide-react';

const MyOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const orders = [
    {
      id: "LDR-001",
      date: "15 Jan 2024",
      status: "delivered",
      total: "₹350",
      items: [
        { name: "Casual Shirt", quantity: 2, price: 40, icon: "👕", category: "Top Wear" },
        { name: "Formal Pant", quantity: 1, price: 50, icon: "👖", category: "Bottom Wear" },
        { name: "Cotton T-Shirt", quantity: 3, price: 35, icon: "👚", category: "Top Wear" }
      ],
      service: "Wash & Iron",
      address: "123, Main Street, Mumbai",
      deliveredOn: "18 Jan 2024",
     trackingHistory: [
        { status: "Order Confirmed", date: "15 Jan 2024", time: "10:30 AM", completed: true, description: "Your order has been confirmed" },
        { status: "Pickup Scheduled", date: "15 Jan 2024", time: "02:00 PM", completed: true, description: "Delivery partner assigned for pickup" },
        { status: "Items Picked Up", date: "16 Jan 2024", time: "11:00 AM", completed: true, description: "Clothes picked from your address" },
        { status: "Washing in Progress", date: "16 Jan 2024", time: "03:00 PM", completed: true, description: "Professional washing started" },
        { status: "Drying & Ironing", date: "17 Jan 2024", time: "10:00 AM", completed: true, description: "Drying and ironing in process" },
        { status: "Quality Check", date: "17 Jan 2024", time: "04:00 PM", completed: true, description: "Quality inspection completed" },
        { status: "Out for Delivery", date: "18 Jan 2024", time: "09:00 AM", completed: true, description: "On the way to your doorstep" },
        { status: "Delivered", date: "18 Jan 2024", time: "05:30 PM", completed: true, description: "Successfully delivered! Enjoy fresh clothes" }
      ]
    },
    {
      id: "LDR-002",
      date: "10 Jan 2024",
      status: "shipped",
      total: "₹280",
      items: [
        { name: "Denim Jeans", quantity: 2, price: 60, icon: "👖", category: "Bottom Wear" },
        { name: "Bath Towel", quantity: 2, price: 40, icon: "🧣", category: "Accessories" },
        { name: "Silk Shirt", quantity: 1, price: 40, icon: "👕", category: "Top Wear" }
      ],
      service: "Dry Clean",
      address: "123, Main Street, Mumbai",
      expectedBy: "20 Jan 2024",
      trackingHistory: [
        { status: "Order Confirmed", date: "10 Jan 2024", time: "09:15 AM", completed: true, description: "Dry clean order confirmed" },
        { status: "Pickup Scheduled", date: "10 Jan 2024", time: "01:00 PM", completed: true, description: "Pickup arranged" },
        { status: "Items Picked Up", date: "11 Jan 2024", time: "10:30 AM", completed: true, description: "Clothes picked for dry cleaning" },
        { status: "Dry Cleaning", date: "12 Jan 2024", time: "09:00 AM", completed: true, description: "Professional dry cleaning in progress" },
        { status: "Steam Press", date: "13 Jan 2024", time: "11:00 AM", completed: true, description: "Steam pressing completed" },
        { status: "Quality Check", date: "14 Jan 2024", time: "02:00 PM", completed: true, description: "Quality check passed" },
        { status: "Out for Delivery", date: "19 Jan 2024", time: "10:00 AM", completed: false, description: "Estimated delivery today" },
        { status: "Delivered", date: "20 Jan 2024", time: "Expected", completed: false, description: "Will be delivered soon" }
      ]
    },
    {
      id: "LDR-003",
      date: "05 Jan 2024",
      status: "processing",
      total: "₹210",
      items: [
        { name: "Designer Saree", quantity: 1, price: 80, icon: "👗", category: "Traditional" },
        { name: "Embroidered Kurta", quantity: 1, price: 70, icon: "👘", category: "Traditional" },
        { name: "Sports T-Shirt", quantity: 2, price: 35, icon: "👚", category: "Sportswear" }
      ],
      service: "Express Wash",
      address: "123, Main Street, Mumbai",
      expectedBy: "22 Jan 2024",
      trackingHistory: [
        { status: "Order Confirmed", date: "05 Jan 2024", time: "08:00 AM", completed: true, description: "Express order confirmed" },
        { status: "Pickup Scheduled", date: "05 Jan 2024", time: "11:30 AM", completed: true, description: "Priority pickup arranged" },
        { status: "Items Picked Up", date: "06 Jan 2024", time: "09:00 AM", completed: true, description: "Express pickup completed" },
        { status: "Express Washing", date: "06 Jan 2024", time: "02:00 PM", completed: true, description: "Express wash in progress" },
        { status: "Drying", date: "07 Jan 2024", time: "10:00 AM", completed: true, description: "Quick drying process" },
        { status: "Ironing & Folding", date: "07 Jan 2024", time: "03:00 PM", completed: true, description: "Professional ironing" },
        { status: "Quality Check", date: "08 Jan 2024", time: "11:00 AM", completed: false, description: "Quality inspection pending" },
        { status: "Out for Delivery", date: "21 Jan 2024", time: "Expected", completed: false, description: "Will be dispatched soon" },
        { status: "Delivered", date: "22 Jan 2024", time: "Expected", completed: false, description: "Expected delivery date" }
      ]
    }
  ];
  const getStatusConfig = (status) => {
    const configs = {
      delivered: { 
        bg: 'bg-gradient-to-r from-green-50 to-emerald-50', 
        color: 'text-emerald-700', 
        label: 'Delivered', 
        icon: CheckCircle,
        border: 'border-emerald-200'
      },
      shipped: { 
        bg: 'bg-gradient-to-r from-blue-50 to-indigo-50', 
        color: 'text-indigo-700', 
        label: 'Shipped', 
        icon: Truck,
        border: 'border-indigo-200'
      },
      processing: { 
        bg: 'bg-gradient-to-r from-orange-50 to-amber-50', 
        color: 'text-amber-700', 
        label: 'Processing', 
        icon: Clock,
        border: 'border-amber-200'
      }
    };
    return configs[status] || { 
      bg: 'bg-gradient-to-r from-gray-50 to-slate-50', 
      color: 'text-slate-700', 
      label: status, 
      icon: Package,
      border: 'border-slate-200'
    };
  };

  const filteredOrders = activeFilter === 'all' ? orders : orders.filter(o => o.status === activeFilter);

  const OrderCard = ({ order }) => {
    const status = getStatusConfig(order.status);
    const StatusIcon = status.icon;
    
    return (
      <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Card Header */}
        <div className="px-5 pt-4 pb-3 border-b border-gray-50">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-gray-400">ORDER #</span>
                <span className="font-mono font-bold text-gray-900 text-sm tracking-wide">{order.id}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={12} />
                <span>{order.date}</span>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${status.bg} ${status.color} border ${status.border}`}>
              <StatusIcon size={12} />
              {status.label}
            </div>
          </div>
        </div>

        {/* Items Preview */}
        <div className="px-5 py-3">
          <div className="flex flex-wrap gap-2">
            {order.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="bg-gray-50 px-2.5 py-1.5 rounded-lg text-xs text-gray-700 flex items-center gap-1.5 group-hover:bg-gray-100 transition">
                <span className="text-base">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-400">×{item.quantity}</span>
              </div>
            ))}
            {order.items.length > 3 && (
              <div className="bg-gray-50 px-2.5 py-1.5 rounded-lg text-xs text-gray-500">
                +{order.items.length - 3} more
              </div>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-5 py-3 bg-gradient-to-r from-gray-100 to-white border-t border-gray-50">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs text-gray-500 mb-0.5">Total Amount</div>
              <div className="text-lg font-bold text-gray-900">{order.total}</div>
              <div className="text-xs text-gray-400 mt-1">{order.service}</div>
            </div>
            <button 
              onClick={() => { setSelectedOrder(order); setShowModal(true); }} 
              className="px-4 py-2 bg-gray-900 text-white text-sm rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg shadow-gray-200"
            >
              <Eye size={14} />
              View Details
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                My Orders
              </h1>
              <p className="text-sm font-medium text-gray-500 mt-1">Track and manage your laundry orders</p>
            </div>
            <button className="px-4 py-2 bg-white rounded-xl text-gray-700 text-sm font-medium shadow-sm hover:shadow-md transition border border-gray-200 flex items-center gap-2">
              <RefreshCw size={14} />
              Refresh
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map(order => <OrderCard key={order.id} order={order} />)}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">
              <ShoppingBag size={48} className="text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">No orders found</p>
            <p className="text-sm text-gray-400 mt-1">Try changing the filter or place a new order</p>
          </div>
        )}

        {/* Order Details Modal */}
        {showModal && selectedOrder && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Order Details</div>
                  <div className="font-mono font-bold text-gray-900 text-lg">{selectedOrder.id}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{selectedOrder.date}</div>
                </div>
                <button onClick={() => setShowModal(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
                  <X size={16} />
                </button>
              </div>

              <div className="p-6">
                {/* Status Badge */}
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${getStatusConfig(selectedOrder.status).bg} ${getStatusConfig(selectedOrder.status).color} border ${getStatusConfig(selectedOrder.status).border}`}>
                    {React.createElement(getStatusConfig(selectedOrder.status).icon, { size: 16 })}
                    {getStatusConfig(selectedOrder.status).label}
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <Truck size={14} />
                    Order Timeline
                  </h3>
                  <div className="relative">
                    {selectedOrder.trackingHistory.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 mb-3 relative">
                        <div className="relative z-10">
                          <div className={`w-3 h-3 rounded-full mt-1.5 ${step.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                          {idx < selectedOrder.trackingHistory.length - 1 && (
                            <div className={`absolute top-5 left-1.5 w-0.5 h-8 ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`} />
                          )}
                        </div>
                        <div className="flex-1 pb-3">
                          <div className="text-sm font-medium text-gray-900">{step.status}</div>
                          <div className="text-xs text-gray-400">{step.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items List */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <ShoppingBag size={14} />
                    Items Summary
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                    {selectedOrder.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-0">
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">{item.name}</div>
                          <div className="text-xs text-gray-400">{item.category}</div>
                        </div>
                        <div className="text-xs text-gray-600">×{item.quantity}</div>
                        <div className="font-semibold text-gray-900 text-sm">₹{item.price * item.quantity}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs text-gray-400 mb-1">Service Type</div>
                    <div className="font-semibold text-gray-900">{selectedOrder.service}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                      <MapPin size={10} />
                      Delivery Address
                    </div>
                    <div className="font-medium text-gray-900 text-sm">{selectedOrder.address}</div>
                  </div>
                  {selectedOrder.deliveredOn && (
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400 mb-1">Delivered On</div>
                      <div className="font-semibold text-green-600">{selectedOrder.deliveredOn}</div>
                    </div>
                  )}
                  {selectedOrder.expectedBy && (
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400 mb-1">Expected By</div>
                      <div className="font-semibold text-orange-600">{selectedOrder.expectedBy}</div>
                    </div>
                  )}
                </div>

                {/* Payment Summary */}
                <div className="mb-6 bg-gradient-to-r from-gray-50 to-white rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                    <CreditCard size={14} />
                    Payment Summary
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="text-gray-900">{selectedOrder.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Delivery Charges</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="font-bold text-gray-900 text-lg">{selectedOrder.total}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition">
                    Close
                  </button>
                  <button className="flex-1 px-4 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2">
                    {selectedOrder.status === 'delivered' ? (
                      <>
                        <RefreshCw size={14} />
                        Reorder
                      </>
                    ) : (
                      <>
                        <Truck size={14} />
                        Track Order
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;