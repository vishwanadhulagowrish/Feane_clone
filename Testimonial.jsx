import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Mike Hamell",
    role: "magna aliqua",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "../public/client2.jpg",
  },
  {
    id: 2,
    name: "Moana Michell",
    role: "magna aliqua",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "../public/client1.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-[cursive] mb-10 custom-dancing">What Says Our Customers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`transition-all duration-500 ${
              index === current ? "block" : "hidden md:block"
            }`}
          >
            <div className="bg-gray-900 text-white p-6 rounded-lg text-left">
              <p>{testimonial.feedback}</p>
              <h4 className="mt-4 font-bold">{testimonial.name}</h4>
              <span className="text-sm text-gray-300 ">{testimonial.role}</span>
            </div>

            <div className="flex justify-start mt-6 relative">
              <div className="relative">
                
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-yellow-500"></div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={prevSlide}
          className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;