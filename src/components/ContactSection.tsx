
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
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/saikiransandeep',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LeetCode',
      icon: <Code className="h-6 w-6" />,
      url: 'https://leetcode.com/u/saikiransandeep',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'GeeksforGeeks',
      icon: <Users className="h-6 w-6" />,
      url: 'https://geeksforgeeks.org/user/saikirans8k6c',
      color: 'hover:text-green-500'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {isSubmitting && <LoadingSpinner />}
      <section id="contact" className="py-20 bg-muted transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--pastel-blue-foreground))] to-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to collaborate or have a question? I'd love to hear from you. 
              Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center transition-all duration-300 hover:scale-105">
                    <div className="bg-[hsl(var(--pastel-blue))] p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-[hsl(var(--pastel-blue-foreground))]" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Email</p>
                      <a 
                        href="mailto:saikiransandeep1@gmail.com"
                        className="text-foreground hover:text-[hsl(var(--pastel-blue-foreground))] transition-colors duration-300"
                      >
                        saikiransandeep1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center transition-all duration-300 hover:scale-105">
                    <div className="bg-muted p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Phone</p>
                      <a 
                        href="tel:+919398150899"
                        className="text-foreground hover:text-primary transition-colors duration-300"
                      >
                        +91 93981 50899
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleSocialClick(link.url)}
                      className={`bg-card p-3 rounded-lg text-muted-foreground ${link.color} transition-all duration-300 hover:scale-110 border border-border`}
                      style={{ boxShadow: 'var(--soft-shadow)' }}
                      title={`Visit my ${link.name} profile`}
                    >
                      {link.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg animate-slide-in-right border border-border" style={{ boxShadow: 'var(--card-shadow)' }}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border text-foreground placeholder-muted-foreground focus:border-[hsl(var(--pastel-blue-foreground))] transition-all duration-300"
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
                    className="bg-background border-border text-foreground placeholder-muted-foreground focus:border-[hsl(var(--pastel-blue-foreground))] transition-all duration-300"
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
                    className="bg-background border-border text-foreground placeholder-muted-foreground focus:border-[hsl(var(--pastel-blue-foreground))] resize-none transition-all duration-300"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-[hsl(var(--pastel-blue-foreground))] hover:bg-[hsl(var(--pastel-blue-foreground))]/90 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: 'var(--soft-shadow)' }}
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
