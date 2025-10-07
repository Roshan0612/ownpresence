
import { Globe, Palette, Share2, Camera, Megaphone, BarChart3 } from 'lucide-react';
import React, { useEffect } from "react";
import { animateSection, animateCards } from "./animation";


  

  

const Services: React.FC = () => {
  useEffect(() => {
    animateSection(".services-title");
    animateSection(".services-subtitle", { start: "top 85%" });
    animateCards(".service-card");
  }, []);
  const services = [
    {
      icon: Globe,
      title: 'Website Creation',
      description: 'Custom, responsive websites that showcase your brand beautifully across all devices.',
      color: 'indigo'
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand packages including logos, color schemes, and visual guidelines.',
      color: 'teal'
    },
    {
      icon: Share2,
      title: 'Social Presence Setup',
      description: 'Professional social media profiles that connect and engage with your audience.',
      color: 'indigo'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'High-quality visual content that tells your story and attracts customers.',
      color: 'teal'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that boost visibility and drive meaningful engagement.',
      color: 'indigo'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Growth',
      description: 'Data-driven insights to optimize your presence and accelerate growth.',
      color: 'teal'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20" style={{ background: 'var(--dora-bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="services-badge inline-flex items-center px-4 py-2 glass rounded-full shadow-md mb-4">
            <span className="text-sm font-medium text-orange-400">Our Services</span>
          </div>
          <h2 className="services-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Everything You Need to{' '}
            <span className="text-orange-400 glow-text">
              Succeed Online
            </span>
          </h2>
          <p className="services-subtitle text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            From stunning websites to comprehensive digital strategies, we provide all the tools you need to establish and grow your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group glass p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
              >
                <div className={`inline-flex p-3 sm:p-4 rounded-xl mb-4 sm:mb-6 ${
                  service.color === 'indigo' 
                    ? 'bg-orange-400/20 text-orange-400' 
                    : 'bg-orange-400/20 text-orange-400'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;