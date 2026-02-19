import React from 'react';
import { Coffee, Clock, Briefcase, Phone, Zap, Heart, Smile, Star } from 'lucide-react';

const PRDiaries = () => {
  const diaryEntries = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'A Day in the Life of a PR Manager',
      color: 'from-pink-500 to-rose-500',
      content: [
        { time: '6:00 AM', activity: 'Morning media scan. Coffee #1. Check overnight news.' },
        { time: '7:30 AM', activity: 'Crisis email. Client panicking. Deep breath. Coffee #2.' },
        { time: '9:00 AM', activity: 'Media pitches. 15 emails. 8 WhatsApps. 3 calls. Still in pajamas.' },
        { time: '11:00 AM', activity: 'Zoom with CMD. Crafting speech for national event. Coffee #3.' },
        { time: '1:00 PM', activity: 'Lunch? What\'s that? Editing press release instead.' },
        { time: '3:00 PM', activity: 'Journalist call. Coverage confirmed. Victory dance (nobody saw).' },
        { time: '5:00 PM', activity: 'Event prep. Check guest list 47 times. Coffee #4.' },
        { time: '7:00 PM', activity: 'Press conference. Everything goes wrong. Everything gets fixed. Smile maintained.' },
        { time: '9:00 PM', activity: 'Media monitoring. Coverage secured. Client happy. Finally breathe.' },
        { time: '11:00 PM', activity: 'Tomorrow\'s crisis preview. Coffee #5. Sleep is optional.' },
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Most Chaotic Campaign Ever',
      color: 'from-orange-500 to-red-500',
      content: [
        { subtitle: 'The Setup', text: 'Book launch. 200 guests. 30 media. Celebrity chief guest. Tight deadline.' },
        { subtitle: 'The Crisis', text: 'Morning of event: Celebrity cancels. Venue floods. Caterer calls sick.' },
        { subtitle: 'The Fix', text: '2 hours. New celebrity confirmed. Backup venue arranged. Pizza ordered (fancy pizza, okay?).' },
        { subtitle: 'The Reality', text: 'Media showed up. Coverage happened. Client cried (happy tears). I cried too (exhaustion).' },
        { subtitle: 'The Lesson', text: 'PR = Plan A, B, C, D, and Z. Always have pizza guy\'s number.' },
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'What\'s Always in My PR Bag',
      color: 'from-blue-500 to-indigo-500',
      content: [
        { item: 'Laptop', reason: 'My entire life. Passwords. Contacts. Sanity.' },
        { item: 'Lipstick', reason: 'Camera-ready in 3 seconds. Non-negotiable.' },
        { item: 'Media List', reason: 'Printed backup. Yes, I\'m paranoid. Yes, it saved me twice.' },
        { item: 'Powerbank', reason: 'Dead phone = dead PR. Never again.' },
        { item: 'Business Cards', reason: 'Old school? Maybe. Effective? Always.' },
        { item: 'Chocolate', reason: 'For me. And stressed journalists. Bribes work.' },
        { item: 'Extra Phone Charger', reason: 'See: Powerbank. Backup for the backup.' },
        { item: 'Tiny Mirror', reason: 'Last-minute check before TV interviews.' },
      ],
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: 'Things Only PR People Understand',
      color: 'from-green-500 to-emerald-500',
      content: [
        { text: 'The panic when journalist says "Can I call you back?" (Will they? Won\'t they?)' },
        { text: 'Checking Google News every 5 minutes like it\'s social media.' },
        { text: 'That rush when coverage drops exactly as promised. Chef\'s kiss.' },
        { text: 'The art of saying "No comment" in 47 different polite ways.' },
        { text: 'Writing "Urgent" in subject lines knowing it\'ll be ignored anyway.' },
        { text: 'The 3 AM "should I send this email now or wait till morning?" debate.' },
        { text: 'Maintaining poker face when journalist says "interesting angle."' },
        { text: 'That feeling when client loves your pitch on first try. Rare. Beautiful.' },
        { text: 'Phone dying during crucial interview. Heart also dying.' },
        { text: 'The joy of finding a journalist who actually reads press releases.' },
      ],
    },
  ];

  const quickFacts = [
    { icon: <Coffee className="w-6 h-6" />, fact: 'Average coffees per day', answer: '5 (on calm days)' },
    { icon: <Phone className="w-6 h-6" />, fact: 'Calls per day', answer: '30+ (who needs silence?)' },
    { icon: <Zap className="w-6 h-6" />, fact: 'Crisis mode activation time', answer: '0.3 seconds' },
    { icon: <Heart className="w-6 h-6" />, fact: 'Favorite part of PR', answer: 'The impossible becoming possible' },
    { icon: <Star className="w-6 h-6" />, fact: 'PR superpower', answer: 'Staying calm when everyone\'s panicking' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Coffee className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
          <h1 className="text-6xl md:text-7xl font-bold playfair mb-6">
            PR <span className="text-[#d4af37]">Diaries</span>
          </h1>
          <p className="text-xl montserrat text-gray-300 leading-relaxed">
            The chaos, the wins, the coffee, and the truth behind the headlines.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickFacts.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-[#d4af37] hover:shadow-lg transition-all duration-300">
                <div className="text-[#d4af37] flex justify-center mb-3">{item.icon}</div>
                <p className="montserrat text-xs text-gray-600 mb-2 uppercase tracking-wide">{item.fact}</p>
                <p className="montserrat font-bold text-black text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diary Entries */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {diaryEntries.map((entry, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              {/* Header */}
              <div className={`bg-gradient-to-r ${entry.color} text-white p-8`}>
                <div className="flex items-center space-x-4">
                  {entry.icon}
                  <h2 className="text-3xl md:text-4xl font-bold playfair">{entry.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {entry.content.map((item, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    {item.time && (
                      <div className="flex items-start space-x-4 py-3 border-b border-gray-100 last:border-b-0">
                        <div className="font-bold montserrat text-[#d4af37] min-w-[80px]">{item.time}</div>
                        <div className="montserrat text-gray-700">{item.activity}</div>
                      </div>
                    )}

                    {item.subtitle && (
                      <div className="mb-3">
                        <h3 className="font-bold montserrat text-black text-lg mb-1">{item.subtitle}</h3>
                        <p className="montserrat text-gray-700">{item.text}</p>
                      </div>
                    )}

                    {item.item && (
                      <div className="flex items-start space-x-4 py-2">
                        <div className="font-bold montserrat text-[#d4af37] min-w-[150px]">{item.item}</div>
                        <div className="montserrat text-gray-700">{item.reason}</div>
                      </div>
                    )}

                    {item.text && !item.subtitle && (
                      <div className="py-2 border-l-4 border-[#d4af37] pl-4 mb-2">
                        <p className="montserrat text-gray-700">{item.text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Quote */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Star className="w-12 h-12 text-[#d4af37] mx-auto" />
          </div>
          <blockquote className="text-3xl md:text-4xl font-bold playfair mb-6 leading-relaxed">
            "PR isn't about perfection. It's about <span className="text-[#d4af37]">problem-solving under pressure</span> and making the impossible look effortless."
          </blockquote>
          <p className="montserrat text-gray-400 text-lg">- Khushi Mishra</p>
        </div>
      </section>
    </div>
  );
};

export default PRDiaries;
