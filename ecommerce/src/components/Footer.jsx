import LogoSymbol from "../assets/logo-symbol.png";
import Brand from "../assets/Brand.png";
import GetApp1 from "../assets/get-app-1.png";
import GetApp2 from "../assets/get-app-2.png";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";
import { RxChevronDown } from "react-icons/rx";

const footerLinks = [
  {
    heading: "About",
    items: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    heading: "Partnership",
    items: ["About Us", "Find store", "Categories", "Blogs"],
  },
  {
    heading: "Information",
    items: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  },
  {
    heading: "For users",
    items: ["Login", "Register", "Settings", "My Orders"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      {/* Top-Footer */}
      <div className="container py-10">
        <div className="grid gap-18 lg:grid-cols-12">
          {/* brand-logo */}
          <div className="lg:col-span-3">
            <div className="flex gap-2 items-center">
              <img src={LogoSymbol} alt="Logo" />
              <img src={Brand} alt="" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              Best information about the company goes here but now lorem ipsum
              is
            </p>
            <div className="mt-4 flex items-center gap-2 text-gray-500">
              <SocialIcon icon={TiSocialFacebook} label="Facebook" />
              <SocialIcon icon={TiSocialTwitter} label="Twitter" />
              <SocialIcon icon={TiSocialLinkedin} label="LinkedIn" />
              <SocialIcon icon={TiSocialInstagram} label="Instagram" />
              <SocialIcon icon={TiSocialYoutube} label="YouTube" />
            </div>
          </div>
          {/* footer-links */}
          <div className="grid gap-10 lg:grid-cols-4 lg:col-span-6">
            {footerLinks.map(({ heading, items }) => (
              <div key={heading} className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-900">
                  {heading}
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {items.map((item) => (
                    <li key={item} className="transition hover:text-gray-900">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* get the app */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-gray-900">Get App</h3>
            <div className="mt-2 flex flex-col gap-3">
              <img src={GetApp1} alt="" className="h-14 w-42" />
              <img src={GetApp2} alt="" className="h-14 w-42" />
            </div>
          </div>
        </div>
      </div>
      {/* CopyRight-Footer */}
      <div className="bg-gray-100 text-gray-800">
        <div className="container flex justify-between items-center gap-3 leading-tight py-3 text-sm ">
          <span>© 2023 Ecommerce.</span>
          <button className="inline-flex gap-2 items-center rounded-full px-3 py-1.5 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-gray-500">
            <UsaFlag />
            <span>English</span>
            <RxChevronDown />
          </button>
        </div>
      </div>
      <div className="bg-white h-2 w-full" />
    </footer>
  );
};

// eslint-disable-next-line no-unused-vars
function SocialIcon({ icon: Icon }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300 text-white transition hover:bg-gray-400 hover:text-white">
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}

function UsaFlag() {
  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm ring-1 ring-gray-200">
      <span className="h-full w-2 bg-red-600" aria-hidden />
      <span className="h-full w-2 bg-white" aria-hidden />
      <span className="h-full w-2 bg-blue-600" aria-hidden />
      <span className="sr-only">United States</span>
    </span>
  );
}

export default Footer;
