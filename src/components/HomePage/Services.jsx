import React from 'react';

export default function Services() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">Services Offered</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-200 mb-2">General Veterinary</h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-200 mb-2">Veterinary Anesthesiologists</h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-200 mb-2">Veterinary Behaviorists</h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-200 mb-2">Veterinary Dentists</h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-200 mb-2">Veterinary Dermatologists</h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-200 mb-2">Veterinary Ophthalmologists</h3>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center text-gray-200 mb-2">Veterinary Nutritionists</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
