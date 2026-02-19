import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Star, Zap, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'seci-government-pr',
      icon: <Building2 className="w-8 h-8" />,
      category: 'Government PR',
      title: 'SECI: Building National Visibility',
      subtitle: 'Strategic communications for India\'s renewable energy leader',
      image: 'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      challenge: 'Strengthen visibility of India\'s Solar Energy Corporation',
      impact: [
        'Enhanced digital presence across national platforms',
        'Positioned leadership as renewable energy thought leaders',
        'Secured consistent media coverage for key initiatives',
      ],
      bgColor: 'from-blue-50 to-white',
      borderColor: 'border-blue-200',
    },
    {
      id: 'celebrity-pr',
      icon: <Star className="w-8 h-8" />,
      category: 'Celebrity PR',
      title: 'Celebrity Brand Building',
      subtitle: 'Dr. Jai Madaan & Dr. Hansaji Yogendre',
      image: 'https://images.pexels.com/photos/7648046/pexels-photo-7648046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      challenge: 'Launch podcast and amplify personal brands',
      impact: [
        'Successfully launched "Jaanemann with Dr. Jai Madaan" podcast',
        'Secured top-tier media features and interviews',
        'Built strategic partnerships for brand expansion',
      ],
      bgColor: 'from-purple-50 to-white',
      borderColor: 'border-purple-200',
    },
    {
      id: 'gomechanic',
      icon: <Zap className="w-8 h-8" />,
      category: 'Brand Campaign',
      title: 'GoMechanic Campaign Strategy',
      subtitle: 'Driving visibility for automotive tech brand',
      image: 'https://images.pexels.com/photos/35428064/pexels-photo-35428064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      challenge: 'Position GoMechanic as trusted automotive service leader',
      impact: [
        'Executed multi-channel PR campaign',
        'Secured media coverage across business publications',
        'Built strategic brand collaborations',
      ],
      bgColor: 'from-green-50 to-white',
      borderColor: 'border-green-200',
    },
    {
      id: 'events-launches',
      icon: <Sparkles className="w-8 h-8" />,
      category: 'Events & Launches',
      title: 'High-Profile Events',
      subtitle: 'Book launches, press conferences & media events',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      challenge: 'Orchestrate memorable events with strong media turnout',
      impact: [
        'Managed 20+ high-profile events and launches',
        'Consistent media coverage and positive press',
        'Built lasting relationships with media partners',
      ],
      bgColor: 'from-amber-50 to-white',
      borderColor: 'border-amber-200',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold playfair mb-6">
            Case <span className="text-[#d4af37]">Studies</span>
          </h1>
          <p className="text-xl montserrat text-gray-300 leading-relaxed">
            Real work. Real impact. Real results. From government corridors to celebrity headlines.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`group bg-gradient-to-br ${study.bgColor} border ${study.borderColor} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-6 left-6 text-[#d4af37] transform group-hover:scale-110 transition-transform duration-300">
                      {study.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-block px-4 py-2 bg-[#d4af37] text-black text-xs montserrat font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                      {study.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold playfair text-black mb-3">{study.title}</h2>
                    <p className="text-lg montserrat text-gray-600 mb-6">{study.subtitle}</p>

                    <div className="mb-6">
                      <h3 className="text-sm montserrat font-bold text-[#d4af37] uppercase tracking-wide mb-3">Challenge</h3>
                      <p className="montserrat text-gray-700">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-sm montserrat font-bold text-[#d4af37] uppercase tracking-wide mb-3">Impact</h3>
                      <ul className="space-y-2">
                        {study.impact.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-[#d4af37] mt-1">•</span>
                            <span className="montserrat text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={`/case-studies/${study.id}`}>
                      <Button className="bg-black text-white hover:bg-[#d4af37] hover:text-black montserrat font-semibold transition-all duration-300 group">
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black mb-6">
            Your brand could be the <span className="text-[#d4af37]">next success story</span>
          </h2>
          <p className="text-xl montserrat text-gray-600 mb-8">
            Let's discuss how strategic PR can transform your visibility.
          </p>
          <Link to="/contact">
            <Button className="bg-black text-white hover:bg-[#d4af37] hover:text-black px-10 py-6 text-lg montserrat font-semibold transition-all duration-300 transform hover:scale-105">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
