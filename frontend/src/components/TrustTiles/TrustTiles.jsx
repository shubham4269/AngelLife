import React from 'react';

const items = [
  { title: 'Awards', value: '15+' },
  { title: 'Certified Students', value: '1000+' },
  { title: 'Placements', value: '90%' },
  { title: 'Expert Faculty', value: '50+' },
];

const TrustTiles = () => (
  <section className="py-8 bg-gray-50">
    <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {items.map((t, i) => (
        <div key={i} className="bg-white p-6 rounded shadow-sm text-center">
          <div className="text-2xl font-bold text-green-700">{t.value}</div>
          <div className="text-sm text-gray-600 mt-2">{t.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustTiles;
