import Image from "next/image";
import HeroImage from "@/Pictures/Hero.png";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="relative w-full">
        {/* Hero Image */}
        <Image
          src={HeroImage}
          width={1440}
          height={600}
          alt="Hero Image"
          className="w-full h-auto max-h-[90vh] object-cover"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-12 bg-transparent">
          <div className="relative p-6 bg-[#FFF3E3] bg-opacity-75 rounded-lg shadow-lg max-w-md mx-auto">
            <h6 className="text-xs md:text-base lg:text-lg font-semibold tracking-wider">
              New Arrival
            </h6>
            <h3 className="text-xl md:text-3xl lg:text-5xl font-bold mt-2 leading-snug">
              Discover Our <br /> New Collection
            </h3>
            <p className="text-xs md:text-sm lg:text-lg mb-6 mt-4 max-w-lg mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              dolore.
            </p>
            <Link href="/shop" className="mt-8 px-6 py-3 text-sm md:text-base lg:text-lg bg-[#B88E2F] hover:bg-[#9b7a26] text-white rounded-md transition">
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
