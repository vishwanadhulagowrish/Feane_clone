import React from 'react';

const BookTable = () => {
  return (
    <section id="book-table" className="py-20 flex items-center justify-center ">
      
      <div className="flex ">
        
        <form className="mt-12 max-w-lg ">
          <h2 className="text-3xl font-bold custom-dancing font-[cursive]">Book A Table</h2><br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <input type="text" placeholder="Your Name" className="p-3 border rounded-lg w-130 " /><br />
            <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg  w-130" /><br />
            <input type="email" placeholder="Your Email" className="p-3 border rounded-lg  w-130" /><br />
            <input type="number" placeholder="How many persons?" className="p-3 border rounded-lg  w-130" /><br />
            <input type="date" className="p-3 border rounded-lg  w-130" /><br />
              <button type="submit" className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600">
              Book Now
            </button>
          </div>
           </form>
      </div>
    <div className="p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.257830351653!2d78.2812896!3d17.311247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96e555555555%3A0x1234567890abcdef!2sSome%20Place!5e0!3m2!1sen!2sin!4v1692174184321!5m2!1sen!2sin"
            className="w-[600px] h-[350px] rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

    </section>
  );
};

export default BookTable;