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
    <section id="about" className="py-16 sm:py-20" style={{ background: 'var(--dora-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="about-badge inline-flex items-center px-4 py-2 glass rounded-full shadow-md mb-4 sm:mb-6">
              <span className="text-sm font-medium text-orange-400">About Us</span>
            </div>

            <h2 className="about-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Your Success is{' '}
              <span className="text-orange-400 glow-text">
                Our Mission
              </span>
            </h2>

            <div className="about-content space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We founded OwnPresence because we believe every business deserves a stunning digital presence. Too many talented professionals struggle to showcase their work online, missing opportunities to grow and connect with their ideal clients.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Our team of designers, developers, and digital strategists work closely with makeup artists, studio owners, and small businesses to create authentic, conversion-focused online experiences that truly represent who they are.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                From the first consultation to the final launch, we're committed to delivering results that exceed expectations and fuel your business growth.
              </p>
            </div>
          </div>

          {/* Animated Model container */}
          <motion.div
            className="flex justify-center items-center h-full order-1 lg:order-2"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div
              className="w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-xl overflow-hidden shadow-2xl relative border border-gray-700"
              style={{ transform: window.innerWidth < 1024 ? 'translateX(0)' : 'translateX(40px)' }}
            >
              <spline-viewer
                url="https://prod.spline.design/U5ieuSkwudj4-xYd/scene.splinecode"
                style={{
                  transform: window.innerWidth < 768 ? 'scale(1) translateY(0) translateX(0)' : 'scale(1.2) translateY(57px) translateX(-40px)',
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

