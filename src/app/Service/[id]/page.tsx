"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Service {
  id: number;
  title: string;
  date: string;
  category: string;
  image: any;
  url: string;
  isUpcoming?: boolean;
  ispast?: boolean;
}

export default function ServiceInfo({ params }: { params: { id: string } }) {
  const [service, setService] = useState<Service | null>(null);
  useEffect(() => {
    // Get from sessionStorage using the ID from URL params
    const data = sessionStorage.getItem(params.id);
    if (data) setService(JSON.parse(data));
  }, [params.id]);

  if (!service) return <div>Loading...</div>;

  return (
    <section className='bg-black text-white w-full overflow-hidden'>
      <div className="container w-[1280px] mx-auto py-20">
        <Link href="/Services" className="text-neutral-400 mb-4 no-underline">
          &lt;- Back to Services
        </Link>
        {/*Render service details here */}
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg">{service.date}</p>
        <p className="text-lg">{service.category}</p>
        
      </div>
    </section>
  )
}