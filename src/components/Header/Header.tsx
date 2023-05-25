import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/elif_tech_logo.jpg";
export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Image className="w-8 h-8 mr-2" src={logo} alt="ElifTech Logo" />
          <span className="text-lg font-semibold">ElifTech Delivery</span>
        </div>
        <div className="flex items-center">
          <Link href="/shop" className="text-white hover:text-gray-300 mx-2">
            Shot
          </Link>
          <Link
            href="/shop-cart"
            className="text-white hover:text-gray-300 mx-2"
          >
            Shop Cart
          </Link>
        </div>
      </div>
    </header>
  );
};
