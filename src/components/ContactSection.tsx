
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
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
      url: '#',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: '#',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LeetCode',
      icon: <Code className="h-6 w-6" />,
      url: '#',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Users className="h-6 w-6" />,
      url: '#',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you. 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">saikiransandeep1@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-green-600/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 93981 50899</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`bg-gray-700 p-3 rounded-lg text-gray-400 ${link.color} transition-all duration-300 hover:scale-110`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
