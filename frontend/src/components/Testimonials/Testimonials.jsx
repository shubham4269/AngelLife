import React, { useEffect, useState } from 'react';
import api from '../api/api';

const Testimonials = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api.get('/testimonials').then(r => setItems(r.data)).catch(() => {
      setItems([{ name:'Riya S.', text:'Amazing experience & support!' }, { name:'Ankit K.', text:'Great placements.' }]);
    });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {items.map((t,i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="text-gray-700">“{t.text}”</p>
              <div className="mt-4 font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
