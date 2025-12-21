import LogoSymbol from "../assets/logo-symbol.png";
import Brand from "../assets/Brand.png";

import { AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdCart, IoMdMenu } from "react-icons/io";
import { RxChevronDown } from "react-icons/rx";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
];

const bottomLinks = [
  { label: "All category", icon: IoMdMenu, hasDropDown: false },
  { label: "Hot offers" },
  { label: "Gift boxes" },
  { label: "Projects" },
  { label: "Menu item" },
  { label: "Help", hasDropDown: true },
];

const Navbar = () => {
  return (
    <header className= "bg-white w-full shadow-sm border-b border-gray-300 mt-10">
      {/* Top-Nav */}
      <div className="container flex items-center justify-between py-2">
        <div className="flex gap-2 items-center">
          <img src={LogoSymbol} alt="Logo" />
          <img src={Brand} alt="" />
        </div>

        <form className="h-10 w-[50%] flex items-center rounded-sm border-2 border-blue-600 bg-gray-50 -px-2 py-2 focus-within:border-blue-600 focus-within:bg-white ">
          
          <input
            className="w-full bg-transparent px-3 text-sm text-gray-800 outline-none border-none placeholder:text-gray-400"
            type="search"
            placeholder="Search"
            aria-label="Search products"
          />

          <select
            className="hidden h-10 min-w-[9rem] rounded-sm bg-white px-3 py-2 text-[12px] font-medium text-gray-900 border-2 border-blue-600 outline-none transition sm:block"
            defaultValue={categories[0]}
            aria-label="Select category"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <button
            type="submit"
            className="justify-self-end items-center gap-4 bg-blue-600 px-5 py-2 text-sm font-semibold text-white"
            aria-label="Search"
          >
            <span className="hidden sm:inline">Search</span>
          </button>
        </form>

        <nav>
          <NavItem icon={FaUser} label="Profile" />
          <NavItem icon={MdMessage} label="Message" />
          <NavItem icon={AiFillHeart} label="Orders" />
          <NavItem icon={IoMdCart} label="My Cart" />
        </nav>
      </div>
      {/* Bottom-nav */}
      <div className="border-t border-gray-300">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center py-2 gap-6 font-medium text-sm">
            {bottomLinks.map(({ label, icon: Icon, hasDropDown }) => (
              <button
                key={label}
                className="inline-flex items-center gap-2 py-1.5"
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                <span className="text-gray-800">{label}</span>
                {hasDropDown ? (
                  <RxChevronDown
                    className="h-4 w-4 text-gray-500"
                    aria-hidden
                  />
                ) : null}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-16">
            <button className="inline-flex items-center gap-2 font-medium text-sm">
              <span className="text-gray-800 font-medium text-sm">
                English, USD
              </span>
              <RxChevronDown />
            </button>
            <button className="inline-flex items-center gap-2 me-4">
              <span className="text-gray-800 font-medium text-sm">Ship to</span>
              <GermanFlag />
              <RxChevronDown />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// eslint-disable-next-line no-unused-vars
export function NavItem({ icon: Icon, label }) {
  return (
    <button className="text-gray-500 text-sm font-medium">
      <Icon className="h-5 w-5 ms-7" aria-hidden="true" />
      <p className="ms-5">{label}</p>
    </button>
  );
}

function GermanFlag() {
  return (
    <span className="flex flex-col h-4 w-6 overflow-hidden rounded-sm ring-1 ring-gray-200">
      <span className="w-full h-2 bg-black" aria-hidden />
      <span className="w-full h-2 bg-red-600" aria-hidden />
      <span className="w-full h-2 bg-yellow-400" aria-hidden />
      <span className="sr-only">Germany</span>
    </span>
  );
}

export default Navbar;
