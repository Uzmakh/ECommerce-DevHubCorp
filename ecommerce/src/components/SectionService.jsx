import IndustryHub from "../assets/xs-industryhub.png";
import CustomizeProducts from "../assets/xs-customizeproduct.png";
import FastShipping from "../assets/xs-fastshipping.png";
import ProductMonitoring from "../assets/xs-productmonitoring.png";
import { LuSearch, LuPrinter, LuSend, LuShieldCheck } from "react-icons/lu";

const services = [
  {
    title: "Source from Industry Hubs",
    image: IndustryHub,
    Icon: LuSearch,
  },
  {
    title: "Customize Your Products",
    image: CustomizeProducts,
    Icon: LuPrinter,
  },
  {
    title: "Fast, reliable shipping by ocean or air",
    image: FastShipping,
    Icon: LuSend,
  },
  {
    title: "Product monitoring and inspection",
    image: ProductMonitoring,
    Icon: LuShieldCheck,
  },
];

const SectionService = () => {
  return (
    <section className="my-10">
      <h2 className="mb-5 text-2xl font-bold text-gray-900">
        Our extra services
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {
          // eslint-disable-next-line no-unused-vars
          services.map(({ title, image, Icon }) => (
            <div key={title} className="group overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-36 sm:h-40">
                <img src={image} alt={title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-100"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />
                <div className="absolute right-4 top-[130px] flex h-12 w-12 items-center justify-center rounded-full bg-[#e5f1ff] text-gray-900 shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="py-4">
                <h3 className="w-[65%] ps-3 text-sm font-semibold text-gray-800">
                  {title}
                </h3>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default SectionService;
