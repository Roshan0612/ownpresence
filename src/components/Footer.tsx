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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="#" className="text-3xl font-bold">
                Own<span className="text-orange-400 glow-text">Presence</span>
              </a>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Helping businesses create stunning digital experiences that captivate audiences and drive growth.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-2 fill-current" />
              <span>for your success</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} OwnPresence. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Transforming digital presence, one business at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;