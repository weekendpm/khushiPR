import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Award, Calendar, Building2, Star, Zap, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudiesData = {
    'seci-government-pr': {
      icon: <Building2 className="w-12 h-12" />,
      category: 'Government PR',
      title: 'SECI: Building National Visibility for India\'s Renewable Energy Leader',
      client: 'Solar Energy Corporation of India (SECI)',
      duration: 'May 2025 - Present',
      image: 'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      overview: 'Leading public relations and digital communications for SECI, a CPSE under the Ministry of New & Renewable Energy. Strategic partner to CMD and Directors, driving national media engagement and social media strategy to strengthen SECI\'s positioning as India\'s renewable energy champion.',
      challenge: {
        title: 'The Challenge',
        description: 'SECI needed to strengthen its national visibility, position leadership as thought leaders in renewable energy, and build credibility with policymakers, industry leaders, and the public. The organization required consistent media presence and compelling narratives that showcased their leadership in India\'s clean energy transition.',
      },
      approach: [
        {
          title: 'Strategic Communications Partnership',
          description: 'Served as strategic communications partner to CMD and Directors, crafting speeches, talking points, and high-stakes messaging for national platforms.',
        },
        {
          title: 'Media Relations & Press Strategy',
          description: 'Designed and executed comprehensive media strategy, building relationships with national publications and securing consistent coverage of SECI initiatives.',
        },
        {
          title: 'Social Media & Digital Presence',
          description: 'Developed and implemented social media strategy to amplify visibility, policy awareness, and public engagement across digital platforms.',
        },
        {
          title: 'Stakeholder Communications',
          description: 'Managed communications aligning policymakers, industry leaders, and public audiences with SECI\'s vision and achievements.',
        },
      ],
      results: [
        { metric: 'Enhanced digital presence', description: 'Strengthened social media engagement and follower growth' },
        { metric: 'Leadership positioning', description: 'CMD and Directors positioned as renewable energy thought leaders' },
        { metric: 'National visibility', description: 'Consistent media coverage across top-tier national publications' },
        { metric: 'Stakeholder alignment', description: 'Improved communication with policymakers and industry partners' },
      ],
    },
    'celebrity-pr': {
      icon: <Star className="w-12 h-12" />,
      category: 'Celebrity PR',
      title: 'Celebrity Brand Building: Dr. Jai Madaan & Dr. Hansaji Yogendre',
      client: 'Dr. Jai Madaan, Dr. Hansaji Yogendre',
      duration: '2023 - 2025',
      image: 'https://images.pexels.com/photos/7648046/pexels-photo-7648046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      overview: 'Managed integrated PR campaigns for high-profile personalities, designed strategic brand positioning, conceptualized and launched podcasts, and secured top-tier media placements to amplify reach and authority.',
      challenge: {
        title: 'The Challenge',
        description: 'Building and maintaining visibility for celebrity clients requires constant innovation, strategic media relationships, and understanding of both traditional and digital platforms. The challenge was to create compelling narratives, launch new content platforms like podcasts, and secure consistent top-tier media coverage.',
      },
      approach: [
        {
          title: 'Integrated PR Campaigns',
          description: 'Designed and executed campaigns across print, television, digital, and podcast platforms to maximize reach and engagement.',
        },
        {
          title: 'Podcast Launch & Production',
          description: 'Conceptualized and launched "Jaanemann with Dr. Jai Madaan" podcast, leading production, positioning, and promotional strategy.',
        },
        {
          title: 'Media Feature Strategy',
          description: 'Secured features in top-tier publications, TV interviews, and digital platforms, building consistent brand authority.',
        },
        {
          title: 'Brand Partnerships',
          description: 'Negotiated strategic collaborations and partnerships enhancing positioning and revenue opportunities.',
        },
      ],
      results: [
        { metric: 'Podcast launch success', description: '"Jaanemann with Dr. Jai Madaan" successfully launched and promoted' },
        { metric: 'Top-tier media features', description: 'Secured coverage in leading publications and TV channels' },
        { metric: 'Brand partnerships', description: 'Negotiated multiple strategic collaborations' },
        { metric: 'Increased visibility', description: 'Amplified reach and engagement across all platforms' },
      ],
    },
    'gomechanic': {
      icon: <Zap className="w-12 h-12" />,
      category: 'Brand Campaign',
      title: 'GoMechanic Campaign Strategy: Driving Brand Visibility',
      client: 'GoMechanic',
      duration: '2023 - 2025',
      image: 'https://images.pexels.com/photos/35428064/pexels-photo-35428064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      overview: 'Led comprehensive PR campaign for GoMechanic, positioning the brand as a trusted automotive service leader through strategic media relations, campaign execution, and brand collaborations.',
      challenge: {
        title: 'The Challenge',
        description: 'In a competitive automotive tech space, GoMechanic needed to stand out and build trust with consumers. The challenge was to position the brand as reliable, innovative, and customer-focused while securing meaningful media coverage.',
      },
      approach: [
        {
          title: 'Multi-Channel PR Campaign',
          description: 'Executed integrated campaign across traditional and digital media, focusing on brand story and customer trust.',
        },
        {
          title: 'Media Relations',
          description: 'Built relationships with business and automotive journalists, securing coverage in key publications.',
        },
        {
          title: 'Strategic Collaborations',
          description: 'Identified and negotiated brand partnerships to expand reach and credibility.',
        },
        {
          title: 'Campaign Execution',
          description: 'Managed end-to-end campaign execution including press releases, media kits, and event coordination.',
        },
      ],
      results: [
        { metric: 'Media coverage', description: 'Secured features in leading business publications' },
        { metric: 'Brand positioning', description: 'Strengthened trust and brand perception' },
        { metric: 'Strategic partnerships', description: 'Built collaborations enhancing market presence' },
        { metric: 'Campaign success', description: 'Delivered consistent messaging and positive press' },
      ],
    },
    'events-launches': {
      icon: <Sparkles className="w-12 h-12" />,
      category: 'Events & Launches',
      title: 'High-Profile Events: Book Launches, Press Conferences & Media Events',
      client: 'Multiple High-Profile Clients',
      duration: '2020 - Present',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      overview: 'Orchestrated 20+ high-profile events including book launches, press conferences, and media events, delivering strong turnout, coverage, and lasting media relationships.',
      challenge: {
        title: 'The Challenge',
        description: 'Creating memorable events that generate buzz, secure strong media attendance, and deliver positive coverage requires meticulous planning, media relationships, and flawless execution under pressure.',
      },
      approach: [
        {
          title: 'Event Conceptualization',
          description: 'Designed event concepts aligned with brand objectives and media appeal, from intimate book launches to large-scale conferences.',
        },
        {
          title: 'Media Outreach & Relations',
          description: 'Built targeted media lists, conducted personalized outreach, and ensured strong journalist attendance.',
        },
        {
          title: 'Event Execution',
          description: 'Managed logistics, vendor coordination, speaker preparation, and on-ground execution ensuring seamless experiences.',
        },
        {
          title: 'Post-Event Coverage',
          description: 'Coordinated follow-up coverage, distributed press materials, and maintained media momentum post-event.',
        },
      ],
      results: [
        { metric: '20+ events', description: 'Successfully executed high-profile launches and conferences' },
        { metric: 'Strong media turnout', description: 'Consistent journalist attendance and positive coverage' },
        { metric: 'Lasting relationships', description: 'Built enduring partnerships with media professionals' },
        { metric: 'Client satisfaction', description: 'Delivered events that exceeded expectations and objectives' },
      ],
    },
  };

  const caseStudy = caseStudiesData[id];

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold playfair mb-4">Case Study Not Found</h2>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <Link to="/case-studies" className="inline-flex items-center text-white bg-black/50 hover:bg-[#d4af37] px-4 py-2 rounded-lg montserrat font-semibold mb-4 transition-all duration-300 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="inline-block px-4 py-2 bg-[#d4af37] text-black text-xs montserrat font-bold uppercase tracking-wider rounded-full mb-4">
            {caseStudy.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold playfair text-white mb-4 leading-tight">{caseStudy.title}</h1>
          <div className="flex flex-wrap gap-6 montserrat text-gray-300">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5" />
              <span>{caseStudy.client}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{caseStudy.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start space-x-4 mb-6">
            <div className="text-[#d4af37]">{caseStudy.icon}</div>
            <div>
              <h2 className="text-3xl font-bold playfair text-black mb-4">Overview</h2>
              <p className="text-lg montserrat text-gray-700 leading-relaxed">{caseStudy.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start space-x-4">
            <Target className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold playfair text-black mb-4">{caseStudy.challenge.title}</h2>
              <p className="text-lg montserrat text-gray-700 leading-relaxed">{caseStudy.challenge.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start space-x-4 mb-8">
            <TrendingUp className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold playfair text-black">The Approach</h2>
          </div>

          <div className="space-y-8">
            {caseStudy.approach.map((item, index) => (
              <div key={index} className="border-l-4 border-[#d4af37] pl-6 py-2">
                <h3 className="text-xl font-bold playfair text-black mb-2">{item.title}</h3>
                <p className="montserrat text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start space-x-4 mb-8">
            <Award className="w-8 h-8 text-[#d4af37] flex-shrink-0 mt-1" />
            <h2 className="text-3xl font-bold playfair">The Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 rounded-lg border border-gray-800 hover:border-[#d4af37] transition-all duration-300">
                <h3 className="text-xl font-bold playfair text-[#d4af37] mb-2">{result.metric}</h3>
                <p className="montserrat text-gray-300 text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold playfair text-black mb-6">
            Ready for <span className="text-[#d4af37]">similar results?</span>
          </h2>
          <p className="text-xl montserrat text-gray-600 mb-8">Let's discuss how strategic PR can transform your brand visibility.</p>
          <Link to="/contact">
            <Button className="bg-black text-white hover:bg-[#d4af37] hover:text-black px-10 py-6 text-lg montserrat font-semibold transition-all duration-300">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
