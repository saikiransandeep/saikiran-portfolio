
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Users, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with your actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Here you would typically send the data to your backend or email service
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://linkedin.com/in/sai-kiran-383474327',
      color: '#FF914D'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/saikiransandeep',
      color: '#FF914D'
    },
    {
      name: 'LeetCode',
      icon: <Code className="h-6 w-6" />,
      url: 'https://leetcode.com/u/saikiransandeep',
      color: '#FF914D'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Users className="h-6 w-6" />,
      url: 'https://geeksforgeeks.org/user/saikirans8k6c',
      color: '#FF914D'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {isSubmitting && <LoadingSpinner />}
      <section id="contact" className="py-20 transition-all duration-300" style={{ backgroundColor: '#4B3832' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#F5F5DC' }}>Get In Touch</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#FF914D' }}></div>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#F5F5DC' }}>
              Ready to collaborate or have a question? I'd love to hear from you. 
              Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#F5F5DC' }}>Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center transition-all duration-300 hover:scale-105">
                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#FF914D' }}>
                      <Mail className="h-6 w-6" style={{ color: '#F5F5DC' }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#F5F5DC' }}>Email</p>
                      <a 
                        href="mailto:saikiransandeep1@gmail.com"
                        className="transition-colors duration-300"
                        style={{ color: '#F5F5DC' }}
                        onMouseEnter={(e) => e.target.style.color = '#FF914D'}
                        onMouseLeave={(e) => e.target.style.color = '#F5F5DC'}
                      >
                        saikiransandeep1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center transition-all duration-300 hover:scale-105">
                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#FF914D' }}>
                      <Phone className="h-6 w-6" style={{ color: '#F5F5DC' }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#F5F5DC' }}>Phone</p>
                      <a 
                        href="tel:+919398150899"
                        className="transition-colors duration-300"
                        style={{ color: '#F5F5DC' }}
                        onMouseEnter={(e) => e.target.style.color = '#FF914D'}
                        onMouseLeave={(e) => e.target.style.color = '#F5F5DC'}
                      >
                        +91 93981 50899
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#F5F5DC' }}>Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleSocialClick(link.url)}
                      className="p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: '#F5F5DC', color: '#4B3832' }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = link.color;
                        e.target.style.color = '#F5F5DC';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#F5F5DC';
                        e.target.style.color = '#4B3832';
                      }}
                      title={`Visit my ${link.name} profile`}
                    >
                      {link.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-lg animate-slide-in-right" style={{ backgroundColor: '#F5F5DC' }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#3E2723' }}>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300"
                    style={{ 
                      backgroundColor: '#4B3832', 
                      borderColor: '#4B3832', 
                      color: '#F5F5DC',
                      '::placeholder': { color: '#F5F5DC' }
                    }}
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300"
                    style={{ 
                      backgroundColor: '#4B3832', 
                      borderColor: '#4B3832', 
                      color: '#F5F5DC'
                    }}
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none transition-all duration-300"
                    style={{ 
                      backgroundColor: '#4B3832', 
                      borderColor: '#4B3832', 
                      color: '#F5F5DC'
                    }}
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full py-3 rounded-lg transition-all duration-300 hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: '#FF914D', 
                    color: '#F5F5DC'
                  }}
                  onMouseEnter={(e) => {
                    if (!e.target.disabled) {
                      e.target.style.backgroundColor = '#4B3832';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!e.target.disabled) {
                      e.target.style.backgroundColor = '#FF914D';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 mr-2" style={{ borderColor: '#F5F5DC' }}></div>
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
    </>
  );
};

export default ContactSection;
