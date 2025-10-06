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
      style={{ background: '#021526' }}
    >
      {/* Floating Bubbles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: { min: 2, max: 6 } },
            color: { value: "#ffffff" },
            move: { enable: true, speed: 1, direction: "none", random: true, outModes: "out" },
            opacity: { value: 0.7, random: true },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />

      {/* Spline Viewer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'transparent',
          pointerEvents: 'auto',
          overflow: 'hidden',
          clipPath: 'inset(3% 3% 3% 3%)',
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
            transform: 'scale(2)',
            transformOrigin: '50% 50%',
            margin: '0 auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            translate: '-37% -50%',
            background: 'transparent',
          }}
        ></spline-viewer>
      </div>
    </section>
  );
};

export default Hero;
