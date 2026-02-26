import React, { useState } from "react";
import bgImage from "../assets/BgImages.JPG";

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "I love visiting Tumble on Tedder to have my laundry done. The cashless machines are super simple to use and I can enjoy a bite to eat at the restaurants on Tedder Avenue while I wait for my washing. Awesome idea!",
    author: "CHAS VAN BALEN",
  },
  {
    id: 2,
    text: "Easiest way to wash a houseful of quilts and bedding. Easy to use, quick service and they smell divine. I used the locker service and was sent a text when my washing was clean, dried and folded. I then picked up from the locker when I was ready. Fabulous ! Affordable ! Easy !",
    author: "KAREN CONLON",
  },
  {
    id: 3,
    text: "The owners have gone out of their way to make a spectacular looking laundromat and so clean and inviting. This place is amazing — extremely professional. Offering quality service.",
    author: "ANN-MARIE KEELING",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 px-4 md:py-28"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 border border-teal-700/30 text-teal-800 text-xs font-semibold tracking-wider rounded-full bg-white/50 backdrop-blur-sm">
            COMMUNITY LOVE
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mt-6 tracking-wide">
            what our customers say
          </h2>
          <div className="w-20 h-0.5 bg-teal-600/50 mx-auto mt-4"></div>
        </div>

        {/* Main testimonial card - elegant and minimal */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/40">
          {/* Decorative quote */}
          <div className="text-teal-600/20 text-8xl font-serif leading-none -mb-8">
            "
          </div>

          {/* Active testimonial with smooth fade transition */}
          <div className="relative min-h-[200px] flex flex-col">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ease-in-out ${
                  idx === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed font-light italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-center gap-3 mt-8">
                  <div className="h-px w-12 bg-teal-600/30"></div>
                  <span className="text-teal-800 font-medium tracking-wider text-sm md:text-base">
                    {testimonial.author}
                  </span>
                  <div className="h-px w-12 bg-teal-600/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

       <div className="flex justify-center mt-10">
  <div className="flex items-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`group relative`}
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <span
                  className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-teal-700 w-6"
                      : "bg-gray-400/50 group-hover:bg-gray-500/70"
                  }`}
                />
              </button>
            ))}
          </div>

    
        </div>

        {/* Subtle hint for mobile */}
        <p className="text-center text-gray-500 text-xs mt-6 md:hidden">
          tap the dots to navigate
        </p>
      </div>
    </section>
  );
}