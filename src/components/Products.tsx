// import Image from "next/image";

// export default function Products() {
//   interface Card {
//     name: string;
//     age: number;
//     description: string;
//     image: string;
//     price: string;
//   }

//   const data: Card[] = [
//     {
//       name: "Syltherine",
//       price: "Rp 2.500.000",
//       age: 30,
//       image: "/Syltherine.png",
//       description: "Stylish cafe chair",
//     },
//     {
//       name: "Leviosa",
//       price: "Rp 2.500.000",
//       age: 25,
//       image: "/Leviosa.png",
//       description: "Stylish cafe chair",
//     },
//     {
//       name: "Lolito",
//       price: "Rp 7.000.000",
//       age: 28,
//       image: "/Lolito.png",
//       description: "Luxury big sofa",
//     },
//     {
//       name: "Respira",
//       price: "Rp 500.000",
//       age: 28,
//       image: "/Respira.jpg  ",
//       description: "Outdoor bar table and stool",
//     },
//   ];

//   return (

//     <div className="py-12 bg-gray-100">
//       <h2 className="text-center text-4xl font-bold mb-8">Our Products</h2>

//       {/* Cards Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
//         {data.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
//           >
//             {/* Image */}
//             <div className="relative w-full h-60">
//               <Image
//                 src={card.image}
//                 alt={card.name}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-lg"
//               />
//             </div>

//             {/* Card Body */}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
//               <p className="text-gray-600 mt-2">{card.description}</p>
//               <h4 className="text-xl font-bold text-gray-900 mt-4">{card.price}</h4>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Show More Button */}
//       <div className="flex items-center justify-center mt-8">
//         <button className="text-[#B88E2F] px-6 py-2 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
//           Show More
//         </button>
//       </div>
//     </div>
//   );
// }


// New Design


import React from 'react';
import Link from 'next/link';

const Products = [
  {
    id: 1,
    name: "Stylish Sofa",
    price: "Rp 2.500.000",
    image: "/Syltherine.png",
    category: "Stylish cafe chair"
  },
  {
    id: 2,
    name: "Leviosa",
    price: "Rp 2.500.000",
    image: "/Leviosa.png",
    category: "Stylish cafe chair"
  },
  {
    id: 3,
    name: "Lolito",
    price: "Rp 7.000.000",
    image: "/Lolito.png",
    category: "Luxury big sofa"
  },
  {
    id: 4,
    name: "Respira",
    price: "Rp 500.000",
    image: "/Respira.jpg",
    category: "Outdoor bar table and stool"
  },
  {
    id: 5,
    name: "Grifo",
    price: "Rp 1.500.000",
    image: "/Grifo.png",
    category: "Night lamp"
  },
  {
    id: 6,
    name: "Muggo",
    price: "Rp 150.000",
    image: "/Muggo.png",
    category: "Small mug"
  },
  {
    id: 7,
    name: "Pingky",
    price: "Rp 7.000.000",
    image: "/Pingky.jpg",
    category: "Cute bed set"
  },
  {
    id: 8,
    name: "Potty",
    price: "Rp 500.000",
    image: "/Potty.jpg",
    category: "Minimalist flower pot"
  }
];

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ Product }:{Product:Product}) => (
  <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
    <div className="relative overflow-hidden">
      <img 
        src={Product.image} 
        alt={Product.name} 
        className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-3 rounded-full hover:bg-[#B88E2F] hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="bg-white p-3 rounded-full hover:bg-[#B88E2F] hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-[#3A3A3A]">{Product.name}</h3>
      <p className="text-[#B88E2F] font-medium">{Product.category}</p>
      <p className="text-[#666] font-bold">{Product.price}</p>
    </div>
  </div>
);

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">
          Our Products
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto">
          Explore our curated selection of premium furniture designs that combine style, comfort, and functionality.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {Products.map(product => (
          <ProductCard key={product.id} Product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link 
          href="/shop" 
          className="inline-block border-2 border-[#B88E2F] text-[#B88E2F] px-8 py-3 
          font-semibold hover:bg-[#B88E2F] hover:text-white transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;