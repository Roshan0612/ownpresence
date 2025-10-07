import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
import { animateSection, animateCards } from './animation';

const Contact: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
  animateSection(".contact-title");
  animateSection(".contact-subtitle", { start: "top 85%" });
  animateCards(".contact-info > div");
  animateSection(".contact-form");
}, []);


  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    emailjs.send(
      'service_s7e028l',
      'template_6r6i1pf',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'rT1MhNCogQajIyr70'
    )
    .then(() => {
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setError('Failed to send message. Please try again.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20" style={{ background: 'var(--dora-bg-primary)' }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="contact-badge inline-flex items-center px-4 py-2 glass rounded-full shadow-md mb-4">
            <span className="text-sm font-medium text-orange-400">Get in Touch</span>
          </div>
          <h2 className="contact-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Transform{' '}
            <span className="text-orange-400 glow-text">
              Your Presence?
            </span>
          </h2>
          <p className="contact-subtitle text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Let's discuss your project and explore how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="contact-info" ref={infoRef}>
            <h3 className="text-2xl font-bold text-white mb-8">
              Let's Start a Conversation
            </h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">ownpresence@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">8551879434</p>
                  <p className="text-gray-300">9876543210</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">Located</p>
                  <p className="text-gray-300">Mumbai, India</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Instagram, href: '#', color: 'hover:text-pink-500' },
                  { Icon: Twitter, href: '#', color: 'hover:text-blue-500' },
                  { Icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 glass rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-300 ${social.color} transform hover:scale-110`}
                  >
                    <social.Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} ref={formRef} className="contact-form glass p-8 rounded-2xl shadow-lg border border-gray-700">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 text-white"
                  placeholder="Tell us about your project and goals..."
                  required
                ></textarea>
              </div>
              {success && <div className="text-green-600">{success}</div>}
              {error && <div className="text-red-600">{error}</div>}
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;