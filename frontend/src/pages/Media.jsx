import React from 'react';
import { Newspaper, Tv, Radio, Globe, Award, TrendingUp } from 'lucide-react';

const Media = () => {
  const mediaCategories = [
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: 'Print Media',
      color: 'from-blue-500 to-blue-600',
      placements: [
        { outlet: 'The Hindu', description: 'Feature on SECI renewable energy initiatives' },
        { outlet: 'Business Standard', description: 'Interview with CMD on India\'s energy transition' },
        { outlet: 'Times of India', description: 'Celebrity profile features' },
        { outlet: 'Hindustan Times', description: 'Expert commentary on PR trends' },
        { outlet: 'Dainik Bhaskar', description: 'School Excellence Award coverage' },
      ],
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: 'Television',
      color: 'from-purple-500 to-purple-600',
      placements: [
        { outlet: 'NDTV', description: 'Live interviews and expert panels' },
        { outlet: 'Zee News', description: 'Celebrity brand features' },
        { outlet: 'Aaj Tak', description: 'Government initiative coverage' },
        { outlet: 'India Today', description: 'Thought leadership interviews' },
      ],
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Podcasts & Audio',
      color: 'from-green-500 to-green-600',
      placements: [
        { outlet: 'Jaanemann with Dr. Jai Madaan', description: 'Conceptualized, launched & promoted' },
        { outlet: 'Industry Podcasts', description: 'Multiple guest appearances and features' },
        { outlet: 'Radio Interviews', description: 'Secured slots for client thought leadership' },
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Media',
      color: 'from-amber-500 to-amber-600',
      placements: [
        { outlet: 'Scroll.in', description: 'Long-form features and analysis' },
        { outlet: 'The Wire', description: 'Policy and governance coverage' },
        { outlet: 'The Print', description: 'Expert commentary and insights' },
        { outlet: 'YourStory', description: 'Startup and brand stories' },
        { outlet: 'SheThePeople', description: 'Women in leadership features' },
      ],
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-10 h-10" />,
      title: '100+ Media Placements',
      description: 'Secured across top-tier national and regional outlets',
      color: 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Government PR Excellence',
      description: 'Leading communications for SECI under Ministry of Renewable Energy',
      color: 'bg-gradient-to-br from-blue-50 to-white border-blue-200',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Celebrity Brand Building',
      description: 'Successfully launched podcasts and amplified high-profile personalities',
      color: 'bg-gradient-to-br from-purple-50 to-white border-purple-200',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'High-Profile Event Management',
      description: '20+ successful book launches, press conferences, and media events',
      color: 'bg-gradient-to-br from-green-50 to-white border-green-200',
    },
  ];

  const campaigns = [
    {
      image: 'https://images.pexels.com/photos/15920138/pexels-photo-15920138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'SECI Leadership Positioning',
      description: 'National media strategy for renewable energy thought leadership',
    },
    {
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Press Conference Success',
      description: 'Orchestrated high-turnout media events with consistent positive coverage',
    },
    {
      image: 'https://images.pexels.com/photos/7648046/pexels-photo-7648046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Celebrity Feature Campaigns',
      description: 'Top-tier placements for Dr. Jai Madaan and Dr. Hansaji Yogendre',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold playfair mb-6">
            Media & <span className="text-[#d4af37]">Wins</span>
          </h1>
          <p className="text-xl montserrat text-gray-300 leading-relaxed">
            Building authority through strategic placements, consistent coverage, and powerful storytelling.
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black text-center mb-16">
            Key <span className="text-[#d4af37]">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${achievement.color} border p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-[#d4af37] mb-4">{achievement.icon}</div>
                <h3 className="text-2xl font-bold playfair text-black mb-3">{achievement.title}</h3>
                <p className="montserrat text-gray-700 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Placements */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black text-center mb-6">
            Media <span className="text-[#d4af37]">Placements</span>
          </h2>
          <p className="text-center text-xl montserrat text-gray-600 mb-16 max-w-3xl mx-auto">
            Secured coverage across India's most prestigious media outlets
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mediaCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex items-center space-x-3 mb-6 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-lg`}>
                  {category.icon}
                  <h3 className="text-xl font-bold montserrat">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.placements.map((placement, i) => (
                    <div key={i} className="border-l-4 border-[#d4af37] pl-4 py-2">
                      <h4 className="font-bold montserrat text-black mb-1">{placement.outlet}</h4>
                      <p className="montserrat text-sm text-gray-600">{placement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black text-center mb-16">
            Campaign <span className="text-[#d4af37]">Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold playfair mb-2">{campaign.title}</h3>
                  <p className="montserrat text-sm text-gray-200">{campaign.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-center mb-16">
            By the <span className="text-[#d4af37]">Numbers</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold playfair text-[#d4af37] mb-2">100+</div>
              <p className="montserrat text-gray-400 text-sm uppercase tracking-wide">Media Placements</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold playfair text-[#d4af37] mb-2">20+</div>
              <p className="montserrat text-gray-400 text-sm uppercase tracking-wide">Events Managed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold playfair text-[#d4af37] mb-2">5+</div>
              <p className="montserrat text-gray-400 text-sm uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold playfair text-[#d4af37] mb-2">50+</div>
              <p className="montserrat text-gray-400 text-sm uppercase tracking-wide">Media Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
