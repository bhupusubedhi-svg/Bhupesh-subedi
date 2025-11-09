
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#00A651] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
