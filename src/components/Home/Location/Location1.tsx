"use client";
import React from "react";

const locations = [
  {
    city: "Bala Cynwyd Office",
    address: "139 Montgomery Avenue, #110  Bala Cynwyd, PA 19004  ",
    number: "610-664-6200",
    fax: "610-664-6200",
  },
  {
    city: "Philadelphia Office",
    address: "1930 S. Broad Street, #26  Philadelphia, PA 19145 ",
    number: "267-507-2719",
    fax: "267-507-2720",
  },
  {
    city: "South Philadelphia Satellite Office",
    address: "2132 South 10th St. Philadelphia, PA 19148  ",
  },
];

const Locatiion1 = () => {
  return (
    <section className="py-20 px-8 bg-gray-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-500 mb-12">
        Our Locations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-7xl mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`p-8 bg-[#e2e6fc] rounded-xl shadow-lg flex flex-col items-center text-center relative transition-transform duration-300 hover:scale-105 ${
              index < locations.length - 1 ? "border-r border-t border-blue-300" : ""
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{location.city}</h3>
            <p className="text-gray-700 mb-4">{location.address}</p>
            {location.number && (
              <p className="text-gray-800 mb-2">
                Phone: <span className="font-semibold">{location.number}</span>
              </p>
            )}
            {location.fax && (
              <p className="text-gray-600">
                Fax: <span className="font-semibold">{location.fax}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locatiion1;
