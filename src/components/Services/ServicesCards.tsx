"use client";
import { useState } from 'react';
import services1 from '../../assets/images/services/services1.jpg';
import services2 from '../../assets/images/services/services2.jpg';
import services3 from '../../assets/images/services/services3.png';
import Image from 'next/image';

export const ServicesCards = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  // Sample event data - replace with your actual data
  const events = [
    {
      id: 1,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image:services1,
      url: "https://www.dprte.co.uk/",
      isUpcoming: true
    },
    {
      id: 2,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image: services2,
      url: "https://www.dprte.co.uk/",
      isUpcoming: true
    },
    {
      id: 3,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image: services3,
      url: "https://www.dprte.co.uk/",
      ispast: true
    },
    {
      id: 4,
      title: "DPRTE 2025 Conference",
      date: "March 26, 2025",
      category: "Conference",
      image: services1,
      url: "https://www.dprte.co.uk/",
      ispast: true
    },
    // Add other events with isUpcoming: true/false
  ];

  const filterEvents = (type: 'upcoming' | 'past') => {
    return events.filter(event => 
      type === 'upcoming' ? event.isUpcoming : !event.isUpcoming
    );
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Tabs Navigation */}
        <div className="relative mb-8 md:mb-12">
          <div className="flex space-x-8 border rounded-full border-white/10">
            <button 
              onClick={() => setActiveTab('upcoming')}
              className="group relative pb-4"
            >
              <span className={`text-lg font-medium ${
                activeTab === 'upcoming' 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white'
              } transition-colors`}>
                Upcoming
              </span>
              <span className={`absolute bottom-0 left-0 h-0.5 w-full ${
                activeTab === 'upcoming' ? 'bg-white' : 'bg-transparent'
              } transition-all duration-300`}></span>
            </button>
            
            <button 
              onClick={() => setActiveTab('past')}
              className="group relative pb-4"
            >
              <span className={`text-lg font-medium ${
                activeTab === 'past' 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white'
              } transition-colors`}>
                Past
              </span>
              <span className={`absolute bottom-0 left-0 h-0.5 w-full ${
                activeTab === 'past' ? 'bg-white' : 'bg-transparent'
              } transition-all duration-300`}></span>
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filterEvents(activeTab).map((event) => (
            <a
              key={event.id}
              href={event.url}
              className="group block overflow-hidden rounded-lg border border-white/10 bg-[#111] hover:border-white/20 transition-all duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
              </div>
              
              <div className="p-4 md:p-6">
                <p className="text-sm text-white/50 mb-2">{event.date}</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-white/10 rounded-full">
                  {event.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};