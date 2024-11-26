import { PiBowlFoodFill } from "react-icons/pi";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-amber-800 flex justify-between items-center h-16 px-6 sm:px-8 lg:px-12">
      {/* Icon */}
      <div>
        <PiBowlFoodFill size={40} />
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-row gap-4 font-bold text-lg sm:text-xl">
        <li>
          <Link href="/" className="text-white hover:text-amber-200 transition duration-200">Home</Link>
        </li>
        <li>
          <Link href="benefit" className="text-white hover:text-amber-200 transition duration-200">Benefits</Link>
        </li>
        <li>
          <Link href="contact" className="text-white hover:text-amber-200 transition duration-200">Contact</Link>
        </li>
      </ul>
    </div>
  );
}