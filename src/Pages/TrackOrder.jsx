import React, { useState, useEffect } from "react";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  Search,
  MessageCircle,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

/* ================= MOCK DATA ================= */
const mockOrder = {
  orderId: "KLN123456",
  customer: "Sayali Bajirao Chavan",
  phone: "9623829878",
  status: "Picked Up",
  timeline: [
    { label: "Order Placed", time: "10:30 AM", done: true },
    { label: "Picked Up", time: "12:00 PM", done: true },
    { label: "In Transit", time: "", done: false },
    { label: "Delivered", time: "", done: false },
  ],
};

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [liveStatus, setLiveStatus] = useState(null);

  /* ================= TRACK BUTTON ================= */
  const handleTrack = () => {
    if (orderId === mockOrder.orderId) {
      setOrder(mockOrder);
      setError("");
    } else {
      setOrder(null);
      setError("Order not found. Please check your Order ID.");
    }
  };

  /* ================= WEBSOCKET (LIVE UPDATE) ================= */
  useEffect(() => {
    if (!order) return;

    const ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.orderId === order.orderId) {
        setLiveStatus(data.status);

        setOrder((prev) => ({
          ...prev,
          status: data.status,
          timeline: prev.timeline.map((step, index) => ({
            ...step,
            done: index < data.step,
          })),
        }));
      }
    };

    ws.onerror = () => console.error("WebSocket error");
    ws.onclose = () => console.log("WebSocket disconnected");

    return () => ws.close();
  }, [order]);

  /* ================= LINKS ================= */
  const trackingUrl = order
    ? `${window.location.origin}/track-order?orderId=${order.orderId}`
    : "";

  const whatsappMessage = order
    ? `📦 Keelean Order Tracking

Order ID: ${order.orderId}
Status: ${liveStatus || order.status}

Track here 👉 ${trackingUrl}`
    : "";

  const whatsappLink = `https://wa.me/91${order?.phone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gray-100 px-4 pt-24 pb-16">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Track Your Order
          </h1>
          <p className="text-gray-600">
            Enter your Order ID to check live status
          </p>
        </div>

        {/* SEARCH */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g. KLN123456)"
                className="w-full rounded-xl border border-gray-300 pl-10 px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <button
              onClick={handleTrack}
              className="rounded-xl bg-gray-900 text-white px-6 py-3
              font-medium hover:bg-gray-800 transition"
            >
              Track Order
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-3">{error}</p>
          )}
        </div>

        {/* ORDER DETAILS */}
        {order && (
          <div className="bg-white rounded-2xl shadow p-6 md:p-8 space-y-10">

            {/* INFO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-semibold text-gray-900">{order.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Customer</p>
                <p className="font-semibold text-gray-900">{order.customer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Live Status</p>
                <p className="font-semibold text-gray-900">
                  {liveStatus || order.status}
                </p>
              </div>
            </div>

            {/* TIMELINE */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Order Progress
              </h3>

              <div className="space-y-6">
                {order.timeline.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center
                        ${step.done ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-500"}
                      `}
                    >
                      {index === 0 && <Package size={18} />}
                      {index === 1 && <Clock size={18} />}
                      {index === 2 && <Truck size={18} />}
                      {index === 3 && <CheckCircle size={18} />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{step.label}</p>
                      {step.time && (
                        <p className="text-sm text-gray-500">{step.time}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t items-start">

  {/* WHATSAPP */}
  <div className="flex justify-start">
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
      bg-gray-900 text-white hover:bg-gray-800 transition text-sm w-fit"
    >
      <MessageCircle size={16} />
      Open WhatsApp
    </a>
  </div>

  {/* QR CODE */}
  <div className="flex justify-center">
    <QRCodeSVG
      value={trackingUrl}
      size={120}
      fgColor="#111827"
      bgColor="#ffffff"
    />
  </div>

</div>

          </div>
        )}
      </div>
    </section>
  );
}
