import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EditableText from './EditableText';
import { GithubIcon, Instagram, LinkedinIcon, Mail, MapPin, Phone, Twitter } from 'lucide-react';

interface ContactProps {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

const Contact = ({ email, phone, location, socialLinks }: ContactProps) => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Add current date and time
    const currentDate = new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata'
    });

    // Create email data with date
    const emailData = {
      ...formData,
      sent_date: currentDate
    };

    emailjs.send(
      'Vivek_Portfolio',
      'template_jpsrifm',     // Replace with your Template ID
      emailData,
      'LfBkqKdDYBWHgXoP_'       // Replace with your Public Key
    )
    .then(() => {
      setSubmitStatus('Message sent successfully!');
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      setSubmitStatus('Failed to send message. Please try again.');
      console.error('Email error:', error);
      setIsSubmitting(false);
    });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'github':
        return <GithubIcon className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section-container bg-white">
      <EditableText
        initialValue="Get In Touch"
        as="h2"
        className="section-heading text-portfolio-navy"
      />
      
      <EditableText
        initialValue="Have a project in mind? Let's work together!"
        className="section-subheading"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="shadow-md animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-portfolio-teal mt-1" />
                <div>
                  <p className="text-sm text-portfolio-gray">Email</p>
                  <EditableText
                    initialValue={email}
                    className="font-medium"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-portfolio-teal mt-1" />
                <div>
                  <p className="text-sm text-portfolio-gray">Phone</p>
                  <EditableText
                    initialValue={phone}
                    className="font-medium"
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-portfolio-teal mt-1" />
                <div>
                  <p className="text-sm text-portfolio-gray">Location</p>
                  <EditableText
                    initialValue={location}
                    className="font-medium"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-portfolio-navy">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-portfolio-lightGray p-3 rounded-full text-portfolio-darkGray hover:bg-portfolio-teal hover:text-white transition-colors"
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-navy">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-portfolio-darkGray">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                    placeholder="Harish"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-portfolio-darkGray">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="reply_to"
                    type="email"
                    required
                    value={formData.reply_to}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                    placeholder="learnmore@gmail.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-portfolio-darkGray">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                  placeholder="Content"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-portfolio-darkGray">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-teal"
                  placeholder="Elaborate your content..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-portfolio-teal hover:bg-portfolio-teal/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus && (
                <p className={`text-center ${submitStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitStatus}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
