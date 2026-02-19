import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Sparkles, Target, Users, Lightbulb, TrendingUp, Award } from 'lucide-react';

const Home = () => {
  const clients = [
    'Solar Energy Corporation of India (SECI)',
    'GoMechanic',
    'Dr. Jai Madaan',
    'Dr. Hansaji Yogendre',
    'Supreme Support Consultants',
    'Ventures Communications',
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Media Strategy',
      description: 'Crafting compelling narratives that capture headlines and build lasting brand authority.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Celebrity & Influencer Outreach',
      description: 'Building strategic partnerships with high-profile personalities for maximum impact.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Government Communications',
      description: 'Managing public relations for central government bodies with precision and visibility.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Crisis Management',
      description: 'Protecting reputations with swift, strategic communication during critical moments.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Campaign Launches',
      description: 'Orchestrating high-impact launches that generate buzz and drive engagement.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Podcast & Visibility Strategy',
      description: 'Creating platforms for thought leadership and expanding digital presence.',
    },
  ];

  const highlights = [
    { number: '100+', label: 'Media Placements Secured' },
    { number: '5+', label: 'Years of Experience' },
    { number: 'Govt', label: 'PR for SECI' },
    { number: 'Top-tier', label: 'Celebrity Brand Building' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://customer-assets.emergentagent.com/job_visibility-strategy/artifacts/far1xxmq_Screenshot%202026-02-20%20at%201.20.22%E2%80%AFAM.png"
            alt="Khushi Mishra"
            className="w-full h-full object-cover scale-105 animate-[scaleIn_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-left">
          <div className="max-w-4xl animate-[fadeInUp_1s_ease-out]">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[#d4af37] text-sm font-semibold montserrat tracking-wider uppercase">
                Public Relations Manager
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black playfair text-white mb-8 leading-[1.1]">
              PR that gets people{' '}
              <span className="relative inline-block">
                <span className="text-[#d4af37] relative z-10">talking.</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#d4af37]/20 -z-10"></span>
              </span>
            </h1>
            <p className="text-xl lg:text-2xl montserrat text-gray-200 mb-10 leading-relaxed font-light max-w-3xl">
              Public Relations Manager working across government, celebrity, and brand ecosystems to build influence, credibility, and media presence.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/case-studies">
                <Button className="bg-[#d4af37] text-black hover:bg-[#f4d03f] px-10 py-7 text-lg montserrat font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-lg">
                  View My Work
                </Button>
              </Link>
              <Link to="/media">
                <Button variant="outline" className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black px-10 py-7 text-lg montserrat font-bold transition-all duration-300 rounded-lg">
                  Media Wins
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#d4af37] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Clients Strip */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#d4af37] montserrat text-sm font-semibold tracking-widest mb-8 uppercase">
            Trusted By Leading Organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-center py-4 px-6 border border-gray-800 rounded-lg hover:border-[#d4af37] transition-all duration-300 transform hover:scale-105"
              >
                <p className="montserrat text-white font-medium text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold playfair text-black mb-4">
              What I <span className="text-[#d4af37]">Do</span>
            </h2>
            <p className="text-xl montserrat text-gray-600 max-w-2xl mx-auto">
              Transforming narratives into powerful media visibility and measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 border border-gray-200 rounded-lg hover:border-[#d4af37] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-[#d4af37] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold playfair text-black mb-3">{service.title}</h3>
                <p className="montserrat text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold playfair mb-4">
              Impact in <span className="text-[#d4af37]">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold playfair text-[#d4af37] mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.number}
                </div>
                <p className="montserrat text-gray-400 text-sm uppercase tracking-wide">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold playfair text-black mb-6">
            Let's make your brand <span className="text-[#d4af37]">impossible to ignore.</span>
          </h2>
          <p className="text-xl montserrat text-gray-600 mb-8">
            Ready to transform your visibility and build powerful narratives?
          </p>
          <Link to="/contact">
            <Button className="bg-black text-white hover:bg-[#d4af37] hover:text-black px-10 py-6 text-lg montserrat font-semibold transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
