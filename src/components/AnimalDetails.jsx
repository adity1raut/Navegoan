import React from "react";

const AnimalDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Animal Details - Lion
      </h1>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Animal Image */}
        <img
          src="https://via.placeholder.com/800x400"
          alt="Lion"
          className="w-full h-64 object-cover"
        />

        {/* Animal Details */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            About the Lion
          </h2>
          <p className="text-gray-700 mb-4">
            The lion (Panthera leo) is a large cat of the genus Panthera, native
            to Africa and India. It is the second-largest living cat after the
            tiger. Lions are known for their majestic appearance and are often
            referred to as the "King of the Jungle."
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mb-4">Habitat</h2>
          <p className="text-gray-700 mb-4">
            Lions primarily live in savannas and grasslands, where they have
            access to prey and open spaces for hunting. They are found in
            sub-Saharan Africa and a small population exists in the Gir Forest of
            India.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mb-4">Diet</h2>
          <p className="text-gray-700 mb-4">
            Lions are carnivores and primarily hunt large mammals such as zebras,
            wildebeests, and buffaloes. They are also known to scavenge when the
            opportunity arises.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Behavior
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Lions live in groups called prides, which consist of related
              females, their offspring, and a small number of adult males.
            </li>
            <li>
              They are social animals and communicate through vocalizations,
              body language, and scent marking.
            </li>
            <li>
              Lions are most active during the night and early morning, spending
              much of the day resting.
            </li>
          </ul>

          {/* Fun Facts Section */}
          <div className="bg-green-50 p-6 rounded-lg mt-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Fun Facts About Lions
            </h2>
            <ul className="list-square list-inside text-gray-700">
              <li>
                Lions can run at speeds of up to 50 mph (80 km/h) but only for
                short distances.
              </li>
              <li>
                A lion's roar can be heard from up to 5 miles (8 km) away.
              </li>
              <li>
                Male lions have a distinctive mane, which protects their neck
                during fights.
              </li>
              <li>
                Lions spend about 16–20 hours a day resting or sleeping.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;