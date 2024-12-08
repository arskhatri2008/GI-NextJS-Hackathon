import Image from "next/image";
import Dining from "@/Pictures/dining.png";
import Living from "@/Pictures/living.png";
import Bedroom from "@/Pictures/bedroom.png";

export default function SubHero() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="subText text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold">Browse The Range</h3>
        <p className="mt-2 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dining */}
        <div className="imgOne p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <Image
            src={Dining}
            width={282}
            height={200}
            alt="Dining"
            className="rounded-lg mb-4 object-cover"
          />
          <h6 className="text-lg font-semibold">Dining</h6>
        </div>

        {/* Living */}
        <div className="imgTow p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <Image
            src={Living}
            width={282}
            height={200}
            alt="Living"
            className="rounded-lg mb-4 object-cover"
          />
          <h6 className="text-lg font-semibold">Living</h6>
        </div>

        {/* Bedroom */}
        <div className="imgThree p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <Image
            src={Bedroom}
            width={282}
            height={200}
            alt="Bedroom"
            className="rounded-lg mb-4 object-cover"
          />
          <h6 className="text-lg font-semibold">Bedroom</h6>
        </div>
      </div>
    </div>
  );
}
