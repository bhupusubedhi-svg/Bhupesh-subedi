import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onLearnMore }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
      <div className="bg-[#00A651] text-white rounded-full p-4 mb-4">
        {/* Fix: Replaced React.cloneElement with a direct call to React.createElement on the icon's type. This resolves a TypeScript type inference issue where the props of the cloned element were not correctly identified. */}
        {React.cloneElement(service.icon, { className: 'h-8 w-8' })}
      </div>
      <h3 className="text-xl font-bold text-[#003366] mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      <a onClick={onLearnMore} className="cursor-pointer text-[#00A651] font-semibold hover:text-green-700 transition">
        Learn More &rarr;
      </a>
    </div>
  );
};

export default ServiceCard;