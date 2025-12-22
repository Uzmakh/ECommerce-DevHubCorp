import LogoSymbol from "../assets/logo-symbol.png";
import Brand from "../assets/Brand.png";

import { AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdCart, IoMdMenu } from "react-icons/io";
import { RxChevronDown } from "react-icons/rx";

const CartNavTop = () => {
  return (
    
      <header className= "bg-white w-full shadow-sm border-b border-gray-300 mt-10">
            {/* Top-Nav */}
            <div className="container flex items-center justify-between py-2">
              <div className="flex gap-2 items-center">
                <img src={LogoSymbol} alt="Logo" />
                <img src={Brand} alt="" />
        </div>
         <nav>
                  <NavItem icon={FaUser} label="Profile" />
                  <NavItem icon={MdMessage} label="Message" />
                  <NavItem icon={AiFillHeart} label="Orders" />
                  <NavItem icon={IoMdCart} label="My Cart" />
                </nav>
        </div>
    </header>
  )
}

// eslint-disable-next-line no-unused-vars
export function NavItem({ icon: Icon, label }) {
  return (
    <button className="text-gray-500 text-sm font-medium">
      <Icon className="h-5 w-5 ms-7" aria-hidden="true" />
      <p className="ms-5">{label}</p>
    </button>
  );
}

export default CartNavTop
