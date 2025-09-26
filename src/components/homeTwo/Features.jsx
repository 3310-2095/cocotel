// components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <img src="/icon-selection.png" alt="Wide Selection" className="mx-auto h-16 mb-4" /> {/* Replace icons */}
          <h3 className="text-lg font-semibold">Wide Selection of Travel Services</h3>
        </div>
        <div className="text-center">
          <img src="/icon-price.png" alt="Best Price" className="mx-auto h-16 mb-4" />
          <h3 className="text-lg font-semibold">Best Price Guarantee</h3>
        </div>
        <div className="text-center">
          <img src="/icon-booking.png" alt="Easy Booking" className="mx-auto h-16 mb-4" />
          <h3 className="text-lg font-semibold">Easy Booking & Cancellation</h3>
        </div>
        <div className="text-center">
          <img src="/icon-guides.png" alt="Guides" className="mx-auto h-16 mb-4" />
          <h3 className="text-lg font-semibold">Comprehensive Destination Guides</h3>
        </div>
      </div>
    </section>
  );
};
export default Features;