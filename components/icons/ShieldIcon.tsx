
import React from 'react';

const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318 2.659a12.02 12.02 0 001.364-1.364L12 16l2.318 2.318a12.02 12.02 0 001.364 1.364l5.318-2.659A12.02 12.02 0 0021 8.944a11.955 11.955 0 01-2.382-3.016z" />
  </svg>
);

export default ShieldIcon;
