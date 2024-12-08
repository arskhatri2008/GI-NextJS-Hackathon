import Image from "next/image";
import Logo from "@/Pictures/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="navbar bg-[#F8F8F8] p-4 md:p-6 lg:p-8">
      <div className="container flex items-center justify-between mx-auto">

        {/* Logo */}
        <div className="logo">
          <Image src={Logo} width={185} height={41} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="navbtns flex space-x-6 md:space-x-8 lg:space-x-12">
          <ul className="flex space-x-6 md:space-x-8 lg:space-x-12">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/shop">
              <li>Shop</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>

        {/* Icons */}
        <div className="icons flex space-x-4 md:space-x-6 lg:space-x-8">
          <MdPersonOutline className="text-xl md:text-2xl lg:text-3xl" />
          <CiSearch className="text-xl md:text-2xl lg:text-3xl" />
          <GoHeart className="text-xl md:text-2xl lg:text-3xl" />
          <AiOutlineShoppingCart className="text-xl md:text-2xl lg:text-3xl" />
        </div>
      </div>
    </header>
  );
}
