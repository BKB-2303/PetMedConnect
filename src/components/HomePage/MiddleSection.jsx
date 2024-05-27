import React from 'react';
import Pet from '../../assets/PeT.png';
import Dog from '../../assets/Dog.png';

export default function MiddleSection() {
  return (
    <section className="bg-green-400">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-900 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Welcome to 🐕‍🦺PetMedConnect</h2>
          <p className="mb-4 text-black">Your trusted partner in pet healthcare. Seamlessly connecting pet owners with expert veterinary care. Simplifying appointment scheduling and medication management. Empowering pet owners to take control of their pets' health. Your pet's well-being is our top priority at PetMedConnect.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={Dog} alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src={Pet} alt="office content 2" />
        </div>
      </div>
    </section>
  );
}
