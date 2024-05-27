import React from 'react';
import Pet from '../../assets/app1.png';
import Dog from '../../assets/app2.png';
export default function AppDownloadsec() {
  return (
    <section className="bg-white">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-900 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Download 🐕‍🦺PetMedConnect</h2>
          <p className="mb-4">
            PetMedConnect is your go-to app for managing pet care appointments,connecting with veterinarians. Download the app now to provide the best care for your furry friends!
          </p>
          <p>
            Download Link:
          </p>
        </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <img className="w-full rounded-lg" src={Dog} alt="office content 1" />
        
        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={Pet} alt="office content 2" />
      </div>
    </div>
  </section>
  );
}
