
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "saikiransandeep004@gmail.com",
      action: "mailto:saikiransandeep004@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 90006 48147",
      action: "tel:+919000648147"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Telangana, India",
      action: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://linkedin.com/in/sai-kiran-383474327',
      color: '#D2691E'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/saikiransandeep',
      color: '#D2691E'
    },
    {
      name: 'LeetCode',
      icon: <Code className="h-5 w-5" />,
      url: 'https://leetcode.com/u/saikiransandeep',
      color: '#D2691E'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Users className="h-5 w-5" />,
      url: 'https://geeksforgeeks.org/user/saikirans8k6c',
      color: '#D2691E'
    }
  ];

  const handleContactClick = (action: string | null) => {
    if (action) {
      window.open(action, '_blank');
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#4B3832' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#F5F5DC' }}>Get In Touch</h2>
          <p className="text-lg mb-6" style={{ color: '#F5F5DC' }}>
            Let's discuss opportunities and collaborate on exciting projects
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#D2691E' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F5F5DC' }}>Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                      info.action ? 'cursor-pointer hover:scale-105' : ''
                    }`}
                    style={{ backgroundColor: '#F5F5DC' }}
                    onClick={() => handleContactClick(info.action)}
                  >
                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#D2691E' }}>
                      <div style={{ color: '#F5F5DC' }}>{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#3E2723' }}>{info.title}</h4>
                      <p style={{ color: '#4B3832' }}>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#F5F5DC' }}>Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(link.url)}
                    className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#D2691E', color: '#F5F5DC' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#F5F5DC'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D2691E'}
                    title={`Visit my ${link.name} profile`}
                  >
                    {link.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F5F5DC' }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: '#3E2723' }}>Ready to Start a Project?</h4>
              <p className="mb-4" style={{ color: '#4B3832' }}>
                I'm always excited to work on new challenges and innovative projects. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <Button 
                className="transition-all duration-300 hover:scale-105 text-white"
                style={{ backgroundColor: '#D2691E' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#B8621E'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D2691E'}
                onClick={() => handleContactClick('mailto:saikiransandeep004@gmail.com')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Start Conversation
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F5DC' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#3E2723' }}>Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'white',
                      color: '#3E2723',
                      focusRingColor: '#D2691E'
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: 'white',
                      color: '#3E2723'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'white',
                    color: '#3E2723'
                  }}
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#3E2723' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-vertical"
                  style={{ 
                    backgroundColor: 'white',
                    color: '#3E2723'
                  }}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 transition-all duration-300 hover:scale-105 text-white"
                style={{ backgroundColor: isSubmitting ? '#4B3832' : '#D2691E' }}
                onMouseEnter={(e) => {
                  if (!(e.target as HTMLButtonElement).disabled) {
                    (e.target as HTMLElement).style.backgroundColor = '#B8621E';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!(e.target as HTMLButtonElement).disabled) {
                    (e.target as HTMLElement).style.backgroundColor = '#D2691E';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
