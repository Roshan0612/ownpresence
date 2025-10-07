import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Website Design', 'Brand Identity', 'Social Media', 'Digital Marketing'],
    Company: ['About Us', 'Portfolio', 'Contact', 'Blog'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  return (
    <footer className="text-white" style={{ background: 'var(--dora-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <a href="#" className="text-2xl sm:text-3xl font-bold">
                Own<span className="text-orange-400 glow-text">Presence</span>
              </a>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-md">
              Helping businesses create stunning digital experiences that captivate audiences and drive growth.
            </p>
            <div className="flex items-center text-gray-400 text-sm sm:text-base">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-2 fill-current" />
              <span>for your success</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="mt-6 sm:mt-0">
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} OwnPresence. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-0">
              Transforming digital presence, one business at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;