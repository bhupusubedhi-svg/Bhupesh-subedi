
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto text-center">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <p className="text-xl italic text-gray-700">"{testimonial.quote}"</p>
              <p className="mt-4 font-bold text-[#003366]">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-[#003366]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
