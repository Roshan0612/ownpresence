import React from 'react';
import { motion } from 'framer-motion'; // ✨ for animation
import MagnatoSphere from './MagnatoSphere';
import { animateSection } from './animation';
import { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
  animateSection(".about-title");
  animateSection(".about-content", { start: "top 85%" });
  animateSection(".about-model", { start: "top 80%" });
}, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="about-badge inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md mb-6">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About Us</span>
            </div>

            <h2 className="about-title text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your Success is{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-teal-600 dark:from-indigo-400 dark:to-teal-400 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>

            <div className="about-content space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We founded OwnPresence because we believe every business deserves a stunning digital presence. Too many talented professionals struggle to showcase their work online, missing opportunities to grow and connect with their ideal clients.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team of designers, developers, and digital strategists work closely with makeup artists, studio owners, and small businesses to create authentic, conversion-focused online experiences that truly represent who they are.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                From the first consultation to the final launch, we're committed to delivering results that exceed expectations and fuel your business growth.
              </p>
            </div>
          </div>

          {/* Animated Model container */}
          <motion.div
            className="flex justify-center items-center h-full"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div
              className="w-full h-[480px] rounded-xl overflow-hidden shadow-2xl relative border border-gray-200 dark:border-gray-700"
              style={{ transform: 'translateX(40px)' }} // slight right shift for framing
            >
              <spline-viewer
                url="https://prod.spline.design/U5ieuSkwudj4-xYd/scene.splinecode"
                style={{
                  transform: 'scale(1.2) translateY(57px) translateX(-40px)',
                  transformOrigin: 'center bottom',
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              ></spline-viewer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

