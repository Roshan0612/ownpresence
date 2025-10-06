import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Hero section animations
  const heroTl = gsap.timeline();
  
  heroTl.fromTo('.hero-badge', {
    opacity: 0,
    y: 30,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .fromTo('.hero-title', {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.4')
  .fromTo('.hero-subtitle', {
    opacity: 0,
    y: 30,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .fromTo('.hero-cta', {
    opacity: 0,
    y: 30,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4');

  // Section title animations
  const sectionElements = ['.services-badge', '.services-title', '.services-subtitle'];
  sectionElements.forEach((selector, index) => {
    gsap.fromTo(selector, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Portfolio section animations
  const portfolioElements = ['.portfolio-badge', '.portfolio-title', '.portfolio-subtitle'];
  portfolioElements.forEach((selector) => {
    gsap.fromTo(selector, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Testimonials section animations
  const testimonialElements = ['.testimonials-badge', '.testimonials-title', '.testimonials-subtitle'];
  testimonialElements.forEach((selector) => {
    gsap.fromTo(selector, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // About section animations
  const aboutElements = ['.about-badge', '.about-title', '.about-content', '.about-stats'];
  aboutElements.forEach((selector, index) => {
    gsap.fromTo(selector, {
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Contact section animations
  const contactElements = ['.contact-badge', '.contact-title', '.contact-subtitle', '.contact-info', '.contact-form'];
  contactElements.forEach((selector, index) => {
    gsap.fromTo(selector, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: index * 0.1,
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Service cards animation
  gsap.fromTo('.service-card', {
    opacity: 0,
    y: 50,
    scale: 0.9,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.service-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });

  // Portfolio cards animation
  gsap.fromTo('.portfolio-card', {
    opacity: 0,
    y: 50,
    scale: 0.95,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.portfolio-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });

  // Portfolio CTA animation
  gsap.fromTo('.portfolio-cta', {
    opacity: 0,
    y: 30,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.portfolio-cta',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Testimonial cards animation
  gsap.fromTo('.testimonial-card', {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.testimonial-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });

  // Client Reviews section animations
  gsap.fromTo('.reviews-title', {
    opacity: 0,
    y: 30,
  }, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.reviews-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.fromTo('.reviews-form', {
    opacity: 0,
    y: 40,
    scale: 0.98,
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    delay: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.reviews-form',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.fromTo('.review-card', {
    opacity: 0,
    y: 50,
    rotate: -1,
  }, {
    opacity: 1,
    y: 0,
    rotate: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.review-card',
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href') as string);
      if (target) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: target,
          ease: 'power3.inOut'
        });
      }
    });
  });
};