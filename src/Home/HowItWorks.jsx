import React from "react";
import {
  CalendarCheck,
  Truck,
  Droplets,
  ShieldCheck,
  Home,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <CalendarCheck size={26} />,
    title: "Schedule Pickup",
    desc: "Select a convenient pickup time and place your laundry order in seconds.",
  },
  {
    step: "02",
    icon: <Truck size={26} />,
    title: "We Collect Laundry",
    desc: "Our trained team safely collects clothes from your doorstep.",
  },
  {
    step: "03",
    icon: <Droplets size={26} />,
    title: "Professional Cleaning",
    desc: "Premium washing using fabric-safe, hygienic detergents.",
  },
  {
    step: "04",
    icon: <ShieldCheck size={26} />,
    title: "Quality Check",
    desc: "Each garment is inspected, pressed, and neatly packed.",
  },
  {
    step: "05",
    icon: <Home size={26} />,
    title: "Fast Delivery",
    desc: "Clean, fresh clothes delivered within 24–48 hours.",
  },
];

const HowKeeleanWorks = () => {
  return (
    <section >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Keelean Works
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A simple, transparent process designed for your convenience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                bg-white border border-gray-200 rounded-2xl
                p-6 text-center
                shadow-sm hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-gray-700 text-white text-xs font-semibold">
                STEP {item.step}
              </div>
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gray-100 text-gray-700 mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
       <div className="flex justify-center mt-6">
  <button className="group px-8 py-4 rounded-full bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-xl hover:-translate-y-1">
    Schedule Your Pickup →
  </button>
</div>


      </div>
    </section>
  );
};

export default HowKeeleanWorks;
