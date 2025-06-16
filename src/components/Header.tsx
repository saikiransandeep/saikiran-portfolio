
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`} style={{ backgroundColor: scrolled ? 'rgba(75, 56, 50, 0.95)' : 'transparent' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold" style={{ color: '#F5F5DC' }}>
            SK<span style={{ color: '#D2691E' }}>.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 font-medium transition-all duration-300 group"
                style={{ color: '#F5F5DC' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D2691E'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#F5F5DC'}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundColor: '#D2691E' }}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center">
            <button
              className="md:hidden"
              style={{ color: '#F5F5DC' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden rounded-lg mt-2 py-4 animate-fade-in" style={{ backgroundColor: 'rgba(75, 56, 50, 0.95)' }}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-6 py-3 font-medium transition-all duration-300 hover:bg-black/20"
                style={{ color: '#F5F5DC' }}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
