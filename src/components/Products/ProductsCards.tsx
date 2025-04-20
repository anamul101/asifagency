import React from "react";
import Image from "next/image";
import productimg1 from "../../assets/images/products/productimg1.webp";
import productimg2 from "../../assets/images/products/productimg2.svg";
import productimg3 from "../../assets/images/products/productimg3.svg";
import productimg4 from "../../assets/images/products/productimg4.svg";
import productimg5 from "../../assets/images/products/productimg5.svg";
import productimg6 from "../../assets/images/products/productimg6.svg";
import productimg7 from "../../assets/images/products/productimg7.webp";

interface CustomerCard {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const CustomersSection = () => {
  const customers: CustomerCard[] = [
    {
      id: "time",
      title: "TIME AI",
      href: "/customers/time",
      imageSrc: productimg7.src,
      imageAlt: "time",
      description: "Disrupting the media industry with TIME AI.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    {
      id: "cohere",
      title: "Cohere",
      href: "/customers/cohere",
      imageSrc: productimg1.src,
      imageAlt: "cohere",
      description: "Cohere Enhances its Large Language Models with Scale.",
    },
    // Add all other customers following the same pattern
    // ...
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto w-[1280px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="group transition-all duration-300 hover:-translate-y-1 border border-white/10 rounded-lg  hover:border-white/30 hover:shadow-white/100 hiver:shadow-lg "
            >
              <a
                href={customer.href}
                className="block h-full overflow-hidden rounded-lg bg-black hover:shadow-xl transition-all duration-300"
              >
                {/* Image container with #111 background */}
                <div className="bg-[#111] p-6">
                  <div className="relative h-48 w-full mx-auto flex items-center justify-center">
                    <Image
                      src={customer.imageSrc}
                      alt={customer.imageAlt}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text container with transparent black overlay */}
                <div className="p-4 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {customer.title}
                  </h3>
                  <p className="mt-2 text-[18px] text-white line-clamp-2">
                    {customer.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
