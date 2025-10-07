import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkBaseClasses = 'text-white hover:text-orange-400 transition-colors duration-200';
  const brandTextColor = 'text-white';
  const brandAccentColor = 'text-orange-400 glow-text';
  const mobileMenuBg = 'glass';
  const mobileLinkColor = 'text-white';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg backdrop-blur-md' : 'bg-transparent shadow-none backdrop-blur-0'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className={`text-xl sm:text-2xl font-bold ${brandTextColor}`}>
              Own<span className={`${brandAccentColor}`}>Presence</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${linkBaseClasses} transition-colors duration-200 font-medium text-sm lg:text-base`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-orange-400/10 transition-colors duration-200 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="text-white text-xl">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 ${mobileMenuBg} rounded-lg mt-2 shadow-lg`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-3 ${mobileLinkColor} hover:opacity-80 transition-colors duration-200 text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;