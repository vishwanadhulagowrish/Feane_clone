import React from 'react';

import { ShoppingCart } from 'lucide-react'; 

const menuItems = [
  { name: 'Delicious Pizza', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$20', image: './public/i1.png' },
  { name: 'Delicious Burger', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$15', image: './public/i2.png' },
  { name: 'Delicious Pizza', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$17', image: './public/f3.png' },
  { name: 'Delicious Pasta', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$18', image: './public/f4.png' },
  { name: 'French Fries', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$10', image: './public/f5.png' },
{ name: 'Delicious Burger', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$15', image: './public/f6.png' },
  { name: 'Delicious Pizza', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$17', image: './public/f7.png' },
  { name: 'Delicious Pasta', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$18', image: './public/f8.png' },
  { name: 'French Fries', description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$10', image: './public/f9.png' },
];

const Menu = () => {
  return (
    <section id="menu" className="mb-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
             
              <div className="bg-gray-100 flex justify-center items-center p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-t-2xl">
                <h3 className="text-lg font-semibold text-left">{item.name}</h3>
                <p className="text-gray-300 text-sm mt-2 text-left">{item.description}</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">{item.price}</span>
                  <button className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-12">
          <a
            href="#"
            className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;