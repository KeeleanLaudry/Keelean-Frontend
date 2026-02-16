import React from "react";
import {
  Truck,
  Clock,
  Droplets,
  Smartphone,
  Shield,
  Sparkles,
  CheckCircle,
  Leaf,
  Zap,
  Award,
  BarChart3,
  Cloud,
} from "lucide-react";

const WhyKeelean = () => {
  const features = [
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Free Pickup & Delivery",
      description: "Doorstep pickup & delivery with smart routing",
      stats: "98% On-Time",
      points: ["Same-day slots", "Live driver tracking", "Eco routes"],
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Fast Turnaround",
      description: "24–48 hour guaranteed delivery",
      stats: "99.7% SLA",
      points: ["Priority wash", "Live ETA", "Delay cover"],
    },
    {
      icon: <Droplets className="w-7 h-7"  />,
      title: "Premium Care",
      description: "Fabric-safe & skin-friendly wash",
      stats: "50+ Formulas",
      points: ["Hypoallergenic", "Baby-safe", "Low water use"],
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Smart Tracking",
      description: "Real-time updates on every stage",
      stats: "Live Updates",
      points: ["Wash alerts", "Digital receipts", "GPS tracking"],
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Secure Payments",
      description: "Encrypted & trusted payment system",
      stats: "256-bit",
      points: ["UPI & Cards", "Pay later", "Auto invoices"],
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "AI Quality Check",
      description: "Smart inspection for perfect results",
      stats: "1000+ Checks",
      points: ["Stain detect", "Fabric scan", "Cycle match"],
    },
  ];

  const techStats = [
    { icon: <Leaf />, label: "Carbon Neutral", value: "100%" },
    { icon: <Zap />, label: "Energy Efficient", value: "40% Less" },
    { icon: <Award />, label: "Customer Rating", value: "4.9/5" },
    { icon: <BarChart3 />, label: "System Uptime", value: "99.99%" },
  ];

  return (
<section className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 text-gray-700 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">
              THE KEELEAN DIFFERENCE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500">
              Keelean
            </span>
            ?
          </h2>

          <p className="text-lg text-gray-600">
            Smart laundry powered by technology, reliability, and care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-2xl border border-gray-200
                p-8 transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                bg-gradient-to-br from-gray-100 to-gray-200
              "
            >
             <div className="flex items-center gap-4 mb-4 ">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-700 to-gray-500
                 text-white transition-transform duration-300 group-hover:scale-110">
             {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            </div>
              <p className="text-gray-600 mb-5">
                {item.description}
              </p>
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-bold text-gray-800">
                  {item.stats}
                </span>
                <CheckCircle className="w-6 h-6 text-gray-600" />
              </div>
              <ul className="space-y-2">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="
          bg-gradient-to-r from-gray-900 to-gray-700
          rounded-3xl p-10 md:p-14 text-white mb-20
        ">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                <Cloud className="w-4 h-4" />
                <span className="text-sm font-medium">CLOUD POWERED</span>
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Smart Laundry Ecosystem
              </h3>

              <p className="text-gray-300 mb-6">
                AI-powered operations from pickup to delivery ensuring
                consistent quality every time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {techStats.map((t, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {t.icon}
                    <span className="text-xl font-bold">{t.value}</span>
                  </div>
                  <p className="text-sm text-gray-300">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
   

      </div>
    </section>
  );
};

export default WhyKeelean;
