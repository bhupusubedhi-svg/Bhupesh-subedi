
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="bg-white py-16 text-center border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-[#003366]">Get in Touch</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">We're here to help. Reach out to us for a free consultation to discuss your business needs.</p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00A651] focus:border-[#00A651]" />
                </div>
                 <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00A651] focus:border-[#00A651]" />
                </div>
                 <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service of Interest</label>
                  <select id="service" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#00A651] focus:border-[#00A651]">
                    <option>Bookkeeping</option>
                    <option>Tax & VAT Filing</option>
                    <option>Stock Management</option>
                    <option>Internal Controls</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00A651] focus:border-[#00A651]"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#00A651] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">Contact Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Phone:</strong> +977 123 456 7890</li>
                    <li><strong>Email:</strong> contact@subedifinance.com</li>
                    <li><strong>Address:</strong> 123 Finance Street, Kathmandu, Nepal</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">Business Hours</h3>
                  <ul className="text-gray-700">
                    <li><strong>Sunday - Friday:</strong> 9:00 AM - 5:00 PM</li>
                    <li><strong>Saturday:</strong> Closed</li>
                  </ul>
                </div>
                <div className="h-64 lg:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.6910243818!2d85.2553938472915!3d27.708942323081987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0x42f2d9e075024474!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1680000000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kathmandu, Nepal Map"
                  ></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
