import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

const Hero: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section
      className="h-screen pt-0 flex items-center justify-center relative overflow-hidden"
      style={{ 
        background: 'var(--dora-bg-gradient)',
        color: 'var(--dora-text-primary)'
      }}
    >
      {/* Floating Bubbles - Reduced for mobile performance */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 30,
          particles: {
            number: { value: window.innerWidth < 768 ? 25 : 50 },
            size: { value: { min: 1, max: 4 } },
            color: { value: "#ffffff" },
            move: { enable: true, speed: 0.5, direction: "none", random: true, outModes: "out" },
            opacity: { value: 0.5, random: true },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: { value: 20 }
                }
              }
            }
          ]
        }}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />

      {/* Spline Viewer - Optimized for mobile */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'transparent',
          pointerEvents: 'auto',
          overflow: 'hidden',
          clipPath: 'inset(5% 5% 5% 5%)',
        }}
      >
        <spline-viewer
          hint
          loading-anim-type="spinner-small-dark"
          url="https://prod.spline.design/qAE8csal9Btg9Wdm/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            transform: window.innerWidth < 768 ? 'scale(1.5)' : 'scale(2)',
            transformOrigin: '50% 50%',
            margin: '0 auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            translate: window.innerWidth < 768 ? '-50% -50%' : '-37% -50%',
            background: 'transparent',
          }}
        ></spline-viewer>
      </div>
    </section>
  );
};

export default Hero;
