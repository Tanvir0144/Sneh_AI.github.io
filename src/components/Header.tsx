import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Sneh AI</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;