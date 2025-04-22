import Link from 'next/link'
import React from 'react'

export default function ServiceInfo() {
  return (
    <section className='bg-black text-white w-full overflow-hidden'>
       <div className="container w-[1280px] mx-auto py-20">
       <Link href="/Services" className=" text-neutral-400 mb-4 no-underline">
          <div className="__wab_flex-container ρfc">
            <div>&lt;- Back to Services</div>
          </div>
        </Link>
       </div>
    </section>
  )
}
