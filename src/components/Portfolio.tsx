import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Ratika Makeup Studio',
      category: 'Makeup Artist',
      description: 'Complete brand identity and website for a luxury makeup studio',
      image: 'https://res.cloudinary.com/dswa5docr/image/upload/v1758987704/Screenshot_2025-09-27_210527_zwhhcs.png',
      color: 'from-pink-500 to-purple-600'
    },
    {
      title: 'FitTrack ',
      category: 'Gym & Fitness',
      description: 'Gym Management System with member tracking and class scheduling',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-teal-600'
    },
    {
      title: 'Artisan Coffee Co.',
      category: 'Local Business',
      description: 'E-commerce platform with online ordering and delivery integration',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Creative Photography',
      category: 'Photography Studio',
      description: 'Portfolio website with gallery and client booking system',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20" style={{ background: 'var(--dora-bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="portfolio-badge inline-flex items-center px-4 py-2 glass rounded-full shadow-md mb-4">
            <span className="text-sm font-medium text-orange-400">Our Work</span>
          </div>
          <h2 className="portfolio-title text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories &{' '}
            <span className="text-orange-400 glow-text">
              Real Results
            </span>
          </h2>
          <p className="portfolio-subtitle text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses like yours transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
              
              <div className="absolute inset-0 flex items-end">
                <div className="p-8 text-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-4">{project.description}</p>
                   <a
                    href="https://www.ratikamakeup.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ></a>
                  <button className="inline-flex items-center text-white hover:text-gray-200 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="portfolio-cta inline-flex items-center px-8 py-4 bg-orange-400 hover:bg-orange-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;