import { PiSmileyMeltingFill } from "react-icons/pi";
import Image from "next/image";

export default function Pan() {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center m-6 p-6 bg-orange-300 space-y-6 lg:space-y-0 lg:space-x-10">
      {/* Text Section */}
      <div className="font-bold text-xl sm:text-2xl lg:text-3xl text-center lg:text-left">
        Hello! Welcome to my website!
        <br />
        <br />
        Step Into My Kitchen
        <div className="flex justify-center lg:justify-start mt-6">
          <PiSmileyMeltingFill size={100} />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
        <Image
          src="/panje.jpg"
          alt="Panjeri pic"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}