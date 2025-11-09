
import React from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Page, Service, Testimonial } from '../types';
import CalculatorIcon from '../components/icons/CalculatorIcon';
import ShieldIcon from '../components/icons/ShieldIcon';
import StockIcon from '../components/icons/StockIcon';
import TaxIcon from '../components/icons/TaxIcon';

const services: Service[] = [
  {
    icon: <CalculatorIcon />,
    title: 'Bookkeeping & Reporting',
    description: 'Accurate, timely bookkeeping and insightful financial reports to keep you in control.',
    details: { summary: '', benefits: [], pricing: '' } // Dummy data
  },
  {
    icon: <StockIcon />,
    title: 'Stock Management',
    description: 'Optimize your inventory, reduce costs, and improve cash flow with our expert stock management.',
    details: { summary: '', benefits: [], pricing: '' } // Dummy data
  },
  {
    icon: <ShieldIcon />,
    title: 'Internal Controls',
    description: 'Implement robust internal controls to safeguard your assets and prevent fraud.',
    details: { summary: '', benefits: [], pricing: '' } // Dummy data
  },
  {
    icon: <TaxIcon />,
    title: 'Tax & VAT Filing',
    description: 'Navigate complex tax regulations with ease and ensure full compliance.',
    details: { summary: '', benefits: [], pricing: '' } // Dummy data
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "Subedi Finance transformed our chaotic books into a streamlined system. We finally have clarity on our finances!",
    author: "Rohan K.",
    company: "Owner, Tech Innovators Pvt. Ltd."
  },
  {
    quote: "Their expertise in tax filing saved us a significant amount of money and stress. Highly recommended for any SME.",
    author: "Anjali S.",
    company: "Director, Creative Designs Co."
  },
  {
    quote: "The internal control systems they implemented gave us peace of mind and made us audit-ready. A truly invaluable service.",
    author: "Prakash T.",
    company: "CEO, Growth Ventures"
  },
];

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white py-20 md:py-32 flex items-center">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/1600/900?grayscale&blur=2" alt="Business professionals collaborating" className="w-full h-full object-cover opacity-20"/>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Empower Your SME with Seamless Financial Solutions</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">From Bookkeeping to Tax Compliance – We Handle It All</p>
          <Button onClick={() => navigateTo('contact')}>Get a Free Consultation</Button>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} onLearnMore={() => navigateTo('services')} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                 <h2 className="text-3xl font-bold text-[#003366] mb-4">Why Partner with Us?</h2>
                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">We are more than just accountants; we are your strategic financial partners.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#003366] mb-2">Expert SME Focus</h3>
                    <p className="text-gray-600">Our services are specifically tailored to the unique challenges and opportunities of Small and Medium Enterprises.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#003366] mb-2">Strong Internal Controls</h3>
                    <p className="text-gray-600">We build frameworks that reduce risk, safeguard assets, and ensure your business is secure and scalable.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-[#003366] mb-2">Effortless Compliance</h3>
                    <p className="text-gray-600">Stay ahead of deadlines and regulations with our proactive approach to tax, VAT, and financial reporting.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
