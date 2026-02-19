import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (MOCK)
    setTimeout(() => {
      toast({
        title: 'Message Sent Successfully!',
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'Khushianand007@gmail.com',
      link: 'mailto:Khushianand007@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 7976343276',
      link: 'tel:+917976343276',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Safdarjung Enclave, New Delhi',
      link: null,
    },
  ];

  const services = [
    'Media Strategy & Relations',
    'Government Communications',
    'Celebrity PR & Brand Building',
    'Crisis Management',
    'Event Management & Launches',
    'Podcast Strategy & Production',
    'Digital PR & Social Media',
    'Content & Campaign Strategy',
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold playfair mb-6">
            Let's make your brand <span className="text-[#d4af37]">impossible to ignore</span>
          </h1>
          <p className="text-xl montserrat text-gray-300 leading-relaxed">
            Ready for visibility? Let's discuss how strategic PR can transform your brand.
          </p>
        </div>
      </section>

      {/* Contact Info & Services */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info & Services */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-bold playfair text-black mb-6">Contact <span className="text-[#d4af37]">Info</span></h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:border-[#d4af37] transition-all duration-300">
                      <div className="text-[#d4af37] flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="montserrat font-bold text-black mb-1">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="montserrat text-gray-700 hover:text-[#d4af37] transition-colors duration-200">
                            {info.value}
                          </a>
                        ) : (
                          <p className="montserrat text-gray-700">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-4xl font-bold playfair text-black mb-6">Available <span className="text-[#d4af37]">For</span></h2>
                <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8 rounded-2xl">
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                        <p className="montserrat text-white text-sm">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black mb-6">
            Available for <span className="text-[#d4af37]">Collaborations & PR Consulting</span>
          </h2>
          <p className="text-xl montserrat text-gray-600 mb-8">
            Let's transform your visibility together. From government communications to celebrity PR, I bring strategic thinking and proven results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/917976343276" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] text-white hover:bg-[#1ea952] px-8 py-6 text-lg montserrat font-semibold transition-all duration-300 transform hover:scale-105">
                WhatsApp Me
              </Button>
            </a>
            <a href="mailto:Khushianand007@gmail.com">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg montserrat font-semibold transition-all duration-300">
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
