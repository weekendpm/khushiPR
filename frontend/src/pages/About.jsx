import React from 'react';
import { Award, Heart, Zap, Coffee, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  const philosophy = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Visibility Builds Power',
      description: 'In today\'s world, presence equals influence. Strategic visibility isn\'t vanity—it\'s currency.',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Narrative Controls Perception',
      description: 'The story you tell becomes the story they believe. Master the narrative, master the outcome.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Consistency Beats Virality',
      description: 'One viral moment fades. Consistent presence builds empires. Long game wins every time.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Relationships Drive Media',
      description: 'Behind every great story is a trusted relationship. Connections open doors data can\'t.',
    },
  ];

  const rapidFire = [
    { question: 'Dream Client', answer: 'Netflix India / Dior / PMO' },
    { question: 'Coffee per Day', answer: '5 (minimum)' },
    { question: 'Most Chaotic PR Day', answer: 'Launch event + crisis call + TV interview—same morning' },
    { question: 'Crisis Mode Song', answer: 'Eye of the Tiger (unironically)' },
    { question: 'Media House I Love', answer: 'The Hindu & NDTV' },
    { question: 'PR Superpower', answer: 'Getting coverage others said was impossible' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold playfair mb-6">
            Behind the <span className="text-[#d4af37]">Headlines</span>
          </h1>
          <p className="text-xl montserrat text-gray-300 leading-relaxed">
            The story of how chaos became my playground and visibility became my craft.
          </p>
        </div>
      </section>

      {/* Who is Khushi */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3727513/pexels-photo-3727513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Professional workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold playfair text-black mb-6">
                Who is <span className="text-[#d4af37]">Khushi?</span>
              </h2>
              <div className="space-y-4 montserrat text-gray-700 leading-relaxed text-lg">
                <p>
                  I didn't choose PR—it found me. What started as curiosity about media turned into an obsession with storytelling, headlines, and brand building.
                </p>
                <p>
                  From managing government communications for India's renewable energy sector to building celebrity brands and launching podcasts, I've learned that great PR isn't about spin—it's about truth, told powerfully.
                </p>
                <p>
                  I thrive in the chaos. The 3 AM crisis call. The last-minute press conference. The campaign launch that needs to be perfect. That's where I come alive.
                </p>
                <p>
                  Known for getting coverage, building relationships, and turning complex stories into compelling narratives that actually land.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Her Different */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black text-center mb-16">
            What Makes Me <span className="text-[#d4af37]">Different</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#d4af37] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <Briefcase className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold playfair text-black mb-3">Rare Combo</h3>
                  <p className="montserrat text-gray-700 leading-relaxed">
                    Government + celebrity experience isn't common. I speak both languages fluently—from ministry corridors to celebrity green rooms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#d4af37] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold playfair text-black mb-3">Strong Network</h3>
                  <p className="montserrat text-gray-700 leading-relaxed">
                    Years of building relationships across media houses, from The Hindu to regional channels. I know who to call and when.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#d4af37] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold playfair text-black mb-3">Execution Heavy</h3>
                  <p className="montserrat text-gray-700 leading-relaxed">
                    Strategy is nothing without execution. I don't just plan campaigns—I make them happen, on time, on point.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#d4af37] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold playfair text-black mb-3">Calm in Crisis</h3>
                  <p className="montserrat text-gray-700 leading-relaxed">
                    When everyone's panicking, I'm problem-solving. Crisis communication is chess, not checkers—and I play to win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black text-center mb-6">
            My PR <span className="text-[#d4af37]">Philosophy</span>
          </h2>
          <p className="text-center text-xl montserrat text-gray-600 mb-16 max-w-3xl mx-auto">
            Four principles that guide every campaign, every story, every win.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-[#d4af37] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-[#d4af37] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold playfair text-black mb-3">{item.title}</h3>
                <p className="montserrat text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapid Fire */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Coffee className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold playfair mb-4">
              Rapid <span className="text-[#d4af37]">Fire</span>
            </h2>
            <p className="text-lg montserrat text-gray-400">Getting to know the person behind the PR</p>
          </div>

          <div className="space-y-6">
            {rapidFire.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-lg border border-gray-800 hover:border-[#d4af37] transition-all duration-300"
              >
                <div className="montserrat font-semibold text-[#d4af37] mb-2 md:mb-0">{item.question}</div>
                <div className="montserrat text-white md:text-right">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Background */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold playfair text-black text-center mb-16">
            Education & <span className="text-[#d4af37]">Background</span>
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-[#d4af37] pl-6 py-4">
              <h3 className="text-2xl font-bold playfair text-black mb-2">Master of Journalism & Mass Communication</h3>
              <p className="montserrat text-gray-600">Chandigarh University</p>
            </div>

            <div className="border-l-4 border-[#d4af37] pl-6 py-4">
              <h3 className="text-2xl font-bold playfair text-black mb-2">Bachelor of Journalism & Mass Communication</h3>
              <p className="montserrat text-gray-600">Amity University</p>
            </div>

            <div className="border-l-4 border-[#d4af37] pl-6 py-4">
              <h3 className="text-2xl font-bold playfair text-black mb-2">Languages</h3>
              <p className="montserrat text-gray-600">English (Fluent) • Hindi (Fluent) • French (Beginner)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
