
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Users, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useTheme } from '@/contexts/ThemeContext';

const ContactSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
      color: theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-gray-700'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/saikiransandeep',
      color: theme === 'dark' ? 'hover:text-purple-400' : 'hover:text-gray-700'
    },
    {
      name: 'LeetCode',
      icon: <Code className="h-6 w-6" />,
      url: 'https://leetcode.com/u/saikiransandeep',
      color: theme === 'dark' ? 'hover:text-yellow-400' : 'hover:text-gray-700'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Users className="h-6 w-6" />,
      url: 'https://geeksforgeeks.org/user/saikirans8k6c',
      color: theme === 'dark' ? 'hover:text-green-400' : 'hover:text-gray-700'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {isSubmitting && <LoadingSpinner />}
      <section id="contact" className={
        theme === 'dark' 
          ? 'py-20 bg-gradient-to-br from-gray-800 to-gray-900' 
          : 'py-20 bg-gray-50'
      }>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Get In Touch</h2>
            <div className={`w-24 h-1 mx-auto rounded-full ${
              theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gray-900'
            }`}></div>
            <p className={`mt-4 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Ready to collaborate or have a question? I'd love to hear from you. 
              Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-semibold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg mr-4 ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <Mail className={`h-6 w-6 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Email</p>
                      <a 
                        href="mailto:saikiransandeep1@gmail.com"
                        className={`font-medium transition-colors duration-300 ${
                          theme === 'dark' 
                            ? 'text-white hover:text-blue-400' 
                            : 'text-gray-900 hover:text-gray-700'
                        }`}
                      >
                        saikiransandeep1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg mr-4 ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <Phone className={`h-6 w-6 ${
                        theme === 'dark' ? 'text-green-400' : 'text-gray-600'
                      }`} />
                    </div>
                    <div>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Phone</p>
                      <a 
                        href="tel:+919398150899"
                        className={`font-medium transition-colors duration-300 ${
                          theme === 'dark' 
                            ? 'text-white hover:text-green-400' 
                            : 'text-gray-900 hover:text-gray-700'
                        }`}
                      >
                        +91 93981 50899
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleSocialClick(link.url)}
                      className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        theme === 'dark' 
                          ? `bg-gray-700 text-gray-300 ${link.color} hover:bg-gray-600` 
                          : `bg-gray-100 text-gray-600 ${link.color} hover:bg-gray-200`
                      }`}
                      title={`Visit my ${link.name} profile`}
                    >
                      {link.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-lg border shadow-sm ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                    }
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
                    className={
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                    }
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
                    className={`resize-none ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                    }`}
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
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
    </>
  );
};

export default ContactSection;
